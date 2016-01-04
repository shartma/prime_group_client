myApp.controller('dashCtrl',['$scope', '$http', '$location','DataService', '$filter', function ($scope, $http, $location, DataService, $filter) {

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


    $scope.prework = {};
    $scope.absent = {};

    $scope.getAbsences = function(){
        $scope.absentDate = $filter('date')(($scope.absent.date), 'yyyy-MM-dd');
        $http.get('/absent', {params: {date: $scope.absentDate }}).then(function(response){
            $scope.dataService.setData(response.data);
            $location.path('/absent');
        });
    };

    $scope.getPrework = function(){
        $scope.preworkDate = $filter('date')(($scope.prework.date), 'yyyy-MM-dd');
        $http.get('/prework', {params: {date: $scope.preworkDate}}).then(function(response) {
            $scope.dataService.setData(response.data);
            $location.path('/prework');
        });
    };


    console.log('on admin dashboard controller--dashCtrl.js');

}]);