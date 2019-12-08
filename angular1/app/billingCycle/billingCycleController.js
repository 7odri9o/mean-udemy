angular.module('meanControleFinanceiro').controller('BillingCycleCtrl', [
    '$http',
    'msgs',
    'tabs',
    BillingCycleController
])

function BillingCycleController($http, msgs, tabs) {
    const vm = this
    const url = 'http://192.168.56.102:3003/api/billingCycles'
    console.log('Criou BillingCycleController')

    vm.refresh = function() {
        $http.get(url).then(response => {
            vm.billingCycle = {}
            vm.billingCycles = response.data
            tabs.show(vm, { tabList: true, tabCreate: true })
        }).catch(response => msgs.addError(response.data.errors))
    }

    vm.create = function () {
        $http.post(url, vm.billingCycle).then(function(response) {
            vm.refresh()
            msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(response => msgs.addError(response.data.errors))
    }

    vm.refresh()
}