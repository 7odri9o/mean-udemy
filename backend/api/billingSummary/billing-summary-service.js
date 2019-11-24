const _ = require('lodash')
const billingCycle = require('../billing-cycle/billing-cycle')

function getSummary(req, res) {
    billingCycle.aggregate([{
        $project: { credit: { $sum: "$credits.value" }, debts: { $sum: "$debts.value" } }
    }, {
        $group: { _id: null, credit: { $sum: "$credit" }, debt: { $sum: "$debts" }}
    }, {
        $project: { _id: 0, credit: 1, debt: 1 }
    }], function (error, result) {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json(_.defaults(result[0], { credit: 0, debt: 0 }))
        }
    })
}

module.exports = { getSummary }