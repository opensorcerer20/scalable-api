import { dbClose, dbConnect } from '#config/db.js'
import User from '#models/user.js'

const seedUsers = [{ name: 'first user' }, { name: 'second user' }]

const seedDB = async () => {
  try {
    await dbConnect()

    await User.deleteMany({})
    //console.log('Database dropped successfully')

    await User.insertMany(seedUsers)
    console.log('Database seeded successfully!')
  } catch (err) {
    console.error('Error seeding database:', err)
  } finally {
    await dbClose()
  }
}

seedDB()
