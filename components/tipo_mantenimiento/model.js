const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    nombre: {
        type: String,
        required: true
    }
    
})

const model = mongoose.model("tipos_mantenimiento", mySchema);
module.exports = model;