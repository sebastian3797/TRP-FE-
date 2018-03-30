(function () {

    'use strict';

    angular
        .module('loginModule')
        .controller('trpApp.login.CandidateLoginController', Controller);

    Controller.$inject = [
        '$scope',
        '$state'
    ];

    function Controller(
        $scope,
        $state) {

        var _self = this;

        $scope.login = function() {
            $state.go('introCandidate');
        }

    }

})();