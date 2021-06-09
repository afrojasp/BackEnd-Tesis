const express = require('express')
const controller = require('./controllerViaje')
const response = require('../../network/response')

const router = express.Router()

router.post('/', function(req,res){
    controller.addViaje(req.body)
        .then((viaje) => {
            response.success(req,res, viaje, 201)
        })
        .catch(e => {
            response.error(req,res, 'Información invalida para crear el viaje', 500,e)
            
        })
})

router.get('/', function(req,res) {
    const filterViajes = req.query.usuario || null
    controller.getViajes(filterViajes)
        .then((viajesLista) => {
            response.success(req,res, viajesLista, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de viajes', 500, e)
        })
} )

router.patch('/:id', function(req,res){
    const id = req.params.id
    controller.updateViaje(id, req.body)
        .then((data) => {
            response.success(req,res,data, 300)
        })
        .catch(e => {
            response.error(req,res, 'Error modificando el viaje', 500, e)
        })
})

router.delete('/:id', function(req,res){
    controller.deleteViaje(req.params.id)
        .then(() => {
            response.success(req,res, `Viaje ${req.params.id} eliminado`, 200 )
        })
        .catch(e => {
            response.error(req,res, 'Error eliminando el viaje', 500, e)
        }) 
})

module.exports = router