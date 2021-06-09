const Model = require('./model')


function addUsuario(usuario){
    const miUsuario = new Model(usuario)
    miUsuario.save()
}

async function getUsuarios(filterUsuarios){
    let filter = {}
    if(filterUsuarios !== null){
        filter = {user: filterUsuarios}
    }
    const usuarios = await Model.find(filter)
    return usuarios
}

async function existDB(usuario) {
    const user = await Model.findOne({ cedula: usuario.cedula }).select('_id').lean();
    if (user === null) {
        return false
    }  
    else{
        return true
    } 
}

module.exports = {
    add: addUsuario,
    list: getUsuarios,
    exists: existDB
}