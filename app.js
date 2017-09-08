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
        .state('books', {
            url: '/books',
            templateUrl: 'views/books.html'
            
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('articles&essays', {
            url: '/ARTICLES&ESSAYS',
            templateUrl: 'views/ARTICLES&ESSAYS.html'
            
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('event', {
            url: '/events',
            templateUrl: 'views/event.html'
            
        })
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('blog', {
            url: '/BLOG',
            templateUrl: 'views/blog.html'
        })

        // HOME STATES AND NESTED VIEWS ========================================
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html'
        })

        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html'  
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact.html'
        })

        .state('biography', {
            url: '/about-biography',
            templateUrl: 'views/biography.html'  
        })

        .state('cv', {
            url: '/jennifers-cv',
            templateUrl: 'views/cv.html'
        })
        
        
}).directive('mainNav', function() {
  return {
    templateUrl: 'directive/nav.html'
  };
}).directive('endFooter', function() {
  return {
    templateUrl: './directive/footer.html'
  };
    
});

