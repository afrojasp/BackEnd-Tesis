const store = require('./store');

function addViaje(viaje){

    return new Promise((resolve, reject) => {
        if(!viaje.origen|| !viaje.destino || !viaje.codigoManifesto || !viaje.estado || !viaje.fechaCreacion || !viaje.cliente){
            console.error('[viajeController] Datos incompletos del viaje');
            reject('Los datos de creacion del viaje son incorrectos');
            return false;
        }

        store.add(viaje)
            .then(item => {
                resolve(viaje)
            })
            .catch(e => {
                reject(e)
            })
    })
    
}

function getViajes(filterViajes){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterViajes))
    })
}

function updateViaje(id, viaje){
    return new Promise( async (resolve, reject) => {
        if(!id || !viaje){
            reject('Datos invalidos');
            return false;
        }
        const result = store.updateViaje(id, viaje)

        resolve(result);
    })
}

function deleteViaje(id){
    return new Promise((resolve, reject) => {
        if(!id){
            reject('Id invalido');
            return false;
        }
        store.remove(id)
            .then(() =>{
                resolve();
            })
            .catch(e => {
                reject(e);
            })
    })
}

module.exports = {
    addViaje,
    getViajes,
    updateViaje,
    deleteViaje,
};