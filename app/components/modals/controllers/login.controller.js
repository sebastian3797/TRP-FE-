(function () {

    'use strict';

    angular
        .module('trpApp')
        .controller('trpApp.LoginController', Controller);

    Controller.$inject = [
        '$scope',
        '$uibModalInstance'
    ];

    function Controller(
        $scope,
        $uibModalInstance) {

        var vm = this;

        $scope.closeModal = closeModal;


        function closeModal() {
            $uibModalInstance.close();
        }
    }

})();