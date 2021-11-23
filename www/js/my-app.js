
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
      path: '/registro/',
      url: 'registro.html',
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
    {
      path: '/iproductos/',
      url: 'ingreso de productos.html',
    },
    {
      path: '/login/',
      url: 'login.html',
    },
  ]
});

var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
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
$$(document).on('page:init', '.page[data-name="registro"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log('registro');
  $$('#bReg').on('click', fnRegistro);


})
$$(document).on('page:init', '.page[data-name="iproductos"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log('registro');
  $$('#bRegProd').on('click', fnRegistroDeProductos);


})
$$(document).on('page:init', '.page[data-name="index"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log('index');
  $$('#Pproductos').on('click', fnactivador);
  subir();

  $$('body').on('click', '.imagen img', function () {
    colProductos.where('url1', '==', this.src).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());

        $$('#nombredelproducto').html(doc.data().nombre);

        $$('#imagen1').attr('src', doc.data().url1);
        $$('#imagen2').attr('src', doc.data().url2);
        $$('#imagen3').attr('src', doc.data().url3);

        $$('#descProductos').html(doc.data().desc);

      })
    })
  })

})
$$(document).on('page:init', '.page[data-name="login"]', function (e) {
  // Do something here when page with data-name="about" attribute loaded and initialized
  console.log('login');
  $$('#bLogin').on('click', fnLogin);

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
var emailDelUser;
var guardarEmail;

var db = firebase.firestore();
var colUsuario = db.collection("Usuarios");
var colProductos = db.collection("Productos");

function fnRegistroDeProductos() {

  // registro de productos

  nombreDelProd = $$('#rNombreProd').val();
  descDelProd = $$('#rDescProd').val();
  url1DelProd = $$('#rURL1').val();
  url2DelProd = $$('#rURL2').val();
  url3DelProd = $$('#rURL3').val();


  data = {
    nombre: nombreDelProd,
    desc: descDelProd,
    url1: url1DelProd,
    url2: url2DelProd,
    url3: url3DelProd,
  }

  //guarda los datos del formulario en la base de datos
  colProductos.doc(emailDelUser).set(data);
  alert("Producto registrado con exito");

}


function subir() {
  colProductos.get().then((querySnapshot) => {
    $$('#productos').html('');

    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());

      colUsuario.doc(doc.id).get().then((document) => {
        if (doc.exists) {
          $$('#productos').append(`
          <div class="imagen">
              <a href="#" data-popup=".my-popup" class="popup-open">
                  <div class="nomejodas">
                    <img src="${doc.data().url1}" width="100%">
                  </div>
              </a>
              <h2 id="np1">"${doc.data().nombre} / ${document.data().nombre}"</h2><br>
          </div>
          `)
        }
      })
    });
  });
}


function fnactivador() {
  //envio a login si no estas logeado pero sino te envía a ingreso de productos
  if (emailDelUser == undefined) {
    mainView.router.navigate('/login/');
  } else {
    mainView.router.navigate('/iproductos/');
  }
}

function fnRegistro() {
  // cada un@ pone su magia para recuperar el mail y la clave de un form...
  emailDelUser = $$('#rMail').val();
  passDelUser = $$('#rPass').val();
  telDelUser = $$('#rTel').val();

  firebase.auth().createUserWithEmailAndPassword(emailDelUser, passDelUser)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("Bienvenid@!!! " + emailDelUser);
      // ...
      //mainView.router.navigate('/siguientePantallaDeUsuarioOK/');


      claveDeColeccion = emailDelUser;

      nombre = $$('#rNombre').val();
      tel = $$('#rTel').val();

      datos = {
        nombre: nombre,
        tel: tel,
        rol: "usuario"
      }

      colUsuario.doc(claveDeColeccion).set(datos)
        .then(() => {
          console.log("Document successfully written!");
          //ya creado el usuario, envia al interesado a logearse
          mainView.router.navigate('/index/');
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });


    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);
      alert("Se ha producido un error al registrarse");

      if (errorCode == "auth/email-already-in-use") {
        console.error("el mail ya esta usado");
        alert("El email ya se encuentra registrado");
      }

      if (errorCode == "auth/weak-password") {
        console.error("la contraseña es demasiado corta");
        alert("Su contraseña es demasiado corta");
      }

      // ..
    });
}

function fnLogin() {
  //logeo a la app
  emailDelUser = $$('#lMail').val();
  var passDelUser = $$('#lPass').val();

  firebase.auth().signInWithEmailAndPassword(emailDelUser, passDelUser)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;

      console.log("Bienvenid@!!! " + emailDelUser);
      //la var guarda el email del ultimo user para poder enviar productos a la base de datos
      guardarEmail = emailDelUser;
      //envio del usuario al inicio
      mainView.router.navigate('/index/');
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      console.error(errorCode);
      console.error(errorMessage);
      alert("Error en el inicio de sesión");
    });

}
