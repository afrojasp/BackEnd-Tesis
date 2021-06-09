const Model = require('./model')

async function addGastoMantenimiento(gastoMantenimiento){
    const miGastoMantenimiento = new Model(gastoMantenimiento);
    return await miGastoMantenimiento.save();
}

async function getGastosMantenimiento(filterGastoMantenimiento) {
    return new Promise((resolve,reject) => {
        let filter = {};
        if(filterGastoMantenimiento !== null){
            filter = {user: filterGastoMantenimiento}
        }
        Model.find(filter)
            .populate('tipo')
            .populate('vehiculo')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                }
                resolve(populated)
            } )

    })
}

async function updateGastoMantenimiento(id, gastoMantenimiento){
    var gastoMantenimientoModificar = await Model.findOne({
        _id: id
    });

    gastoMantenimientoModificar.monto = gastoMantenimiento.monto
    gastoMantenimientoModificar.tipo = gastoMantenimiento.tipo
    const newGastoMantenimiento = await gastoMantenimientoModificar.save();
    return newGastoMantenimiento
}

function removeGastoMantenimiento(id){
    return Model.deleteOne({
        _id: id
    })
}



module.exports = {
    add: addGastoMantenimiento,
    list: getGastosMantenimiento,
    updateVehiculo : updateGastoMantenimiento,
    remove: removeGastoMantenimiento
}