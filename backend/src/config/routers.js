const express = require('express')

module.exports = function(server){

    const router = express.Router()
    server.use('/api', router)

    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')

    /* 
    
    name:Janeiro/17
    month:1
    year:2017
    credits[0][name]:Salario Empresa
    credits[0][value]:7500
    credits[1][name]:Salario Professor
    credits[1][value]:7500
    debts[0][name]:Telefone
    debts[0][value]:90
    debts[0][status]: PAGO

    */
}