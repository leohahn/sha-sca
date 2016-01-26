import angular from 'angular';
import Firebase from 'firebase/lib/firebase-web.js';


export default function ActivitiesCtrl($log, $rootScope, $firebaseArray, $firebaseObject) {
  let activitiesTypeRef  = new Firebase($rootScope.firebaseUrl + '/activitiesType');
  let goalsTypeRef       = new Firebase($rootScope.firebaseUrl + '/goalsType');
  let activitiesLogRef   = new Firebase($rootScope.firebaseUrl + '/activitiesLog');
  let activitiesGoalsRef = new Firebase($rootScope.firebaseUrl + '/activities-goals');

  let activitiesType = $firebaseArray(activitiesTypeRef);
  let log = $firebaseObject(activitiesLogRef);
  let goals = $firebaseObject(activitiesGoalsRef);
  let distanceGoals = $firebaseArray(activitiesGoalsRef.child('0'));
                                                       
  
  let getDistancePieCharts = function() {
    let charts = [];

    distanceGoals.$loaded().then(function() {
      const keys = Object.keys(distanceGoals).filter(key => !isNaN(key));

      keys.forEach(key => {
        const currentGoal = distanceGoals[key];

        charts.push({
          data: [
            {
              label: activitiesType[currentGoal.activityType].$value,
              value: currentGoal.current,
              color: 'orange',
              suffix: 'km'
            }
          ],
          options: {
            thickness: 10,
            mode: 'gauge',
            total: currentGoal.target
          }
        });

      });
    });
    $log.log(charts);
    return charts;
  };

  this.pieCharts = getDistancePieCharts();
}
