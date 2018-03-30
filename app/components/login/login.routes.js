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
            .state('loginCandidate', {
                parent: 'main',
                url: 'login',
                templateUrl: '/app/components/login/templates/candidate-login.html',
                controller: 'trpApp.login.CandidateLoginController',
                controllerAs: 'cand'
            })
            .state('introCandidate', {
                parent: 'main',
                url: 'login',
                templateUrl: '/app/components/login/templates/candidate-intro.html',
                controller: 'trpApp.login.CandidateIntroController as introCtrl'
            });

        $locationProvider.html5Mode(true);

    }

})();