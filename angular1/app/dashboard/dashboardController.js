angular.module('meanControleFinanceiro').controller('DashboardCtrl', [
    '$scope',
    '$http',
    DashboardController
])

function DashboardController($scope, $http) {
    $scope.getSummary = function() {
        const url = 'http://192.168.56.102:3003/api/billingSummary'
        $http.get(url).then(function(response) {
            console.log(response)
            const { credit = 0, debt = 0 } = response.data
            $scope.credit = credit
            $scope.debt = debt
            $scope.total = credit - debt
        })
    }
    
    $scope.getSummary()
}