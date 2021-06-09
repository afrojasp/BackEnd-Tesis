const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req,res){
    const filterGastoMantenimiento = req.query.id || null;
    controller.getGastosMantenimiento(filterGastoMantenimiento)
        .then((gastosMantenimientoList) => {
            response.success(req,res, gastosMantenimientoList, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de mantenimiento', 500, e)
        })
})

router.post('/', function(req, res){
    controller.addGastoMantenimiento(req.body)
        .then((gastoMantenimiento) => {
            response.success(req,res, gastoMantenimiento, 201)
        })
        .catch(e => {
            response.error(req,res, 'Información invalida para crear el gasto mantenimiento', 500, e)
        })
})

router.patch('/:id', function(req,res){
    const id = req.params.id
    controller.updateGastoMantenimiento(id, req.body)
        .then((data) => {
            response.success(req,res,data, 300)
        })
        .catch(e => {
            response.error(req,res, 'Error modificando el gasto mantenimiento', 500, e)
        })
})

router.delete('/:id', function(req,res) {
    controller.deleteGastoMantenimiento(req.params.id)
        .then( () =>{
            response.success(req,res, `Gasto mantenimiento ${req.params.id} eliminado`, 200)
        } ) 
        .catch(e => {
            response.error(req,res, 'Error eliminando gasto mantenimiento', 500, e)
        })
})

module.exports = router