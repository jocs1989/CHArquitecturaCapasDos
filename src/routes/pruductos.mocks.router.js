import { Router } from 'express'

import {
  addProduct,
  deleteProductById,
  getAll,
  getById,
  updateProductById
} from '../controller/productos.mocks.controller.js'
import { isAdmin } from '../middleware/permisos.js'

const router = Router()
router.get('/', getAll)

router.get('/:id', getById)

router.post('/', isAdmin, addProduct )

router.put('/:id', isAdmin,updateProductById )

router.delete('/:id', isAdmin,deleteProductById )

export default router
