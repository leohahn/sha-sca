import angular from 'angular';

// Import here all the controllers on the folder
import ApplicationCtrl from './application.js';
import HomeCtrl from './home.js';
import NutritionCtrl from './nutrition.js';
import ActivitiesCtrl from './activities.js';

export default angular
  .module('app.controllers', [])
  .controller('ApplicationCtrl', ApplicationCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('NutritionCtrl', NutritionCtrl)
  .controller('ActivitiesCtrl', ActivitiesCtrl)
  .name;
