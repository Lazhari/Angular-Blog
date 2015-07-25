/**
 * Created by dark0s on 25/07/15.
 */
app.service('blogService', function($http, $q) {

    this.getArticles = function() {
        var deffered = $q.defer();

        $http.get('scripts/articles.json')
            .success(function(data, status) {
                console.log('data = ', data);
                console.log('status', status);
                deffered.resolve(data);
            })
            .error(function(data, status) {
                console.log('data = ', data);
                console.log('status', status);
                deffered.reject(data);
            })

        return deffered.promise;
    }
});