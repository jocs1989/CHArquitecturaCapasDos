import { Router } from 'express'

import {
  agregarProductoCarrito,
  borrarCarrito,
  borrarProductoCarrito,
  mostrarCarrito,
  nuevoCarrito
} from '../controller/carrito.controller.js'

const router = Router()
//routes
router.post('/', nuevoCarrito)
router.delete('/:id', borrarCarrito)
router.get('/:id/productos',mostrarCarrito )
router.post('/:id/productos',agregarProductoCarrito )
router.delete('/:id/productos/:id_prod', borrarProductoCarrito)

export default router
