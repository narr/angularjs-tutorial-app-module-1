'use strict';

import angular from 'angular';

angular.module('phoneListApp')
  .component('phoneListApp', {
    template: '<phone-list phone-list-url="/json/phones.json"></phone-list>',
  });
