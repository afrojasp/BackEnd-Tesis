express = require('express');
const vehiculo = require('../components/vehiculo/networkVehiculo');
const usuario = require('../components/usuario/networkUsuario');
const ciudad = require('../components/ciudad/networkCiudad')
const cliente = require('../components/cliente/networkCliente')
const viaje = require('../components/viaje/networkViaje')
const tiposGastoViaje = require('../components/tipo_gasto_viaje/network')
const gastoViaje = require('../components/gastoViaje/networkGastoViaje')
const tiposMantenimiento = require('../components/tipo_mantenimiento/networkTipoMantenimiento')
const gastoMantenimiento = require('../components/gastoMantenimiento/network')
const anticipo = require('../components/anticipo/networkAnticipo')

const routes = function (server){
    server.use('/vehiculo', vehiculo);
    server.use('/usuario', usuario)
    server.use('/ciudad', ciudad)
    server.use('/cliente', cliente)
    server.use('/viaje', viaje)
    server.use('/tipoGastoViaje', tiposGastoViaje)
    server.use('/gastoViaje', gastoViaje)
    server.use('/tipoMantenimiento', tiposMantenimiento)
    server.use('/gastoMantenimiento', gastoMantenimiento)
    server.use('/anticipo', anticipo)
}

module.exports = routes;