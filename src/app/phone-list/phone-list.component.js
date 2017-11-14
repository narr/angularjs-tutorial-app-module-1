'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneList')
  .component('phoneList', {
    bindings: {
      // test: '<', // one-way binding
    },
    controller: PhoneListController,
    controllerAs: 'phoneListVm',
    templateUrl: 'phone-list.component.html',
  });


PhoneListController.$inject = [
  '$element',
];

function PhoneListController($element) {

  const vm = this;

  init();

  function init() {
    vm.$postLink = postLink;

    vm.phones = [
      {
        name: 'Nexus S',
        snippet: 'Fast just got faster with Nexus S.',
      }, {
        name: 'Motorola XOOM™ with Wi-Fi',
        snippet: 'The Next, Next Generation tablet.',
      }, {
        name: 'MOTOROLA XOOM™',
        snippet: 'The Next, Next Generation tablet.',
      },
    ];
  }

  function postLink() { }

}
