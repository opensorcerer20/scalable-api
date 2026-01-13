import { DB_URI } from '#config/env.js'
import mongoose from 'mongoose'

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(DB_URI)

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(`Error: ${err.message}`)
    process.exit(1) // Exit process with failure
  }
}

export const dbClose = async () => {
  await mongoose.connection.close()
  console.log('MongoDB connection closed')
}
