const express = require('express')
const controller = require('./controllerCliente')
const response = require('../../network/response')

const router = express.Router()

router.get('/', function(req,res){
    const filterClientes = req.query.nombre || null;
    controller.getClientes(filterClientes)
        .then((clientesList) => {
            response.success(req,res, clientesList, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error inesperado obteniendo la lista de clientes', 500, e)
        })
})

router.post('/', function(req, res){
    controller.addCliente(req.body)
        .then((cliente) => {
            response.success(req,res, cliente, 201)
        })
        .catch(e => {
            if(e === "El cliente ya existe"){
                response.error(req,res,e,400,e)
            }
            else{
                response.error(req,res, 'Error inesperado obteniendo la lista de clientes', 500, e)
            } 
        })

    
})

router.patch('/:id', function(req,res){
    const id = req.params.id
    controller.updateCliente(id, req.body)
        .then((data) => {
            response.success(req,res,data, 200)
        })
        .catch(e => {
            response.error(req,res, 'Error modificando el cliente', 500, e)
        })
})

router.delete('/:id', function(req,res) {
    controller.deleteCliente(req.params.id)
        .then( () =>{
            response.success(req,res, `cliente ${req.params.id} eliminado`, 200)
        } ) 
        .catch(e => {
            response.error(req,res, 'Error eliminando ciudad', 500, e)
        })
})

module.exports = router