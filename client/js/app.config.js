angular.module('phone')
        .config(['$qProvider', function ($qProvider) {
            $qProvider.errorOnUnhandledRejections(false);
        }]);
angular.module('phone')
        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise('home');
            $stateProvider
                .state('login', {
                    url: '/',
                    templateUrl: './partials/login/login-template.html',
                    controller: 'loginCtrl as loginCtrl'
                })
                .state('register', {
                    url: '/register',
                    templateUrl: './partials/register/register-template.html',
                    controller: 'registerCtrl as registerCtrl'
                })
                .state('home', {
                    url: '/home',
                    views: {
                        "": {
                            templateUrl: './partials/home/home.html'
                        }
                    }
                })
                .state('admin', {
                    url: '/admin',
                    views: {
                        "": {
                            templateUrl: './partials/admin/index.html'
                        }
                    }
                })
                ;

            // use the HTML5 History API
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        });
