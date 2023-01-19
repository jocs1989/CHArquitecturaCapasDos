import { faker } from '@faker-js/faker/locale/es_MX'

class Contenedora {
  constructor () {
    this.datos = []

    for (let i = 0; i < 5; i++) {
      const nombre = faker.commerce.product()
      const producto = {
        _id: faker.database.mongodbObjectId(),
        nombre,
        descripcion: faker.commerce.productDescription(),
        codigo: faker.commerce.price(1000, 5000, 0),
        url: faker.image.imageUrl(1234, 2345, nombre, true),
        precio: faker.commerce.price(100, 1000, 0),
        stock: faker.commerce.price(0, 100, 0),
        timestamp: Date.now()
      }

      this.datos.push(producto)
    }
  }

  async save (object = null) {
    const nombre = faker.commerce.product()
    object = {
      _id: faker.database.mongodbObjectId(),
      nombre,
      descripcion: faker.commerce.productDescription(),
      codigo: faker.commerce.price(1000, 5000, 0),
      url: faker.image.imageUrl(1234, 2345, nombre, true),
      precio: faker.commerce.price(100, 1000, 0),
      stock: faker.commerce.price(0, 100, 0),
      timestamp: Date.now()
    }

    await this.datos.push(object)
    return object
  }

  async updateById (id) {
    try {
      const nombre = faker.commerce.product()
      const producto = {
        _id: id,
        nombre,
        descripcion: faker.commerce.productDescription(),
        codigo: faker.commerce.price(1000, 5000, 0),
        url: faker.image.imageUrl(1234, 2345, nombre, true),
        precio: faker.commerce.price(100, 1000, 0),
        stock: faker.commerce.price(0, 100, 0),
        timestamp: Date.now()
      }

      const filter = this.datos.map((items) => {
        if (String(items._id) === String(id)) {
          const res = { ...items, ...producto }
          return res
        } else {
          return items
        }
      })

      this.datos = filter

      return await {
        ...this.datos.filter((items) => {
          if (items._id === id) {
            const res = { ...items, ...producto }
            return res
          }
        })
      }
    } catch (err) {
      throw new Error(err)
    }
  }

  async getAll () {
    try {
      return await this.datos
    } catch (err) {
      throw new Error(err)
    }
  }

  async getById (id) {
    try {
      const busqueda = await {
        ...this.datos.filter((items) => {
          if (String(items._id) === String(id)) {
            return items
          }
        })
      }
      if (busqueda === null) {
        throw new Error('No existe el producto')
      }
      return busqueda
    } catch (err) {
      throw new Error(err)
    }
  }

  async deleteById (id) {
    try {
      const data = this.datos.filter((items) => items._id !== id)
      const res = this.datos.filter((items) => items._id === id)
      this.datos = data
      return res
    } catch (err) {
      throw new Error(err)
      // console.log(err)
    }
  } // end deleteById

  async deleteAll () {
    try {
      this.datos = []
    } catch (err) {
      console.error(err)
      throw new Error(err)
    }
  } // end deleteAll
}

export default Contenedora
