// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre: nombre,
    edad: edad,
    meow: function () {
      return "Meow!"
    }
  }
  return objeto;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property] = null; // como tengo que trabajar con los parametros de la funcion, no conozco realmente el nombre de la propiedad
  return objeto;          //  por eso no puedo utilizar el . debo usar los [] 

}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo](); // misma situacion que el ejercicio anterior
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

  // return objetoMisterioso.numeroMisterioso * 5; -> forma corta de resolucion

  var multiplicacion = objetoMisterioso.numeroMisterioso * 5; // en este caso, la consigna me dice el nombre de una propiedad
  return multiplicacion;                                      //  por lo que si puedo usar ahora el .

}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];
  return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var objeto = {
    nombre: nombre,
    email: email,
    password: password
  }
  return objeto;

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email) { // nos pregunta por la propiedad email, por eso la notacion de punto
    return true;
  } else {
    return false;
  }
}


function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]) { // a diferencia del ejercicio anterior, no sabemos el nombre de la propiedad
    return true;
  } else {
    return false;
  }
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if (usuario.password === password) { 
    return true;
  } else {
    return false;
  }
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword;
  return usuario;
}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  var usuario = {
    amigos: []
  }
  usuario.amigos.push(nuevoAmigo);
  return usuario;

}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:
  for (var i = 0; i < usuarios.length; i++) {
    usuarios[i].esPremium = true;
  }
     
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array // var usuario = {posts: [post1: {like : 5} , post2: {like : 6}]}
  // "posts" es un array de objetos "post"                                             // hay que sumar los likes de cada objeto post
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post" // -> (todos los objetos "post") = posts [i]
  // Devuelve la suma
  // Tu código:
  var suma = 0; // creo una variable para guardar todas las sumas realizadas (tiene que guardarse en algun lugar)
  for (var i = 0; i < usuario.posts.length; i++) {
    suma = suma + usuario.posts[i].likes;
  }// suma += usuario.posts[i].likes; -> es lo mismo

  return suma;
}

function agregarMetodoCalculoDescuento(producto) { // REVISAR TEST !!!
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" por el "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función

  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  producto.calcularPrecioDescuento = function() {                       // la funcion retorna el valor final que va a pagar el cliente
    return this.precio - ( this.precio * this.porcentajeDeDescuento ); // 1ero: se multiplica el precio del producto * el porcentajeDescuento = descuento
  }; //this hace referencia tanto al precio como al 
    // porcentajeDeDescuento definidos en el objeto producto 
    // (revisar test para ver los supuestos valores)                  //  2do: se resta el precio del producto - el descuento = total a pagar
  return producto;                                                   //   3ero: se retorna el objeto producto
}

// para ejecutar esta funcion, llamo a la funcion agregarMetodoDescuento(storeItem) -> revisar test (usamos esas propiedades)
// al hacer esto ya vamos a tener anidado sus valores con el metodo para calcular el descuento (funcion de ahora)
// simplemente ahora llamamos a storeItem.calcularPrecioDescuento para que realize la operacion

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
