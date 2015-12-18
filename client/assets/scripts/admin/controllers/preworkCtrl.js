myApp.controller('preworkCtrl', ['$scope', '$http', '$location','DataService', function ($scope, $http, $location, DataService) {
    console.log('on admin prework controller--preworkCtrl.js');

    $scope.dataService = DataService;
    $scope.user = {};
    $scope.date = $scope.dataService.getDate();
    console.log("This is the date you are asking for", $scope.date);

    $scope.user = $scope.dataService.peopleData();

    if($scope.dataService.peopleData() === undefined){
        $scope.dataService.retrieveData().then(function(){
            $scope.user = $scope.dataService.peopleData();
            console.log($scope.user);
        });
    }

    var notCalledTemplate = '<div ng-if="row.entity.contact_status">{{row.entity.contact_status}}</div>' +
        '<div ng-if="!row.entity.contact_status">Not Yet Called</div>';

    var expandStudentTemplate = '<div class="ui-grid-cell-contents" ng-click="grid.appScope.getDetails(row.entity)">{{row.entity.id}}</div>'


    $scope.gridOptions = {
        enableSorting: true,

        columnDefs: [
            { name:'id', field: 'id', enableCellEdit: false,
                cellTemplate: expandStudentTemplate},
            { name:'Teacher', field: 'lastname' , enableCellEdit:false},
            { name:'First Name', field: 'student_firstname' , enableCellEdit:false},
            { name:'Last Name', field: 'student_lastname' , enableCellEdit:false},
            { name:'Phone 1', field: 'phone1' , enableCellEdit:true},
            { name:'Call Status', field: 'contact_status' ,   cellTemplate: notCalledTemplate , enableCellEdit:true,
                editableCellTemplate: 'ui-grid/dropdownEditor',
                editDropdownValueLabel: 'contact_status',
                editDropdownOptionsArray: [
                    { id: 'Not Yet Called', contact_status: 'Not Yet Called' },
                    { id: 'Reached', contact_status: 'Reached' },
                    { id: 'Left Message', contact_status: 'Left Message' }
                ]},
            { name:'Administration Notes', field: 'admin_notes' , enableCellEdit:true}
        ]
    };

    $scope.gridOptions.data = $scope.dataService.getData();


    $scope.saveRow = function( rowEntity ) {
        var promise = $http.put('/adminPrework', rowEntity).then(function(response){
           console.log(response);
        });
        $scope.gridApi.rowEdit.setSavePromise( rowEntity, promise);
    };

    $scope.gridOptions.onRegisterApi = function(gridApi){
        //set gridApi on scope
        $scope.gridApi = gridApi;
        gridApi.rowEdit.on.saveRow($scope, $scope.saveRow);
    };


    $scope.getDetails = function(student){
        //THIS IS BEYOND SCOPE OF PROJECT, will need new route, html, etc
        //$scope.dataService.setData(student);
        //$location.path('/');

        //});
    }

}]);