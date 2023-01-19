import { Router } from 'express'

import {
  addProduct,
  deleteProductById,
  getAllProducts,
  getProductsById,
  updateProductById
} from '../controller/productos.controller.js'
import { isAdmin } from '../middleware/permisos.js'

const router= Router();
router.get('/', getAllProducts )

router.get('/:id', getProductsById)

router.post('/', isAdmin, addProduct)

router.put('/:id', isAdmin,updateProductById )

router.delete('/:id', isAdmin, deleteProductById)
export default router
