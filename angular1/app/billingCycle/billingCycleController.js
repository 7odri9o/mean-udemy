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
            vm.billingCycle = { credits: [{}], debts: [{}] }
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

    vm.showTabUpdate = function(billingCycle) {
        vm.billingCycle = billingCycle
        tabs.show(vm, { tabUpdate: true })
    }

    vm.showTabDelete = function(billingCycle) {
        vm.billingCycle = billingCycle
        tabs.show(vm, { tabDelete: true })
    }

    vm.update = function () {
        const updateUrl = `${url}/${vm.billingCycle._id}`
        $http.put(updateUrl, vm.billingCycle).then(function(response) {
            vm.refresh()
            msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(response => msgs.addError(response.data.errors))
    }

    vm.delete = function () {
        const deleteUrl = `${url}/${vm.billingCycle._id}`
        $http.delete(deleteUrl, vm.billingCycle).then(function(response) {
            vm.refresh()
            msgs.addSuccess('Operação realizada com sucesso!')
        }).catch(response => msgs.addError(response.data.errors))
    }

    vm.refresh()
}