import chai from 'chai';
import express from 'express';
import request from 'supertest';

import Productos from '../presistencia/dao/productos/index.js';
import apiRouter from '../routes/index.js';
import Mocks from '../utils/mocks/productos.mocks.js';

const art = new Mocks()
const valores = await art.save()
valores.administrador=true
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
    administrador:true,
    __v: 0,
  },
};

let app = express();
apiRouter(app);

describe("Test Router /api/productos/", () => {
  describe("GET /api/productos/:id", () => {
    it("debería responder con un código de estado 200 para la ruta /", (done) => {
      request(app)
        .get("/api/productos/a4fcf0bdcdfc86bf0dc4d986")
        .expect(200)

        .end((err, res) => {
          res.body.should.be.a("object");
          res.body.should.equal(product);

          if (err) done(err);
          done();
        });
    });
  });
  describe('POST /api/productos/', () => {
    it('Agregando un producto', async () => {
      request(app)
        .post('/api/productos/')
        .send(product.articulo)
        .expect(200)
        .end((err,res)=>{
          console.log( res.body)
          res.body.should.be.a('object');
          res.body.should.equal(valores);
     
      if (err) done(err);
      done();
     
    })
    });
  });
  
});
