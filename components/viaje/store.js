const Model = require('./model')

async function addViaje(viaje){
    const miViaje = new Model(viaje);
    return await miViaje.save();
}

async function getViajes(filterViajes) {
    return new Promise((resolve,reject) => {
        let filter = {};
        if(filterViajes !== null){
            filter = {dueño: filterViajes}
        }
        Model.find(filter)
            .populate('origen')
            .populate('destino')
            .populate('cliente')
            .exec((error, populated) => {
                if(error){
                    reject(error);
                    return false;
                }
                resolve(populated)
            } )

    })
}

async function updateViaje(id, viaje){
    var viajeModificar = await Model.findOne({
        _id: id
    });

    if(viaje.fotoManifesto){
        viajeModificar.fotoManifesto = viaje.fotoManifesto
    }
    else if(viaje.estado){
        viajeModificar.estado = viaje.estado
    }
    const newViaje = await viajeModificar.save();
    return newViaje
}
    
function removeViaje(id){
    return Model.deleteOne({
        _id: id
    })
}



module.exports = {
    add: addViaje,
    list: getViajes,
    updateVehiculo : updateViaje,
    remove: removeViaje
}