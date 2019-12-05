(function() {
    angular.module('meanControleFinanceiro').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs) {
        const vm = this
        vm.create = function () {
            const url = 'http://192.168.56.102:3003/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function(response) {
                vm.billingCycle = {}
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(response => msgs.addError(response.data.errors))
        }
    }
})()