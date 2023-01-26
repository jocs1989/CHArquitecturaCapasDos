import assert from 'assert';

import Productos from '../presistencia/dao/productos/index.js';
import {
  DtoProducto,
} from '../presistencia/dto/productos/producto.dto.mongodb.js';

const articulos = Productos

describe("Test Base de datos", () => {
    describe("Clase Productos.getById", async () => {
        it("Deberia listar un producto por id",  async () => {
            const product = {
                _id: "a4fcf0bdcdfc86bf0dc4d986",
                nombre: "Computadora",
                descripcion: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                codigo: 1640,
                url: "https://loremflickr.com/1234/2345/Computadora?lock=41586",
                precio: 656,
                stock: 40,
                timestamp: "2022-11-17T00:53:25.383Z",
                __v: 0
              }

             const vl= await articulos.getById("a4fcf0bdcdfc86bf0dc4d986",1)
            
             
              assert.strictEqual(product,product)
           

        })
    })

    describe("DtoProducto", async () => {
        it("Filtra  un producto por id en un objeto",  async () => {
            const productResult = {
                
                id: "a4fcf0bdcdfc86bf0dc4d986",
                nombre: "Computadora",
                descripcion: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                codigo: 1640,
                url: "https://loremflickr.com/1234/2345/Computadora?lock=41586",
                precio: 656,
                stock: 40,
                timestamp: "2022-11-17T00:53:25.383Z",
               
              }
              const product = {
                _id: "a4fcf0bdcdfc86bf0dc4d986",
                nombre: "Computadora",
                descripcion: "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
                codigo: 1640,
                url: "https://loremflickr.com/1234/2345/Computadora?lock=41586",
                precio: 656,
                stock: 40,
                timestamp: "2022-11-17T00:53:25.383Z",
                __v: 0
              }

             const vl= await articulos.getById("a4fcf0bdcdfc86bf0dc4d986")

             
            
             
              assert.strictEqual(new DtoProducto(vl).getProduct(),productResult)
           

        })


    });
})