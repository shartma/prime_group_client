myApp.controller('attendanceTCtrl', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
    console.log('on teacher attendance controller--attendanceTCtrl.js');


    $scope.dataService = DataService;
    $scope.user = {};
    $scope.date = $scope.dataService.getDate();

    $scope.user = $scope.dataService.peopleData();

    if($scope.dataService.peopleData() === undefined){
        $scope.dataService.retrieveData().then(function(){
            $scope.user = $scope.dataService.peopleData();
            console.log($scope.user);
        });
    }



}]);