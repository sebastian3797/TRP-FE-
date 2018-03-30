(function () {

    'use strict';

    angular
        .module('loginModule')
        .controller('trpApp.login.CandidateIntroController', Controller);

    Controller.$inject = [
        '$scope',
        '$stateParams',
        '$state'
    ];

    function Controller(
        $scope,
        $stateParams,
        $state) {

        var _self = this;

        _self.testData = $stateParams.testData;

        _self.nextPage = function () {
            $state.go('statusCandidate', { testData: _self.testData});
        }
    }

})();