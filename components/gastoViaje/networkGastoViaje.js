const express = require('express')
const controller = require('./controllerGastoViaje')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req,res){
    const filterGastoViaje = req.query.id || null;
    controller.getGastosViaje(filterGastoViaje)
        .then((gastosViajeList) => {
            response.success(req,res, gastosViajeList, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de gastos viaje', 500, e)
        })
})

router.post('/', function(req, res){
    controller.addGastoViaje(req.body)
        .then((gastoViaje) => {
            response.success(req,res, gastoViaje, 201)
        })
        .catch(e => {
            response.error(req,res, 'Información invalida para crear el gasto viaje', 500, e)
        })
})

router.patch('/:id', function(req,res){
    const id = req.params.id
    controller.updateGastoViaje(id, req.body)
        .then((data) => {
            response.success(req,res,data, 300)
        })
        .catch(e => {
            response.error(req,res, 'Error modificando el gasto viaje', 500, e)
        })
})

router.delete('/:id', function(req,res) {
    controller.deleteGastoViaje(req.params.id)
        .then( () =>{
            response.success(req,res, `Gasto viaje ${req.params.id} eliminado`, 200)
        } ) 
        .catch(e => {
            response.error(req,res, 'Error eliminando gasto viaje', 500, e)
        })
})

module.exports = router