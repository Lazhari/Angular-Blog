/**
 * Created by dark0s on 25/07/15.
 */
app.factory('blogFactory', function($http, $q) {

    return {
        /**
         * get all articles from articles.json
         * @returns {*}
         *
         * @example
         * blogFactory.getArticles().then(function(articles){
         *      console.log(articles);
         * }, function(err) {
         *      alert(err);
         * });
         */
        getArticles: function() {
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
    }
});