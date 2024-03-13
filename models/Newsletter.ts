import mongoose, { Schema, model } from 'mongoose'

const NewsLetterSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  subscribed: {
    type: Boolean,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  receivedBids: [
    {
      id: String,
      name: String,
      slug: String,
      message: String,
    },
  ],
})

const NewsLetterModel = mongoose.models.NewsLetter || model('NewsLetter', NewsLetterSchema)

export default NewsLetterModel
