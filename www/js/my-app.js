  
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/index/',
        url: 'index.html',
      },
      {
        path: '/login/',
        url: 'login.html',
      },
      {
        path: '/busqueda/',
        url: 'busqueda.html',
      },
      {
        path: '/perfil/',
        url: 'perfil.html',
      },
      {
        path: '/producto/',
        url: 'producto.html',
      },
    ]
  });

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log('about');
    
})
$$(document).on('page:init', '.page[data-name="login"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log('login');
  
})
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
// Do something here when page with data-name="about" attribute loaded and initialized
console.log('index');
$$("#lOk").on('click', fnLogin)
function fnLogin(){
  user= $$('#lMail').val();
  pass= $$('lPass').val();
   
}
  
})
$$(document).on('page:init', '.page[data-name="busqueda"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log('busqueda');
  
})
$$(document).on('page:init', '.page[data-name="perfil"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log('perfil');
  
})
$$(document).on('page:init', '.page[data-name="producto"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log('producto');
  
})