const billingCycle = require('./billing-cycle')

billingCycle.methods(['get', 'post', 'put', 'delete'])

module.exports = billingCycle