(function () {

    'use strict';

    angular
        .module('loginModule')
        .service('trpApp.login.CandidateIntroService', Service);

    Service.$inject = ['$http', '$location', '$q'];

    function Service ($http, $location, $q) {

        return {
            startTest: startTest
        };

        function startTest(candidateId) {
            var URL = 'http://localhost:8080/trp/interview/getInterview';

            var deferred = $q.defer();

            $http({
                url: URL,
                method: "GET",
                params: {userId: candidateId}
            })
                .then(
                    function (success) {
                        deferred.resolve(success.data);
                    },

                    function (error) {
                        deferred.reject(error);
                    }
                );

            return deferred.promise;
        }
    }
})();