(function () {

    'use strict';

    angular
        .module('loginModule')
        .controller('trpApp.login.CandidateIntroController', Controller);

    Controller.$inject = [
        '$scope'
    ];

    function Controller(
        $scope) {

        var _self = this;

        _self.data = {};
        _self.data.userName = 'Sebastian';

    }

})();