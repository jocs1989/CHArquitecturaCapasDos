import carrito from '../presistencia/dao/carrito/index.js'

export async function nuevoCarrito(req, res) {
  try {
    const idArticulo = req.body.idArticulo;
    const cantidad = req.body.cantidad;
    const valores = await carrito.setNewCar(idArticulo, cantidad);
    res.status(200).json(valores);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.toString() });
  }
}
export async function borrarCarrito(req, res) {
  try {
    await carrito.setDellCarById(req.params.id);
    res.status(200).json({});
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: "datos incorrectos" });
  }
}

export async function mostrarCarrito(req, res) {
  try {
    const { id } = req.params;
    const result = await carrito.getAllCar(id);
    if (result === null) {
      throw new Error("No Existe el producto");
    } else {
      res.status(200).json({ articulo: await result });
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.toString() });
  }
  //
}

export async function agregarProductoCarrito(req, res)  {
  try {
    const idCarrito = req.params.id
    const idArticulo = req.body.idArticulo
    const cantidad = req.body.cantidad
    const producto = await carrito.setAddProductCar(
      idCarrito,
      idArticulo,
      cantidad
    )
    res.status(200).json(producto)
  } catch (err) {
    console.error(err)
    res.status(400).send({ error: 'datos incorrectos' })
  }
}

export async function borrarProductoCarrito(req, res) {
  try {
    const idCarrito = req.params.id
    const idArticulo = req.params.id_prod
    const producto = await carrito.setDellProductCar(idCarrito, idArticulo)
    res.status(200).json(producto)
  } catch (err) {
    console.error(err)
    res.status(400).send({ error: 'datos incorrectos' })
  }
}