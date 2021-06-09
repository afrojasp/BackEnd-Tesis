const store = require('./store');

function addTipoMantenimiento(tipoMantenimiento){

    return new Promise((resolve, reject) => {
        if(!tipoMantenimiento.nombre){
            reject('Los datos son incorrectos');
            return false;
        }

        store.add(tipoMantenimiento)
            .then(item => {
                resolve(tipoMantenimiento)
            })
            .catch(e => {
                reject(e)
            })
    })
    
}

function getTiposMantenimiento(filterTipoMantenimiento){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterTipoMantenimiento))
    })
}

function deleteTipoMantenimiento(id){
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
    addTipoMantenimiento,
    getTiposMantenimiento,
    deleteTipoMantenimiento,
};