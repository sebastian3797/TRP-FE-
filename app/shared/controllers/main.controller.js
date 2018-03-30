(function() {

    'use strict';

    angular
        .module('trpApp')
        .controller('TrpCtrl', Controller);

    Controller.$inject = [
        '$scope',
        '$state'
    ];

    function Controller(
        $scope,
        $state) {

        var _self = this;

    }

})();