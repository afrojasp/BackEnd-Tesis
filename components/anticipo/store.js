const Model = require('./model')

async function addAnticipo(anticipo){
    const miAnticipo = new Model(anticipo);
    return await miAnticipo.save();
}

async function getAnticipos(filterAnticipo) {
    return new Promise((resolve,reject) => {
        let filter = {};
        if(filterAnticipo !== null){
            filter = {user: filterAnticipo}
        }
        Model.find(filter)
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

async function updateAnticipo(id, anticipo){
    var anticipoModificar = await Model.findOne({
        _id: id
    });

    anticipoModificar.cancelado = anticipo.cancelado
    anticipoModificar.fechaCancelacion = anticipo.fechaCancelacion
    const newAnticipoModificar = await anticipoModificar.save();
    return newAnticipoModificar
}

function removeAnticipo(id){
    return Model.deleteOne({
        _id: id
    })
}



module.exports = {
    add: addAnticipo,
    list: getAnticipos,
    updateVehiculo : updateAnticipo,
    remove: removeAnticipo
}