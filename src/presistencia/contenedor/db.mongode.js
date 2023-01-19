import mongoose from 'mongoose';

import config from '../../config/index.js';

export default class BDMongoose{

    
    constructor(){
        n+=1
        cpnsole.log(n)
        this.uri = config.MONGO_DB.uri
        conn= mongoose.createConnection(this.uri)  

    }
    static connection(){
        if(!conn){
            console.log('Crendo nueva conexion')
            return new BDMongoose()
        }
        console.log('Usando conexion Existente')
        return conn
    }
    
}