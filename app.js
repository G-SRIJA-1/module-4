angular.module('MenuApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html'
    })
    .state('categories', {
      url: '/categories',
      templateUrl: 'templates/categories.html',
      controller: 'CategoryController',
      controllerAs: 'catCtrl'
    })
    .state('items', {
      url: '/items/:categoryId',
      templateUrl: 'templates/items.html',
      controller: 'ItemsController',
      controllerAs: 'itemCtrl'
    });
});
