import Contenedora from '../../contenedor/contenedora.mongodb.js'
import {
  Collection,
  opcionSchema
} from '../../models/user.models.js'

class Carrito extends Contenedora {
  constructor () {
    super(Collection, opcionSchema)
  }

  async getUsuario (usuario) {
    const filter = { email: usuario.email }
    const respuesta = await this.bd.findOne(filter)
   
   
    if (!respuesta) {
      return null
    }

    return respuesta
  }

  async getUsuarioHash (usuario) {
    const filter = { email: usuario.email }
    const respuesta = await this.bd.findOne(filter)
    if (!respuesta) {
      return null
    }
    // poner map si no jala
    const hash = respuesta.reduce(item => { return item.password })
    return hash
  }

  async saveUser (usuario) {
    console.log('Entro')
    const valores = await this.save(usuario)

    return valores.map((item) => {
      return {
        _id: item._id,
        nombre: item.nombre,
        role: item.role,
        timestamp: item.timestamp
      }
    })[0]
  }

  async getAllUser () {
    const valores = await this.getAll()

    return valores.map((item) => {
      return {
        _id: item._id,
        nombre: item.nombre,
        email: item.email,
        role: item.role,
        timestamp: item.timestamp
      }
    })
  }
}

export default Carrito
