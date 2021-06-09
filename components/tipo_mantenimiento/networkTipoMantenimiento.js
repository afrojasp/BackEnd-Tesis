const express = require('express')
const controller = require('./controllerTipoMantenimiento')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req,res){
    const filterTipoMantenimiento = req.query.nombre || null;
    controller.getTiposMantenimiento(filterTipoMantenimiento)
        .then((tiposMantenimientoList) => {
            response.success(req,res, tiposMantenimientoList, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de tipos de mantenimiento', 500, e)
        })
})

router.post('/', function(req, res){
    controller.addTipoMantenimiento(req.body)
        .then((tipoMantenimiento) => {
            response.success(req,res, tiposMantenimiento, 201)
        })
        .catch(e => {
            response.error(req,res, 'Información invalida para crear el tipo mantenimiento', 500, e)
        })

    
})

router.delete('/:id', function(req,res) {
    controller.deleteTipoMantenimiento(req.params.id)
        .then( () =>{
            response.success(req,res, `Tipo mantenimiento ${req.params.id} eliminado`, 200)
        } ) 
        .catch(e => {
            response.error(req,res, 'Error eliminando el tipo de mantenimiento', 500, e)
        })
})

module.exports = router