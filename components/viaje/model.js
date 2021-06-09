const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    origen: {
        type: Schema.ObjectId,
        ref: 'ciudades',
        required: true
    },
    destino: {
        type: Schema.ObjectId,
        ref: 'ciudades',
        required: true
    },
    codigoManifesto: {
        type:String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaFinalizacion: {
        type: Date,
        required: false
    },
    fotoManifesto: {
        type: Buffer,
        required: false
    },
    cliente: {
        type: Schema.ObjectId,
        ref: 'clientes',
        required: true
    },
    vehiculo: {
        type: Schema.ObjectId,
        ref: 'vehiuculos',
        required: true
    },
    conductor: {
        type: Schema.ObjectId,
        ref: 'usuarios',
        required: true
    },
    dueño: {
        type: Schema.ObjectId,
        ref: 'usuarios',
        required: true
    }
})

const model = mongoose.model("viajes", mySchema);
module.exports = model;