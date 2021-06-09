const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
    
})

const model = mongoose.model("ciudades", mySchema);
module.exports = model;