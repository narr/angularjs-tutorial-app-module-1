'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneList')
  .component('phoneList', {
    bindings: {
      phoneListUrl: '@',
      phoneListFilterQuery: '<',
      phoneListOrderBy: '<',
      onImgClick: '&',
      onNameClick: '&',
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
    vm.imgClickHandler = imgClickHandler;
    vm.nameClickHandler = nameClickHandler;

    phoneListService.getPhoneList(vm.phoneListUrl).then(function (res) {
      vm.phones = res.data;
    });
  }

  function postLink() {}

  function imgClickHandler(id) {
    vm.onImgClick({
      id: id,
    });
  }

  function nameClickHandler(id) {
    vm.onNameClick({
      id: id,
    });
  }

}
