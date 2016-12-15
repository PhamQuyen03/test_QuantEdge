(function () {
    'use strict';

    angular
        .module('app')
        .controller('controllerTest', function ($scope, $http, $location) {
            var apiUrl = 'http://api.fixer.io/latest?base=USD';
            var apiUrl1 = 'http://www.apilayer.net/api/live?access_key=c537cb0d3d13db7612ff7de2c71c0acf&format=1';
            $http.get(apiUrl)
                .then(function(response) {
                    $scope.myWelcome = response.data;
                    var listKey = response.data.rates;
                    var keys = Object.keys(listKey);
                    $scope.sizeList = keys.length;
                    $scope.usd_eur = keys;
                    var list = [];
                    var i;
                    for (i = 0; i < keys.length; ++i)
                    {
                        list.push(listKey[keys[i]]);
                    }
                    $scope.sells = list;
                    
                });

        });
    
})();
