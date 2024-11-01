import colors from '../data/colors.json' assert { type: 'json' }
import icons from '../data/icons.json' assert { type: 'json' }
import themes from '../data/themes.json' assert { type: 'json' }
import siteMetadata from '../data/siteMetadata.js'
import fs from 'fs'

const generate = () => {
  const siteUrl = siteMetadata.siteUrl

  let siteMap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><--urls--></urlset>`

  const urlSet = colors.reduce((acc, color) => {
    const params = new URLSearchParams()
    params.append('color', color.hex.toLowerCase())
    return (
      acc +
      `
<url>
  <loc>${siteUrl}/generateur-nuances-couleurs-tailwind-css?${params.toString()}</loc>
  <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  <priority>0.7</priority>
</url>
    `
    )
  }, '')

  const iconsUrls = icons.reduce((acc, icon) => {
    const params = new URLSearchParams()
    params.append('name', icon.name)
    params.append('id', icon.id)
    return (
      acc +
      `
<url>
  <loc>${siteUrl}/icons/search?${params.toString().replace(/&/g, '&amp;')}</loc>
  <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  <priority>0.7</priority>
</url>
    `
    )
  }, '')

  const templatesUlrsSet = themes.reduce((acc, theme) => {
    return (
      acc +
      `
<url>
  <loc>${siteUrl}/templates/${theme.slug}</loc>
  <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  <priority>0.7</priority>
</url>
    `
    )
  }, '')

  fs.writeFileSync('./public/sitemap-couleurs.xml', siteMap.replace('<--urls-->', urlSet))
  fs.writeFileSync('./public/sitemap-icons.xml', siteMap.replace('<--urls-->', iconsUrls))
  fs.writeFileSync(
    './public/sitemap-templates.xml',
    siteMap.replace('<--urls-->', templatesUlrsSet)
  )
}

generate()
