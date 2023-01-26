import chai from 'chai';
import express from 'express';
import request from 'supertest';

import Productos from '../presistencia/dao/productos/index.js';
import apiRouter from '../routes/index.js';

let should = chai.should();
const datosAgregados = {};
const articulos = Productos;
let product = {
  articulo: {
    _id: "a4fcf0bdcdfc86bf0dc4d986",
    nombre: "Computadora",
    descripcion:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    codigo: 1640,
    url: "https://loremflickr.com/1234/2345/Computadora?lock=41586",
    precio: 656,
    stock: 40,
    timestamp: "2022-11-17T00:53:25.383Z",
    __v: 0,
  },
};

let app = express();
apiRouter(app);

describe("Test Router /api/user/", () => {


describe('POST /api/user/', () => {
  it('Agregando usuario', async () => {
    request(app)
      .post('/api/user/')
      .send({
       
        nombre: "joc",
        email: "joc@uncorreo.com",
        direccion: "av mexico centra",
        edad: "35",
        phone: "5541362547",
        password: "12345",
        role: "admin",
        urlImg: "/home/jocs/coderHouse/CHDesafioFinal3/src/controller/../file/minion.jpg",
        timestamp: "2023-01-07T20:58:12.188Z",
        
      })
      .expect(200)
      .end((err,res)=>{
        res.body.should.be.a('object');
        res.body.should.equal({ acceso: "usuario creado" });
   
    if (err) done(err);
    done();
   
  })
  });
});
});