const store = require('./store');

function addVehiculo(vehiculo){

    return new Promise((resolve, reject) => {
        if(!vehiculo.user|| !vehiculo.placa){
            console.error('[vehiculoController] No hay usuario o vehiculo');
            reject('Los datos son incorrectos');
            return false;
        }

        store.add(vehiculo)
            .then(item => {
                resolve(vehiculo)
            })
            .catch(e => {
                reject(e)
            })
    })
    
}

function getVehiculos(filterVehiculos){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterVehiculos))
    })
}

function updateVehiculo(id, vehiculo){
    return new Promise( async (resolve, reject) => {
        if(!id || !vehiculo){
            reject('Datos invalidos');
            return false;
        }
        const result = store.updateVehiculo(id, vehiculo)

        resolve(result);
    })
}

function deleteVehiculo(id){
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
    addVehiculo,
    getVehiculos,
    updateVehiculo,
    deleteVehiculo,
};