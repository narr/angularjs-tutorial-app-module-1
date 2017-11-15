'use strict';

import angular from 'angular';

angular.module('phoneListApp')
  .component('phoneListApp', {
    controller: PhoneListAppController,
    controllerAs: 'phoneListAppVm',
    templateUrl: 'app.component.html',
  });


PhoneListAppController.$inject = [
  '$element',
];

function PhoneListAppController($element) {

  const vm = this;

  vm.$onInit = init;
  vm.$postLink = postLink;

  function init() {
    vm.onPhoneListImgClick = onPhoneListImgClick;
    vm.onPhoneListNameClick = onPhoneListNameClick;

    vm.phoneListOrderBy = 'age';
  }

  function postLink() {}

  function onPhoneListImgClick(id) {
    console.log(id); // eslint-disable-line no-console
  }

  function onPhoneListNameClick(id) {
    console.log(id); // eslint-disable-line no-console
  }

}
