// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
  class Usuario {
    constructor (opciones) { // el constructor acepta un objeto llamado "opciones"
      this.usuario = opciones.usuario
      this.nombre = opciones.nombre,
      this.email = opciones.email,
      this.password = opciones.password
    } // this hace referencia a cada uno de los objetos creados por el constructor
    saludar () {
      return 'Hola, mi nombre es ' + this.nombre;
    }
  }
  return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function () {
    return "Hello World!";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    var stringInvertida = []; // que empieze como un array y despues lo convertimos otra vez a string, para hacerlo mas facil
    for(var i = 0; i < this.length; i++) { // iteramos en un for, que empieze desde la 1era letra, y que se ejecute hasta el final de la string
      stringInvertida.unshift(this[i]) // empuja los elementos que le pasemos siempre al principio de la matriz
    }                                 //  1ero la T [t]
                                     //   2do la o [ot]
                                    //    3ero la n [not]
                                   //     4to la i [inot]      
    return stringInvertida.join(''); // .join concatena los elementos de una matriz y los convierte a string, las '' son para que los caracteres esten juntos, sin separacion de coma -> "inot"
  };
  // String.prototype.reverse = function() {
   // var stringInvertida = '';
   // for(var i = this.length - 1; i>=0; i--) {
   //   stringInvertida = stringInvertida + this.charAt(i);
    }
   // return stringInvertida;
 // };
//}

// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      this.nombre = nombre,
      this.apellido = apellido,
      this.edad = edad,
      this.domicilio = domicilio
    }
    detalle() {
      return {
        nombre,
        apellido,
        edad,
        domicilio
      }
    }
}

function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var juan = new Persona ('Juan', 'Perez', 22, 'Saavedra 123');
  return juan;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function () {
    return this.nombre + ', ' + this.edad + ' años';
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
