import mongoose from 'mongoose'

const { Schema } = mongoose

const opcionSchema =
   {
     autor: {
       idChat: { type: String, required: true, minlength: 2, maxlength: 100 },
       nombre: { type: String, required: true, minlength: 2, maxlength: 15 },
       apellido: { type: String, required: true, minlength: 2, maxlength: 40 },
       edad: { type: Number, required: true, maxlength: 1, default: 150 },
       alias: { type: String, required: true, minlength: 2, maxlength: 40 },
       avatar: { type: String, required: true, maxlength: 200 },
       timestamp: { type: Date, default: Date.now }
     },
     text: [{

       msg: { type: String, required: true, minlength: 1, maxlength: 200 },
       timestamp: { type: Date, default: Date.now }
     }
     ]
   }

const Collection = 'Chat'

export { opcionSchema, Collection }
