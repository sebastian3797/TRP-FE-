(function () {

    'use strict';

    angular
        .module('quizModule')
        .controller('trpApp.quiz.quizTestController', Controller);

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