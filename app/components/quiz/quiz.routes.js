(function () {

    'use strict';

    angular
        .module('quizModule')
        .config(Config);

    Config.$inject = [
        '$stateProvider',
        '$locationProvider'
    ];

    function Config(
        $stateProvider,
        $locationProvider) {

        $stateProvider
            .state('quizTest', {
                parent: 'main',
                url: 'quiz-test',
                templateUrl: '/app/components/quiz/templates/quiz-test.html',
                controller: 'trpApp.quiz.quizTestController as quizTestCtrl'
            });

        $locationProvider.html5Mode(true);

    }

})();