const billingCycle = require('./billing-cycle')

billingCycle.methods(['get', 'post', 'put', 'delete'])
billingCycle.updateOptions({ new: true, runValidators: true })

billingCycle.route('count', function(req, res, next) {
    billingCycle.count(function(error, value) {
        if(error) {
            res.status(500).json({errors: [error] })
        } else {
            res.json(value)
        }
    })
})

module.exports = billingCycle