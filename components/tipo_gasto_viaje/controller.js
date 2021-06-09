const store = require('./store');

function addTiposGastoViaje(tipoGastoViaje){

    return new Promise((resolve, reject) => {
        if(!tipoGastoViaje.nombre){
            reject('Los datos son incorrectos');
            return false;
        }

        store.add(tipoGastoViaje)
            .then(item => {
                resolve(tipoGastoViaje)
            })
            .catch(e => {
                reject(e)
            })
    })
    
}

function getTiposGastoViaje(filterTiposGastoViaje){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterTiposGastoViaje))
    })
}

function deleteTipoGastoViaje(id){
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
    addTiposGastoViaje,
    getTiposGastoViaje,
    deleteTipoGastoViaje,
};