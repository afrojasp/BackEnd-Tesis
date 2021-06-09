const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    celDespachador : Number,
    correoDespachador : String,
    celFacturas : Number,
    correoFacturas: String
    
})

const model = mongoose.model("clientes", mySchema);
module.exports = model;