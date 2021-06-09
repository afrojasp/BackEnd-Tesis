const store = require('./store');
const bcrypt = require('bcrypt')

function addUsuario(usuario){
    return new Promise(async (resolve, reject) => {
        if(!usuario.cedula || !usuario.nombre || !usuario.password || !usuario.tipo){
            console.error('[UsuarioController] Informacion incompleta para crear el usuario')
            reject('Error registrando usuario');
            return false;
        }

        else if(usuario.tipo !== "JEFE" && !usuario.jefe){
            reject('El usuario no es jefe por lo tanto debe tener un jefe relacionado')
            return false;
        }

        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(usuario.password, salt)
        usuario.password = hashedPassword

        const existe = await store.exists(usuario)
        console.log(existe)

        if(existe){
            reject("El usuario ya existe")
        }

        else{
            store.add(usuario)
            resolve(usuario)
        }
    })
}

function getUsuarios(filterUsers){
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUsers))
    })
}

function login(usuario, password){
    return new Promise( async (resolve, reject) => {
        var usuarioEncontrado = await getUsuarios(usuario)
        if(!usuarioEncontrado[0]){
            reject("Error logueando. Revise el usuario y/o la contraseña")
        }
        else{
            try{
                const iguales = await bcrypt.compare(password, usuarioEncontrado[0].password)
                if(iguales){
                    resolve(usuarioEncontrado)
                }
                else{
                    reject("Revise el usuario y/o la contraseña")
                }
            }
            catch(Error){
                reject("Revise el usuario y/o la contraseña" + Error) 
            }
            
        }
        
    })
}

module.exports = {
    addUsuario,
    getUsuarios,
    login
}