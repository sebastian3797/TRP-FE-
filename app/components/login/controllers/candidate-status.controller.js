(function () {

    'use strict';

    angular
        .module('loginModule')
        .controller('trpApp.login.CandidateStatusController', Controller);

    Controller.$inject = [
        '$scope',
        '$stateParams'
    ];

    function Controller(
        $scope,
        $stateParams) {

        var _self = this;

        // _self.testData = $stateParams.testData;
        _self.name = "Coteanu Vlad";
        _self.score = 3;
    }

})();