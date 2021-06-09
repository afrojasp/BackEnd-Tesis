const Model = require('./model')

async function addTipoMantenimiento(tipoMantenimiento){
    const miTipoMantenimiento = new Model(tipoMantenimiento);
    return await miTipoMantenimiento.save();
}

async function getTiposMantenimiento(filterTipoMantenimiento) {
    let filter = {};
    if(filterTipoMantenimiento !== null){
        filter = {nombre: filterTipoMantenimiento}
    }
    const misTiposMantenimiento = await Model.find(filter)
    return misTiposMantenimiento
}

function removeTipoMantenimiento(id){
    return Model.deleteOne({
        _id: id
    })
}

module.exports = {
    add: addTipoMantenimiento,
    list: getTiposMantenimiento,
    remove: removeTipoMantenimiento
}