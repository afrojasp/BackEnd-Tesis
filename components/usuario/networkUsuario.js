const express = require('express')
const controller = require('./controllerUsuario')
const response = require('../../network/response')

const router = express.Router()

router.post('/', function(req,res){
    controller.addUsuario(req.body)
        .then((usuario) => {
            response.success(req,res, usuario, 201)
        })
        .catch(e => {
            if(e === "El usuario ya existe" ){
                response.error(req,res, e, 500,e)
            }
            else{
                response.error(req,res, 'Información invalida para crear el usuario', 500,e)
            }
            
        })
})

router.get('/', function(req,res) {
    const filterUsers = req.query.user || null
    controller.getUsuarios(filterUsers)
        .then((usuariosLista) => {
            response.success(req,res, usuariosLista, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de usuarios', 500, e)
        })
} )

router.post('/login', function(req, res) {
    console.log(req.body)
    controller.login(req.body.user, req.body.password)
        .then((usuario) => {
            response.success(req,res, usuario, 200)
        })
        .catch(e => {
            response.error(req,res, 'Contraseña o usuario incorrectos', 500, e)
        })
})

module.exports = router