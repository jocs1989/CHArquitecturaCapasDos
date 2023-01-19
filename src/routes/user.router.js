import { Router } from 'express'
import { newUser, registrarUsuario } from '../controller/user.controller.js'
import { validateUser } from '../middleware/schemas/schema.user.js'

const router = Router()
router.get('/', registrarUsuario)
router.post('/', validateUser(), newUser)
export default router
