const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    cedula: {
        type: Number,
        required: true,
    },
    nombre: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    numero: {
        type: Number,
        required: true
    },
    tipo: {
        type: String,
        required: true,
    },
    jefe:{
        type: Schema.ObjectId,
        ref: 'usuarios',
        required: false
    }
})

const model = mongoose.model("usuarios", mySchema);
module.exports = model;