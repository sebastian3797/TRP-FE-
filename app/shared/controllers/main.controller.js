(function() {

    'use strict';

    angular
        .module('trpApp')
        .controller('TrpCtrl', Controller);

    Controller.$inject = [
        '$scope',
        '$uibModal',
        '$state'
    ];

    function Controller(
        $scope,
        $uibModal,
        $state) {

        var vm = this;

        function start() {
            return $uibModal.open({
                templateUrl: 'app/components/modals/templates/login.html',
                controller: 'trpApp.LoginController',
                backdrop: 'static',
                keyboard: false
            }).result
                .then(function (resultData) {

                }, function() {

                });
        }

        start();

    }

})();