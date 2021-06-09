const express = require('express')
const controller = require('./controllerAnticipo')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req,res){
    const filterAnticipo = req.query.id || null;
    controller.getGastosViaje(filterAnticipo)
        .then((anticiposList) => {
            response.success(req,res, anticiposList, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de anticipos', 500, e)
        })
})

router.post('/', function(req, res){
    controller.addAnticipo(req.body)
        .then((anticipo) => {
            response.success(req,res, anticipo, 201)
        })
        .catch(e => {
            response.error(req,res, 'Información invalida para crear el anticipo', 500, e)
        })
})

router.patch('/:id', function(req,res){
    const id = req.params.id
    controller.updateAnticipo(id, req.body)
        .then((data) => {
            response.success(req,res,data, 300)
        })
        .catch(e => {
            response.error(req,res, 'Error modificando el anticipo', 500, e)
        })
})

router.delete('/:id', function(req,res) {
    controller.deleteAnticipo(req.params.id)
        .then( () =>{
            response.success(req,res, `Anticipo ${req.params.id} eliminado`, 200)
        } ) 
        .catch(e => {
            response.error(req,res, 'Error eliminando anticipo', 500, e)
        })
})

module.exports = router