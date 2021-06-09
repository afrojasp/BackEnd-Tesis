const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'usuarios'
    },
    placa : {
        type: String,
        required: true,
    },
    color: String,
    marca: String,
    referencia: String

    
})

const model = mongoose.model("vehiculos", mySchema);
module.exports = model;