const store = require('./store');

function addCiudad(ciudad){

    return new Promise((resolve, reject) => {
        if(!ciudad.nombre){
            reject('Los datos son incorrectos');
            return false;
        }

        store.add(ciudad)
            .then(item => {
                resolve(ciudad)
            })
            .catch(e => {
                reject(e)
            })
    })
    
}

function getCiudades(filterCiudades){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterCiudades))
    })
}

function deleteCiudad(id){
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
    addCiudad,
    getCiudades,
    deleteCiudad,
};