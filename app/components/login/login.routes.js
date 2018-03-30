(function () {

    'use strict';

    angular
        .module('loginModule')
        .config(Config);

    Config.$inject = [
        '$stateProvider',
        '$locationProvider'
    ];

    function Config(
        $stateProvider,
        $locationProvider) {

        $stateProvider
            .state('main.loginCandidate', {
                parent: 'main',
                url: '/login',
                templateUrl: '/app/components/login/templates/candidate-login.html',
                controller: 'trpApp.login.CandidateLoginController'
            });

        $locationProvider.html5Mode(true);

    }

})();