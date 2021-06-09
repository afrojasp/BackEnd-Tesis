const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    tipo: {
        type: Schema.ObjectId,
        ref: 'tipos_gasto_mantenimiento',
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
    monto: {
        type: Number,
        required: true,
    },
    vehiculo:{
        type: Schema.ObjectId,
        ref: 'vehiculos',
        required: true
    }
})

const model = mongoose.model("gastos_mantenimiento", mySchema);
module.exports = model;