const express = require('express')
const controller = require('./controllerCiudad')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req,res){
    const filterCiudades = req.query.nombre || null;
    controller.getCiudades(filterCiudades)
        .then((ciudadesList) => {
            response.success(req,res, ciudadesList, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de ciudades', 500, e)
        })
})

router.post('/', function(req, res){
    controller.addCiudad(req.body)
        .then((ciudad) => {
            response.success(req,res, ciudad, 201)
        })
        .catch(e => {
            response.error(req,res, 'Información invalida para crear el ciudades', 500, e)
        })

    
})

router.delete('/:id', function(req,res) {
    controller.deleteCiudad(req.params.id)
        .then( () =>{
            response.success(req,res, `ciudad ${req.params.id} eliminado`, 200)
        } ) 
        .catch(e => {
            response.error(req,res, 'Error eliminando ciudad', 500, e)
        })
})

module.exports = router