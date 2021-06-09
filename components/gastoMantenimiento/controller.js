const store = require('./store');

function addGastoMantenimiento(gastoMantenimiento){

    return new Promise((resolve, reject) => {
        if(!gastoMantenimiento.tipo|| !gastoMantenimiento.monto || !gastoMantenimiento.vehiculo){
            console.error('[gastoMantenimientoController] No hay tipo o monto o vehiculo');
            reject('Los datos son incorrectos');
            return false;
        }

        store.add(gastoMantenimiento)
            .then(item => {
                resolve(gastoMantenimiento)
            })
            .catch(e => {
                reject(e)
            })
    })
    
}

function getGastosMantenimiento(filterGastoMantenimiento){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterGastoMantenimiento))
    })
}

function updateGastoMantenimiento(id, gastoMantenimiento){
    return new Promise( async (resolve, reject) => {
        if(!id || !gastoMantenimiento){
            reject('Datos invalidos');
            return false;
        }
        else if(!gastoMantenimiento.tipo || !gastoMantenimiento.monto){
            reject('Datos invalidos')
        }
        const result = store.updateGastoMantenimiento(id, gastoMantenimiento)

        resolve(result);
    })
}

function deleteGastoMantenimiento(id){
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
    addGastoMantenimiento,
    getGastosMantenimiento,
    updateGastoMantenimiento,
    deleteGastoMantenimiento,
};