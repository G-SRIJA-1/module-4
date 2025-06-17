angular.module('MenuApp')
.controller('CategoryController', function(MenuService) {
  var catCtrl = this;

  MenuService.getCategories()
    .then(function(response) {
      catCtrl.categories = response.data;
    })
    .catch(function(error) {
      console.error("Failed to fetch categories:", error);
    });
})
.controller('ItemsController', function($stateParams, MenuService) {
  var itemCtrl = this;
  var categoryId = $stateParams.categoryId;

  MenuService.getItems(categoryId)
    .then(function(response) {
      itemCtrl.items = response.data;
    })
    .catch(function(error) {
      console.error("Error loading items", error);
    });
});
