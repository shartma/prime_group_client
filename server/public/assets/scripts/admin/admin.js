//ADMIN APPLICATION
var myApp = angular.module('myApp', ['ngTouch', 'ngRoute', 'ngMaterial', 'ngMessages', 'ngFileUpload','ui.grid', 'ui.grid.edit',
    'ui.grid.rowEdit','ui.grid.selection', 'ui.grid.exporter', 'ui.grid.resizeColumns', 'ui.grid.moveColumns']);


//ROUTES
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/dashboard', {
            templateUrl: "/views/routes/admin/admin-dashboard.html", //main dashboard view
            controller: "dashCtrl"
        })
        .when('/teacher', {
            templateUrl: "/views/routes/admin/select-teacher.html", //select teacher view
            controller: "teacherCtrl"
        })
        .when('/attendance', {
            templateUrl: "/views/routes/attendance/attendance.html", //take attendance view
            controller: "attendanceCtrl"
        })
        .when('/absent', {
            templateUrl: "/views/routes/admin/absent-report.html", //absent view
            controller: "absentCtrl"
        })
        .when('/prework', {
            templateUrl: "/views/routes/admin/prework-report.html", //prework view
            controller: "preworkCtrl"
        })
        .when('/user', {
            templateUrl: "/views/routes/admin/admin-users.html", //make /change user permissions view
            controller: "userCtrl"
        })
        .when('/upload', {
            templateUrl: "/views/routes/admin/upload-csv.html",
            controller: "uploadCtrl"
        })
        .when('/highschool', {
            templateUrl: "/views/routes/student/student-hs.html",
            controller: "studentACtrl"
        })
        .when('/middleschool', {
            templateUrl: "/views/routes/student/student-ms.html",
            controller: "studentACtrl"
        })
        .otherwise('dashboard');
}]);