const express = require('express')

module.exports = function(server) {

    const router = express.Router()
    server.use('/api', router)

    const billingCycleService = require('../api/billing-cycle/billing-cycle-service')
    billingCycleService.register(router, '/billingCycles')

    const billingSummaryService = require('../api/billingSummary/billing-summary-service')
    router.route('/billingSummary').get(billingSummaryService.getSummary)
}