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

        _self.allQuiz  = $stateParams.testData;
        _self.user = $stateParams.user;
        _self.score = 0;
        _self.nrQuestions = 0;

        function init() {
            _self.allQuiz.forEach(function (q) {
                if (q.type === "CHOOSE_ANSWER") {
                    _self.nrQuestions += 1;
                    if (q.answers.find(a => a.correct === true).id === q.candidateAnswerText) {
                        _self.score += 1;
                    }
                }
                if (q.type === 'WRITE_ANSWER') {
                    var nr = 0;
                    _self.nrQuestions += 1;
                    q.answers[0].label.split(", ").forEach(function (value) {
                        if (q.candidateAnswerText.toString().indexOf(value) > -1) {
                            nr ++;
                        }
                    });
                    if (nr > q.answers[0].label.split(" ").length / 2) {
                        _self.score += 1;
                    }
                }
            })
        }

        init();
    }

})();