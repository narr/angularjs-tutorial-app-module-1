'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneList')
  .component('phoneList', {
    bindings: {
      phoneListUrl: '@',
      phoneListFilterQuery: '<',
      phoneListOrderBy: '<',
    },
    controller: PhoneListController,
    controllerAs: 'phoneListVm',
    templateUrl: 'phone-list.component.html',
  });


PhoneListController.$inject = [
  '$element',
  'phoneListService',
];

function PhoneListController($element, phoneListService) {

  const vm = this;

  vm.$onInit = init;
  vm.$postLink = postLink;

  function init() {
    phoneListService.getPhoneList(vm.phoneListUrl).then(function (res) {
      vm.phones = res.data;
    });
  }

  function postLink() { }

}
