const Model = require('./model')

async function addGastoViaje(gastoViaje){
    const miGastoViaje = new Model(gastoViaje);
    return await miGastoViaje.save();
}

async function getGastosViaje(filterGastoViaje) {
    return new Promise((resolve,reject) => {
        let filter = {};
        if(filterGastoViaje !== null){
            filter = {user: filterGastoViaje}
        }
        Model.find(filter)
            .populate('tipo')
            .populate('viaje')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                }
                resolve(populated)
            } )

    })
}

async function updateGastoViaje(id, gastoViaje){
    var gastoViajeModificar = await Model.findOne({
        _id: id
    });

    gastoViajeModificar.monto = gastoViaje.monto
    gastoViajeModificar.tipo = gastoViaje.tipo
    const newGastoViaje = await gastoViajeModificar.save();
    return newGastoViaje
}

function removeGastoViaje(id){
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addGastoViaje,
    list: getGastosViaje,
    updateVehiculo : updateGastoViaje,
    remove: removeGastoViaje
}