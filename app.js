var app = angular.module('app', ['ui.router'])

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html'
            
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'
            
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('terms', {
            url: '/terms',
            templateUrl: 'views/terms.html'
            
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('policy', {
            url: '/policy',
            templateUrl: 'views/policy.html'
            
        })
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('profile', {
            url: '/profile',
            templateUrl: 'views/profile.html'
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('affiliates', {
            url: '/affiliates',
            templateUrl: 'views/affiliates.html'
            
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('shopmentorbox', {
            url: '/shopmentorbox',
            templateUrl: 'views/shopmentorbox.html'
        })
        
}).directive('mainNav', function() {
  return {
    templateUrl: 'directive/nav.html'
  };
}).directive('endFooter', function() {
  return {
    templateUrl: './directive/footer.html'
  };
  
}).directive('profileNav', function() {
  return {
    templateUrl: './directive/social.html'
  };
  
});

