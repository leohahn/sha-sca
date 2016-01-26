/**
 * Exports the configuration function. This function defines all the
 * possible routes on the application.
 * It also customizes the main theme of Angular Material.
 */
export default function config($routeProvider, $mdThemingProvider) {
  console.log('Starting configuration');
  $routeProvider
    .when('/home/dashboard', {
      templateUrl: 'app/partials/sha/home/dashboard.html',
      controllerAs: 'home',
      controller: 'HomeCtrl'
    })
    .when('/nutrition/dashboard', {
      templateUrl: 'app/partials/sha/nutrition/dashboard.html',
      controllerAs: 'nutrition',
      controller: 'NutritionCtrl'
    })
    .when('/activities/dashboard', {
      templateUrl: 'app/partials/sha/activities/dashboard.html',
      controllerAs: 'activities',
      controller: 'ActivitiesCtrl'
    })
    // when('/recipes/dashboard', {
    //  templateUrl: 'app/partials/sha/recipes/dashboard.html',
    //  controllerAs: 'recipes',
    //  controller: 'RecipesCtrl'
    //})
    .otherwise({
      redirectTo: '/home/dashboard'
    });

  $mdThemingProvider
    .theme('default')
    .primaryPalette('blue');
  console.log('Configuration done.');
};
