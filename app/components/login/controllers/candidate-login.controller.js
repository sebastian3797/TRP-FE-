(function () {

    'use strict';

    angular
        .module('loginModule')
        .controller('trpApp.login.CandidateLoginController', Controller);

    Controller.$inject = [
        '$scope', '$state', 'trpApp.login.CandidateLoginService'
    ];

    function Controller($scope, $state, candidateLoginService) {

        var _self = this;

        _self.loginCandidate = function () {
            candidateLoginService
                .loginCandidate(_self.candidateCode)
                .then(function (response) {
                    $state.go('intro', _self.candidateCode);
                })
                .catch(function (error) {
                    $state.reload();
                });
        }

    }

})();