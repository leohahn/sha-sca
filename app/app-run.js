/**
 * Exports the run function. This function will run in the beginning
 * of the application.
 */
export default function run($log, $rootScope, $location) {
  $rootScope.loading = true;
  $rootScope.firebaseUrl = 'https://sha-sca-aal.firebaseio.com';
  $rootScope.loading = false;
  $rootScope.$apply();
  $log.log('Loading complete!');
  $location.path('/home/dashboard');
};
