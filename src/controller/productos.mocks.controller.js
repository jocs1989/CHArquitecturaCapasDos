import Mocks from '../utils/mocks/productos.mocks.js'

const articulos = new Mocks()
const datosAgregados = {}
export async function getAll  (req, res) {
    try {
      const respuesta = await articulos.getAll()
      res.status(200).json(respuesta)
      // res.status(200).render('partials/productos',{artuculos: respuesta});
    } catch (err) {
      console.error(err)
      res.status(400).json({ error: err.toString() })
    }
  }
export async function getById  (req, res) {
    try {
      const id = req.params.id
      const result = await articulos.getById(id)
      if (result === null) {
        throw new Error('No Existe el producto')
      } else {
        res.status(200).json({ articulo: await result })
      }
    } catch (err) {
      console.error(err)
      res.status(400).json({ error: err.toString() })
    }
    //
  }
export async function addProduct (req, res) {
    try {
      const valores = await articulos.save(producto)
      res.status(200).json(valores)
    } catch (err) {
      console.error(err)
      res.status(400).json({ error: err.toString() })
    }
  }
export async function  updateProductById(req, res)  {
    try {
      res.status(200).json(await articulos.updateById(req.params.id))
    } catch (err) {
      console.error(err)
      res.status(400).send({ error: 'datos incorrectos' })
    }
  }
export async function  deleteProductById  (req, res) {
    try {
      const id = req.params.id
      res.status(200).json(await articulos.deleteById(id))
    } catch (err) {
      console.error(err)
      res.status(400).json({ error: 'datos incorrectos' })
    }
  }