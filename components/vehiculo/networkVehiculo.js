const express = require('express')
const controller = require('./controllerVehiculo')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req,res){
    const filterVehiculos = req.query.user || null;
    controller.getVehiculos(filterVehiculos)
        .then((vehiculosList) => {
            response.success(req,res, vehiculosList, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de vehiculos', 500, e)
        })
})

router.post('/', function(req, res){
    controller.addVehiculo(req.body)
        .then((fullVehiculo) => {
            response.success(req,res, fullVehiculo, 201)
        })
        .catch(e => {
            response.error(req,res, 'Información invalida para crear el vehiculo', 500, e)
        })

    
})

router.patch('/:id', function(req,res){
    const id = req.params.id
    controller.updateVehiculo(id, req.body)
        .then((data) => {
            response.success(req,res,data, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error modificando el vehiculo', 500, e)
        })
})

router.delete('/:id', function(req,res) {
    controller.deleteVehiculo(req.params.id)
        .then( () =>{
            response.success(req,res, `Vehiculo ${req.params.id} eliminado`, 200)
        } ) 
        .catch(e => {
            response.error(req,res, 'Error eliminando vehiculo', 500, e)
        })
})

module.exports = router