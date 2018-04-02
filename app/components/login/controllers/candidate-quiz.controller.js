(function () {

    'use strict';

    angular
        .module('loginModule')
        .controller('trpApp.login.CandidateQuizController', Controller);

    Controller.$inject = [
        '$scope',
        '$stateParams',
        '$state',
        '$timeout',
        'trpApp.login.CandidateQuizService'
    ];

    function Controller(
        $scope,
        $stateParams,
        $state,
        $timeout,
        CandidateQuizService) {

        var _self = this;

        _self.answeredQuestions = false;

        _self.submitedQuiz = [];

        _self.outputCode = "";

        _self.counter = 60;
        var stopped;

        _self.progressBarPieces = 0;

        _self.stop = function(){
            $timeout.cancel(stopped);
        };

        _self.countdown = function() {
            if (_self.counter === 0) {
                $state.go('statusCandidate', { testData: _self.allQuiz, user: $stateParams.user});
            } else {
                stopped = $timeout(function() {
                    _self.counter--;
                    _self.countdown();
                }, 60000);
            }
        };

        function init() {

            _self.user = $stateParams.user;

            _self.allQuiz = $stateParams.testData.questionList;

            _self.allQuiz.forEach(function (r) {
                if (r.type === 'CHOOSE_ANSWER')
                    r.title = r.title.replace('/n/n', '/n');
            });

            _self.progressBarPieces = _self.allQuiz.length;

            _self.selectedQuiz = _self.allQuiz[0];

            _self.countdown();

            _self.allQuiz.forEach(function (q) {
                q.visited = 0;
            });

            $('.rocket-image').css('transition', 'margin-left 1s');
        }

        init();

        _self.setQuiz = function (id) {
            _self.outputCode = "";
            _self.selectedQuiz = _self.allQuiz.find(q => q.id === id);
        };

        _self.newAnswer = function () {

            if (_self.selectedQuiz.visited === 0) {
                _self.selectedQuiz.visited = 1;
                $('.progress-bar').css('width', ((100/_self.progressBarPieces)* ($('.greenCircle').length + 1) + '%' ));
                $('.rocket-image').css('margin-left', ((((100/_self.progressBarPieces)* ($('.greenCircle').length + 1))-5) + '%' ));
            } else {
                if (_self.selectedQuiz.candidateAnswerText === "") {
                    _self.selectedQuiz.visited = 0;
                    $('.progress-bar').css('width', ((100/_self.progressBarPieces)* ($('.greenCircle').length - 1) + '%' ));
                    $('.rocket-image').css('margin-left', ((((100/_self.progressBarPieces)* ($('.greenCircle').length - 1))-5) + '%' ));
                }
            }

            if (angular.isUndefined(_self.allQuiz.find(q => !q.candidateAnswerText))) {
                _self.answeredQuestions = true;
            } else {
                _self.answeredQuestions = false;
            }
        };

        _self.radio = null;

        _self.submitQuiz = function () {
            $state.go('statusCandidate', { testData: _self.allQuiz, user: $stateParams.user});
        };

        _self.executeCode = function () {
            CandidateQuizService
                .executeCode(_self.selectedQuiz.candidateAnswerText)
                .then(function (response) {
                    _self.outputCode = "";
                    _self.outputCode = response.outputCode;
                })
        }
    }

})();