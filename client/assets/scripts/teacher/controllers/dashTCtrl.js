myApp.controller('dashTCtrl', ['$scope', '$http', 'DataService', function ($scope, $http, DataService) {
    console.log('on teacher dash controller--dashTCtrl.js');

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

    $scope.getAttendance = function(){
        $http.get('/attendance', {params: {date: $scope.date, who: $scope.user}}).then(function(response){
            console.log(response);
        })
    };

}]);