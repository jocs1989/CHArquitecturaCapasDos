export class DtoProductos{
    constructor(productos){

        this.data=productos.map(items => {
            return {
                id:items.id,
                nombre:items.nombre,
                codigo:items.codigo,
                descripcion:items.descripcion,
                precio:items.precio,
                url:items.url,
                stock:items.stock,
                timestamp:items.timestamp,
            }
          })
         

    }
    getAll(){
        return this.data
            
        


        }
    }
       
