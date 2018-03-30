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
                controller: 'trpApp.login.CandidateLoginController as candCtrl'
            })
            .state('introCandidate', {
                parent: 'main',
                url: 'intro',
                templateUrl: '/app/components/login/templates/candidate-intro.html',
                controller: 'trpApp.login.CandidateIntroController as introCtrl',
                params: {
                    testData: null
                }
            })
            .state('statusCandidate', {
                parent: 'main',
                url: 'status',
                templateUrl: '/app/components/login/templates/candidate-status.html',
                controller: 'trpApp.login.CandidateStatusController as statusCtrl',
                params: {
                    testData: null
                }
            });

        $locationProvider.html5Mode(true);

    }

})();