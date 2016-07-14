angular.module('app')
.service('mainService', function($http){

  this.getTeam = function () {
      return $http({
          method: 'GET',
          url: '/api/team'
      }).then(function (res) {
          return res.data;
      });
  };


  this.getProducts = function () {
    //   console.log('getProducts hit')
    return $http({
        method: 'GET',
        url: '/api/products'
    }).then(function (res) {
        // console.log('getProducts SVC', res);
    //   return res.data;
    });
  };





});
