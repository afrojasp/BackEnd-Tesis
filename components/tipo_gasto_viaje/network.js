const express = require('express')
const controller = require('./controller')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req,res){
    const filterTiposGasto = req.query.nombre || null;
    controller.getTiposGastoViaje(filterTiposGasto)
        .then((tiposGastosList) => {
            response.success(req,res, tiposGastosList, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de tipos de gastos', 500, e)
        })
})

router.post('/', function(req, res){
    controller.addTiposGastoViaje(req.body)
        .then((tiposGastoViaje) => {
            response.success(req,res, tiposGastoViaje, 201)
        })
        .catch(e => {
            response.error(req,res, 'Información invalida para crear el tipo gasto viaje', 500, e)
        })

    
})

router.delete('/:id', function(req,res) {
    controller.deleteTipoGastoViaje(req.params.id)
        .then( () =>{
            response.success(req,res, `Tipo gasto viaje ${req.params.id} eliminado`, 200)
        } ) 
        .catch(e => {
            response.error(req,res, 'Error eliminando el tipo gasto viaje', 500, e)
        })
})

module.exports = router