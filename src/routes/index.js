import Carrito from './carrito.router.js'
import Filtro from './filtro.routes.js'
import Productos from './pruductos.router.js'
import ProductosTest from './pruductos.mocks.router.js'
import Chat from './chat.router.js'
import User from './user.router.js'
import Login from './logout.router.js'

function managerRouter (app) {
  // administrar las rutas del negocio
  
  app.use('/api/productos/', Productos)
  app.use('/api/carrito/', Carrito)
  app.use('/api/productos-test/', ProductosTest)
  app.use('/api/chat/', Chat)
  app.use('/api/user/', User)
  app.use('/api/login/', Login)
  app.use('*', Filtro)
}

export default managerRouter
