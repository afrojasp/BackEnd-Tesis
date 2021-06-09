const store = require('./store');

function addAnticipo(anticipo){

    return new Promise((resolve, reject) => {
        if(!anticipo.montoInicial||!anticipo.montoTotal || !anticipo.receptorJefe || !anticipo.tipo || !anticipo.fechaCreacion || !anticipo.cancelado){
            console.error('[anticipoController] faltan datos en el anticipo');
            reject('Los datos son incorrectos');
            return false;
        }

        store.add(anticipo)
            .then(item => {
                resolve(anticipo)
            })
            .catch(e => {
                reject(e)
            })
    })
    
}

function getAnticipos(filterAnticipo){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterAnticipo))
    })
}

function updateAnticipo(id, anticipo){
    return new Promise( async (resolve, reject) => {
        if(!id || !anticipo){
            reject('Datos invalidos');
            return false;
        }
        else if(!anticipo.cancelado || !anticipo.fechaCancelacion){
            reject('Datos invalidos')
        }
        const result = store.updateAnticipo(id, anticipo)

        resolve(result);
    })
}

function deleteAnticipo(id){
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
    addAnticipo,
    getAnticipos,
    updateAnticipo,
    deleteAnticipo,
};