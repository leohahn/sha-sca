// Angular
import angular from 'angular';

// Firebase imports
import Firebase from 'firebase/lib/firebase-web.js';
import 'angularfire/dist/angularfire.min.js';

// css
import 'angular-material/angular-material.css';
import 'font-awesome/css/font-awesome.css';
import '../css/sha.css'; // projects css

// js
import angularMaterial from 'angular-material';
import ngRoute from 'angular-route';
import 'd3/d3.min.js';
import '../js/pie-chart.min.js';

// project imports
import controllers from './controllers';
import directives from './directives';
import services from './services';

// project run and config
import config from './app-config';
import run from './app-run';

// ------------------------------------------------------

/**
 * Main module of the SHA application. Takes extra modules
 * from controllers, services and directives as dependencies.
 * Also defines config and run functions.
 */
export default angular
  .module('sha', [
    'n3-pie-chart',
    'firebase',
    ngRoute,
    angularMaterial,
    // Project modules
    controllers,
  ])
  .config(config)
  .run(run);
