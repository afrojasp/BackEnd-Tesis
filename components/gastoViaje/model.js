const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    tipo: {
        type: Schema.ObjectId,
        ref: 'tipos_gasto_viajes',
        required: true
    },
    viaje: {
        type: Schema.ObjectId,
        ref: 'viajes',
        requiered: true
    },
    monto: {
        type: Number,
        required: true,
    },
    foto: {
        type: Buffer,
        required: false
    }

    
})

const model = mongoose.model("gastos_viaje", mySchema);
module.exports = model;