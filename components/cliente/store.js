const Model = require('./model')

async function addCliente(cliente){
    const miCliente = new Model(cliente);
    return await miCliente.save();
}

async function getClientes(filterClientes) {
    let filter = {};
    if(filterClientes !== null){
        filter = {nombre: filterClientes}
    }
    const misClientes = await Model.find(filter)
    return misClientes
}

async function updateCliente(id, cliente){
    const clienteModificar = await Model.findOne({
        _id: id
    });

    clienteModificar.nombre = cliente.nombre
    clienteModificar.celDespachador = cliente.celDespachador
    clienteModificar.correoDespachador = cliente.correoDespachador
    clienteModificar.celFacturas = cliente.celFacturas
    clienteModificar.correoDespachador = cliente.correoDespachador
    const newCliente = await clienteModificar.save();
    return newCliente
}

function removeCliente(id){
    return Model.deleteOne({
        _id: id
    })
}

async function existDB(cliente) {
    const client = await Model.findOne({nombre: cliente.nombre}).select('_id').lean();
    if(client === null){
        return false
    }
    else{
        return true
    }
}



module.exports = {
    add: addCliente,
    list: getClientes,
    updateCliente : updateCliente,
    remove: removeCliente,
    exists: existDB
}