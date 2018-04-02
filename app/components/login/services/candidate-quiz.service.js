(function () {

    'use strict';

    angular
        .module('loginModule')
        .service('trpApp.login.CandidateQuizService', Service);

    Service.$inject = ['$http', '$location', '$q'];

    function Service ($http, $location, $q) {

        return {
            executeCode: executeCode
        };

        function executeCode(candidateCode) {
            var URL = 'http://localhost:8080/evaluateQuestionWriteCode';

            var deferred = $q.defer();

            $http({
                url: URL,
                method: "POST",
                data: candidateCode
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