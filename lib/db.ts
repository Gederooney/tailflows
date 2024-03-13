import { ConnectOptions, connect, connection } from 'mongoose'

const { MONGO_URI = '' } = process.env

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
} as ConnectOptions

export const connectToDatabase = async () => {
  if (!connection.readyState) {
    await connect(MONGO_URI, options)
    console.log('Connected to', MONGO_URI)
  }
}
