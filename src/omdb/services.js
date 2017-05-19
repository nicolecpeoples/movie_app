angular.module('omdb', [])
    .factory('omdbApi', omdbApi);

    function omdbApi($http, $q) {
        var service = {};
        var baseUrl = 'http://www.omdbapi.com/?';

        function httpPromise (url) {
            var deferred = $q.defer();
            $http.get(url)
                .then(function (data){
                    deferred.resolve(data);
                })
                .catch(function (err) {
                    deferred.reject(err);
                });
            return deferred.promise;
        }

        service.search = function (query) {
            return httpPromise(baseUrl + 't=' + encodeURIComponent(query));

        };

        service.find = function (id) {
            return httpPromise(baseUrl + 'i=' + id)
        };

        return service;
    }