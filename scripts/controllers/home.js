/**
 * Created by dark0s on 25/07/15.
 */
app
.controller('HomeCtrl', function($scope, blogService) {
        $scope.article = {
            title : 'Angular Controller',
            content: 'Angular is the best framework client side',
            logo: 'https://angularjs.org/img/AngularJS-large.png'
        };
        $scope.articles = [];
        $scope.error = '';
        blogService.getArticles().then(function(articles) {
            $scope.articles = articles;
        }, function(err) {
            $scope.error = err;
        })
    });