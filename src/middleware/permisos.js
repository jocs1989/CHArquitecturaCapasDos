export function isAdmin (req, res, next) {
  console.log(req.session.administrador)
  if (req.session.administrador) {
    next()
  } else {
    res.status(403).json({
      error: `-1,descripcion:  ruta ${req.url} método ${req.method}  no autorizada`
    })
  }
}
