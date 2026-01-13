import express from 'express'

import * as userController from '../controllers/user.js'

const router = express.Router()

router.get('/', userController.getAllUsers)

router.post('/', userController.createUser)

export { router }
