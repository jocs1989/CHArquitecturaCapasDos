import { Router } from 'express'

import {
  allChats,
  chatId,
  deleteChat,
  newUserChat
} from '../controller/chat.controller.js'
import { isAdmin } from '../middleware/permisos.js'
import ClassChat from '../presistencia/dao/chat/index.js'

const router = Router();
const datosAgregados = {};
const chat = ClassChat;

router.get("/", allChats);

router.get("/:id", chatId);

router.post("/", isAdmin, newUserChat);

router.delete("/:id", isAdmin, deleteChat);

export default router;
