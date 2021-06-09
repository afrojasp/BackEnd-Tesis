const Model = require('./model')

async function addTiposGastoViaje(tipoGastoViaje){
    const miTipoGastoViaje = new Model(tipoGastoViaje);
    return await miTipoGastoViaje.save();
}

async function getTiposGastoViaje(filterTiposGastoViaje) {
    let filter = {};
    if(filterTiposGastoViaje !== null){
        filter = {nombre: filterTiposGastoViaje}
    }
    const misTiposGastoViaje = await Model.find(filter)
    return misTiposGastoViaje
}

function removeTipoGastoViaje(id){
    return Model.deleteOne({
        _id: id
    })
}



module.exports = {
    add: addTiposGastoViaje,
    list: getTiposGastoViaje,
    remove: removeTipoGastoViaje
}