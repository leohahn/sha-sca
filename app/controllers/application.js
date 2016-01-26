export default function ApplicationCtrl() {
  this.menu = [
    {
      title: 'Home',
      icon: 'fa-home',
      href: '/home/dashboard'
    },
    {
      title: 'Nutrition',
      icon: 'fa-beer',
      href: '/nutrition/dashboard'
    },
    {
      title: 'Activities',
      icon: 'fa-heartbeat',
      href: '/activities/dashboard'
    },
    {
      title: 'Recipes',
      icon: 'fa-shopping-basket',
      href: '/recipes/dashboard'
    }
  ];

  this.management = [
    {
      title: 'Settings',
      icon: 'fa-gears',
      href: '/settings'
    },
    {
      title: 'Logout',
      icon: 'fa-reply',
      href: '/logout'
    }
  ];
  

  this.pieChartData = [
    {label: 'Current', value: 40, color: 'red', suffix: 'Km'},
  ];

  this.pieChartOptions = { thickness: 7, mode: 'gauge', total: 100 };
}
