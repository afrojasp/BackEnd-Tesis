const store = require('./store');

function addGastoViaje(gastoViaje){

    return new Promise((resolve, reject) => {
        if(!gastoViaje.tipo|| !gastoViaje.monto, !gastoViaje.viaje){
            console.error('[gastoViajeController] No hay tipo o monto');
            reject('Los datos son incorrectos');
            return false;
        }

        store.add(gastoViaje)
            .then(item => {
                resolve(gastoViaje)
            })
            .catch(e => {
                reject(e)
            })
    })
    
}

function getGastosViaje(filterGastoViaje){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterGastoViaje))
    })
}

function updateGastoViaje(id, gastoViaje){
    return new Promise( async (resolve, reject) => {
        if(!id || !gastoViaje){
            reject('Datos invalidos');
            return false;
        }
        else if(!gastoViaje.tipo || !gastoViaje.monto){
            reject('Datos invalidos')
        }
        const result = store.updateGastoViaje(id, gastoViaje)

        resolve(result);
    })
}

function deleteGastoViaje(id){
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
    addGastoViaje,
    getGastosViaje,
    updateGastoViaje,
    deleteGastoViaje,
};