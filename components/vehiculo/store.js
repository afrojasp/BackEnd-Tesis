const Model = require('./model')

async function addVehiculo(vehiculo){
    const miVehiculo = new Model(vehiculo);
    return await miVehiculo.save();
}

async function getVehiculos(filterVehiculos) {
    return new Promise((resolve,reject) => {
        let filter = {};
        if(filterVehiculos !== null){
            filter = {user: filterVehiculos}
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                }
                resolve(populated)
            } )

    })
}

async function updateVehiculo(id, vehiculo){
    var vehiculoModificar = await Model.findOne({
        _id: id
    });

    vehiculoModificar.marca = vehiculo.marca
    vehiculoModificar.referencia = vehiculo.referencia
    vehiculoModificar.color = vehiculo.color
    vehiculoModificar.placa = vehiculo.placa
    const newVehiculo = await vehiculoModificar.save();
    return newVehiculo
}

function removeVehiculo(id){
    return Model.deleteOne({
        _id: id
    })
}



module.exports = {
    add: addVehiculo,
    list: getVehiculos,
    updateVehiculo : updateVehiculo,
    remove: removeVehiculo
}