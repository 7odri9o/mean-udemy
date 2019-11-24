const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const billingCycleService = require('../api/billing-cycle/billing-cycle-service')
    billingCycleService.register(router, '/billingCycles')
}