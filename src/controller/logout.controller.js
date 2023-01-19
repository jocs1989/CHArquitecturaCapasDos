import bcrypt from 'bcrypt'

import * as Boom from '@hapi/boom'

import { getAllProducts } from '../controller/productos.controller.js'
import users from '../presistencia/dao/user/index.js'

export async function startSession(req, res, next) {
  try {
    res.status(200).render("partials/login", { datos: { resultado: true } });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.toString() });
  }
}

export async function endSession(req, res, next) {
  try {
    req.session.destroy((err) => {
      if (err) {
        next(Boom.notFound('No existe seccion'))
        
      }

    
    });
    getAllProducts(req,res,next);
  } catch (err) {
    
    next(Boom.notFound(err.toString()))
   
  }
}

export async function newSession(req, res, next) {
  try {
    const usuario = {
      password: req.body.password,
      email: req.body.username,
    };
    
    const result = [await users.getUsuario(usuario)].map((item) => {
      return {
        hash: item.password,
        role: item.role,
        nombre: item.nombre,
        email: item.email,
      };
    });

    if (result) {
      const acceso = await bcrypt.compare(
        usuario.password,
        String(result[0].hash)
        
      );      
      delete result[0].hash;      
      if (acceso) {
       
        req.session.active = true;
        if (result[0].role == "admin") {
          req.session.administrador = true;
        } else {
          req.session.administrador = false;
        }
        req.session.email = result[0].email;
        req.session.name = result[0].nombre;
        res.status(200).render("partials/usuario", { usuario: result[0] });
      } else {
        res.status(400).render({ acceso: "El usuario no existe" });
      }
    }
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err.toString() });
  }
}
