(function () {

    'use strict';

    angular
        .module('trpApp')
        .config(Config);

    Config.$inject = [
        '$stateProvider',
        '$locationProvider'
    ];

    function Config(
        $stateProvider,
        $locationProvider) {

        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: '/app/shared/templates/main.html',
                controller: 'TrpCtrl'
            });

        $locationProvider.html5Mode(true);

    }

})();