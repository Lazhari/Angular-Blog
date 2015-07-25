/**
 * Created by dark0s on 25/07/15.
 */

app.run(function($rootScope) {
    $rootScope.title = "Blog Application";
});
app.config(function($routeProvider) {
    $routeProvider
    .when('/',{
            templateUrl:'views/home.html',
            controller:'HomeCtrl'
    })
    .otherwise({redirectTo:'/'});
});