(function() {
    angular.module('meanControleFinanceiro').controller('BillingCycleCtrl', [
        '$http',
        'msgs',
        BillingCycleController
    ])

    function BillingCycleController($http, msgs) {
        const vm = this
        const url = 'http://192.168.56.102:3003/api/billingCycles'

        vm.refresh = function() {
            $http.get(url).then(function(response) {
                vm.billingCycle = {}
                vm.billingCycles = response
            })
        }

        vm.create = function () {
            $http.post(url, vm.billingCycle).then(function(response) {
                vm.refresh()
                msgs.addSuccess('Operação realizada com sucesso!')
            }).catch(response => msgs.addError(response.data.errors))
        }

        vm.refresh()
    }
})()