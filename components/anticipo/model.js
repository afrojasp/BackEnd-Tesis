const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    montoInicial: {
        type: Number,
        required: true
    },
    montoTotal: {
        type : Number,
        required: true
    },
    receptorJefe: {
        type: Boolean,
        required: true
    },
    tipo: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        required: true
    },
    fechaCancelacion: {
        type: Date,
        required: true
    },
    cancelado: {
        type: Boolean,
        required: true
    },
    viaje: {
        type: Schema.ObjectId,
        ref: 'viajes',
        required: true
    }
    
})

const model = mongoose.model("anticipos", mySchema);
module.exports = model;