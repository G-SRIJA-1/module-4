angular.module('MenuApp')
.service('MenuService', function($http) {
  this.getCategories = function() {
    return $http.get('data/categories.json');
  };

  this.getItems = function(categoryId) {
    return $http.get('data/items-' + categoryId + '.json');
  };
});
