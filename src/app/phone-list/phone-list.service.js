'use strict';

import angular from 'angular';

angular.module('phonecatApp.phoneList')
  .factory('phoneListService', phoneListService);


phoneListService.$inject = [
  '$http',
];

function phoneListService($http) {

  return {
    getPhoneList: getPhoneList,
  }

  function getPhoneList(url) {
    return $http.get(url);
  }

}
