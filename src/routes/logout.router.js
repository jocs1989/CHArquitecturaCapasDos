import { Router } from 'express'
import passport from 'passport'

import {
  endSession,
  newSession,
  startSession
} from '../controller/logout.controller.js'
import { configPassport } from '../middleware/loggin/passport.js'
import { validateUserLogin } from '../middleware/schemas/schema.user.js'

configPassport(passport);

const router = Router()
router.get('/', startSession)
router.get('/logout', endSession)
router.post(
  "/",
  validateUserLogin(),
  passport.authenticate("local", {
    
    failureRedirect: "/api/login",
  }),newSession
);

export default router
