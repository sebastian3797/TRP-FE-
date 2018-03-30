(function () {

    'use strict';

    angular
        .module('loginModule')
        .service('trpApp.login.CandidateLoginService', Service);

    Service.$inject = ['$http', '$location', '$q'];

    function Service ($http, $location, $q) {

        return {
            loginCandidate: loginCandidate
        };
        
        function loginCandidate(candidateCode) {
            var URL = 'http://localhost:8080/trp/loginCandidate';

            var deferred = $q.defer();

            $http({
                url: URL,
                method: "GET",
                params: {userCode: candidateCode}
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