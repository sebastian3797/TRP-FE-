(function () {

    'use strict';

    angular
        .module('loginModule')
        .controller('trpApp.login.CandidateIntroController', Controller);

    Controller.$inject = [
        '$scope',
        '$stateParams'
    ];

    function Controller(
        $scope,
        $stateParams) {

        var _self = this;

        _self.testData = $stateParams.testData;

    }

})();