import ClassChat from '../presistencia/dao/chat/index.js'

const datosAgregados = {}
const chat = ClassChat

export async function allChats(req, res) {
    try {
      const respuesta = await chat.getAll()
  
      res.status(200).json(respuesta)
      // res.status(200).render('partials/productos',{artuculos: respuesta});
    } catch (err) {
      console.error(err)
      res.status(400).json({ error: err.toString() })
    }
  }

export async function chatId (req, res) {
    try {
      const id = req.params.id
      const result = await chat.getById(id)
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

export async function newUserChat (req, res) {
    try {
      const idChat = req.body.idChat
      const nombre = req.body.nombre
      const apellido = req.body.apellido
      const edad = req.body.edad
      const alias = req.body.alias
      const avatar = req.body.avatar
      const msg = req.body.msg
      const autor = { idChat, nombre, apellido, edad, alias, avatar }
      const registro = await chat.get({ autor })
      if (registro) {
        await chat.setAddMsg(registro._id, { text: [{ msg }] })
        res.status(200).json(registro._id)
      } else {
        const valores = await chat.save({ autor, text: [{ msg }] })
        const registro = await chat.get({ autor })
        res.status(200).json(registro._id)
      }
      // ;
    } catch (err) {
      console.error(err)
      res.status(400).json({ error: err.toString() })
    }
  }

export async function deleteChat (req, res) {
    try {
      const id = req.params.id
      res.status(200).json(await chat.deleteById(id))
    } catch (err) {
      console.error(err)
      res.status(400).json({ error: 'datos incorrectos' })
    }
  }