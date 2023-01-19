function randoms () {
  return function (req, res) {
    console.log('Entro')
    console.log(req)
    const cant = req.query.cant || 100000000
    const max = 1000
    const min = 1
    const resultado = {}
    console.log()
    for (let i = 1; i <= cant; i++) {
      const dato = Math.floor(Math.random() * (max - min + 1) + min)
      if (resultado[dato]) {
        resultado[dato] = resultado[dato] + 1
      } else {
        resultado[dato] = 1
      }
    }
    return { respuesta: resultado }
  }
}

export default randoms()
