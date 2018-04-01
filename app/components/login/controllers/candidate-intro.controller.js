(function () {

    'use strict';

    angular
        .module('loginModule')
        .controller('trpApp.login.CandidateIntroController', Controller);

    Controller.$inject = [
        '$scope',
        '$stateParams',
        '$state',
        'trpApp.login.CandidateIntroService'
    ];

    function Controller(
        $scope,
        $stateParams,
        $state,
        CandidateIntroService) {

        var _self = this;

        _self.testData = $stateParams.testData;

        _self.startTest = function () {
            CandidateIntroService
                .startTest(_self.testData.id)
                .then(function (success) {
                    $state.go('quizCandidate', { testData: success, user: _self.testData});
                });
        }
    }

})();