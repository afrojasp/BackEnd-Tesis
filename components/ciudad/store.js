const Model = require('./model')

async function addCiudad(ciudad){
    const miCiudad = new Model(ciudad);
    return await miCiudad.save();
}

async function getCiudades(filterCiudades) {
    let filter = {};
    if(filterCiudades !== null){
        filter = {nombre: filterCiudades}
    }
    const misCiudades = await Model.find(filter)
    return misCiudades
}

function removeCiudad(id){
    return Model.deleteOne({
        _id: id
    })
}



module.exports = {
    add: addCiudad,
    list: getCiudades,
    remove: removeCiudad
}