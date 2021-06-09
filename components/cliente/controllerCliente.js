const store = require('./store');

function addCliente(cliente){

    return new Promise(async(resolve, reject) => {
		console.log("Estoy ejecutando addCliente")
        if(!cliente.nombre){
            console.error('[clienteController] No hay nombre en el cliente');
            reject('Los datos son incorrectos');
            return false;
        }

        const existe = await store.exists(cliente)
        console.log(existe)

        if(existe){
            reject("El cliente ya existe")
        }
        else{
            store.add(cliente)
            .then(item => {
                resolve(cliente)
            })
            .catch(e => {
                reject(e)
            })
        }

        
    })
    
}

function getClientes(filterClientes){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterClientes))
    })
}

function updateCliente(id, cliente){
    return new Promise( async (resolve, reject) => {
        if(!id || !cliente){
            reject('Datos invalidos');
            return false;
        }
        const result = await store.updateCliente(id, cliente)
        resolve(result);
    })
}

function deleteCliente(id){
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
    addCliente,
    getClientes,
    updateCliente,
    deleteCliente,
};