import { connectToDatabase } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import NewsLetterModel from '@/models/Newsletter'
import nodemailer from 'nodemailer'
import fs, { ReadStream } from 'node:fs'
import path from 'node:path'
import type { IBid } from '@/components/Newsletter/hooks/useNewsletter'
import axios from 'axios'

const { ZOHO_APP_USER, ZOHO_APP_PASSWORD, ZOHO_MAIL_SENDER, CAPTCHA_SECRET_KEY } = process.env

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  secure: true,
  port: 465,
  auth: {
    user: ZOHO_APP_USER,
    pass: ZOHO_APP_PASSWORD,
  },
})

const verifyCaptcha = async (token: string) => {
  const res = await axios.post(
    'https://www.google.com/recaptcha/api/siteverify',
    `secret=${CAPTCHA_SECRET_KEY}&response=${token}`,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  )

  const { success, score } = res.data

  if (success && score > 0.5) return true

  return false
}

const alreadySubscrbed = async (
  email: string,
  bid?: IBid
): Promise<{
  alreadyReceivedBid?: boolean
  alreadySubscribed: boolean
}> => {
  const found = await NewsLetterModel.findOne({ email })

  if (typeof bid !== 'undefined' && found) {
    const alreadyReceivedBid = found.receivedBids.some(
      (receivedBid: IBid) => receivedBid.id === bid.id
    )
    return {
      alreadyReceivedBid,
      alreadySubscribed: true,
    }
  }
  return {
    alreadySubscribed: !!found,
  }
}

export const POST = async (req: NextRequest) => {
  const { email, bid, recaptchaToken } = await req.json()

  const isOptin = typeof bid !== 'undefined'
  let message = ''
  await connectToDatabase()

  try {
    const isHuman = await verifyCaptcha(recaptchaToken)

    if (!isHuman) {
      message = 'Nous ne pouvons pas vérifier que vous êtes humain'
      return NextResponse.json(
        {
          error: true,
          message,
        },
        { status: 200 }
      )
    }

    const state = await alreadySubscrbed(email, bid)

    if (!isOptin && state.alreadySubscribed) {
      message = `Le courriel ${email} est déjà inscrit`
      return NextResponse.json(
        {
          error: true,
          message,
        },
        { status: 200 }
      )
    }

    if (isOptin && state.alreadyReceivedBid) {
      message = `Le courriel ${email} a déjà reçu ${bid.name}`
      return NextResponse.json(
        {
          error: true,
          message,
        },
        { status: 200 }
      )
    } else if (isOptin) {
      const filePath = path.join(process.cwd(), 'public/static/zip', `${bid.slug}.zip`)
      let file: ReadStream | null = null

      if (fs.existsSync(filePath)) {
        file = fs.createReadStream(filePath)
        file.on('end', () => {
          file?.close()
        })
      }

      const mailOptions = {
        from: ZOHO_MAIL_SENDER,
        to: email,
        subject: bid.name,
        html: `
        <!DOCTYPE html>
        <html lang="fr">
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width" />
            <title>Envoi de ${bid.name}</title>
          </head>
          <style type="text/css">
          h1{
            font-weight:bold; 
            font-size:30px; 
            color:black
            font-familly:"Poppins", sans-serif;
          }
          </style>
          <body>
            <div>
            <h1>Hello,</h1>
            <p>Vous recevez ce courriel de la part de Rony pour ${bid.name}.</p>
            <p>Si le fichier n'est pas joint dans le présent courriel, vous pouvez toujours le cliquer sur le lien suivant pour le télécharger:</p>
            <p>
              <a href="https://gederooney.com/static/zip/${bid.slug}.zip">Téléchargez</a>
            </p>
            </div>
          </body>
        `,
        // attachments: [
        //   {
        //     filename: bid.slug, // Name of the attached zip file
        //     content: file, // Stream of the attached zip file
        //   },
        // ],
      }
      await transporter.sendMail(mailOptions)

      await NewsLetterModel.updateOne(
        { email },
        {
          $push: {
            receivedBids: {
              ...bid,
            },
          },
        },
        { upsert: true }
      )

      return NextResponse.json(
        {
          message: `${bid.name} envoyé à ${email}`,
        },
        { status: 201 }
      )
    }
    await NewsLetterModel.create({ email, subscribed: true })
    return NextResponse.json(
      {
        message: `Bien inscrit avec le courriel: ${email}`,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error.message)
    const message = isOptin
      ? `Une erreur s'est produite lors de l'envoi du courriel de ${bid.name} à ${email}`
      : `Une erreur s'est produite lors de l'enregistement de: ${email}`
    return NextResponse.json(
      {
        error: true,
        message,
      },
      {
        status: 500,
      }
    )
  }
}
