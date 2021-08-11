// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

// return Object.entries(objeto); -> forma corta de resolver el ejercicio

var array = []; // creamos el array a devolver mas adelante, por ahora vacio
for (clave in objeto) { // utilizamos un for in, ya que puede recorrer las propiedades de un objeto (D, B, C)
// en el valor "clave" guardamos las propiedades del objeto que recorre el for in 
  array.push([clave, objeto[clave]]); // pusheamos en nuestro array cada "sub array" par clave-valor (las propiedades y sus valores)
}// clave = propiedades, objeto[clave] = valor de las propiedades
//                       bracket notation sin '' porque no sabemos en realidad el valor de esas propiedades
return array; // cuando termine el for in de recorrer todos los elementos del objeto y de pushearlos al array, que se devuelva ese array
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var objeto = {}; // -> creamos un objeto vacio donde despues vamos a guardar los pares clave-valor 
  for (var i = 0; i < string.length; i++) { // -> recorremos el string con un bucle for (lo tratamos como si fuera un array)
    // de esta manera me voy posicionando con i en cada indice/posicion del string
    if (Object.keys(objeto).includes(string[i])) { // -> comienzo buscando 'a' en el objeto, pero el objeto esta vacio, no tiene ninguna propiedad todavia, por lo que se saltea el if y pasa directamente al else
// preguntamos con keys si entre las propiedades de nuestro objeto, esta incluida el string en su posicion 0(a), 1(d), 2(s), 3(j), 4(f), 5(d) y asi...(includes)
      objeto[string[i]] = objeto[string[i]] + 1; // -> cuando llegamos a la posicion 5(d), nos damos con que la propiedad 'd' si esta includia en el objeto
    }// como ya tenemos la propiedad 'd', va a ingresar por primera vez en el if 
    // y le decimos que la propiedad 'd' va a ser igual al valor de esa propiedad + 1 -> {a : 1, d : 2, ...} y asi sucesivamente
    // al recorrer el string, cada vez que encuentre una que ya existe, le va a ir sumando 1
    else { // -> hacemos entonces que la propiedad 'a', 'd', 's', 'j', 'f' del objeto tenga el valor de 1 
      objeto[string[i]] = 1; // -> pasamos de esto {} a esto {a : 1, d : 1, s : 1, j : 1, f : 1}
       //  vuelve a comenzar el bucle for, ahora en la posicion 1(d), 2(s), 3(j), 4(f). Hago el mismo analisis/procedimiento
      //   pregunto si entre las propiedades del objeto, hay una propiedad llamada 'd', 's', 'j', 'f'. Como no hay ninguna, otra vez se saltea el if y va para el else 
      //   cuando vayamos recorriendo todo el string, cada vez que encuentre una nueva, crea la propiedad y le guarda el valor 1
    }
  }
  return objeto; // -> una vez terminado de recorrer todo el string, devolvemos el objeto con los pares claves - valor guardados
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  // vamos a manejar dos cadenas de strings, una para las mayusculas y otra para las minusculas
  // y al final vamos a concatenarlas como pide el ejercicio
  var minusculas = "";
  var mayusculas = "";
  for (var i = 0; i < s.length; i++) { // recorremos el string que recibimos como parametro

    // a continuacion preguntamos si cada caracter del string es minuscula o mayuscula

    if (s[i] === s[i].toUpperCase()) { // aca preguntamos si en el string 's', cada una de sus posiciones, estan en Mayuscula
      mayusculas = mayusculas + s[i]; //  si estan en Mayuscula, que se vayan guardando en la variable mayusculas
    } // H + E + N + R + Y = HENRY
    else {
      minusculas = minusculas + s[i]; // si alguna de las posiciones del string no estan mayuscula, entonces estan en minuscula
    } // hacemos el mismo procedimiento pero lo vamos guardando esta vez en la variable minusculas
  }  //  s + o + y = soy
  return mayusculas + minusculas; // retornamos concatenando las variables en el orden pedido
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aqui

  // guardamos la frase recibida en una variable que al final retornaremos ya invertida como espejo
  var fraseEspejo = str.split(' ').map(function (palabras) {
// teniendo en cuenta que a los strings los podemos trabajar como si fueran arrays
// primero, con str.split (' '), lo que hacemos es dividir cuando encuentre un espacio vacio cada palabra de la frase en el mismo orden, por lo que pasan a ser elementos separados de un nuevo array que crea el metodo
// "The Henry Challengue is Close" -> ["The", "Henry", "Challengue", "is", "Close"]
// segundo, con .map trabajamos con cada una de las palabras, aplicandoles los siguientes metodos: 
    return palabras.split('').reverse().join('');
// por cada palabra recibida, le aplico un .reverse(), lo que hace es invertirla
// .join('') convierte el array en string concatenando las palabras en una sola sin espacios
// .split('') lo unico que hace en este caso es habilitarnos los metodos reverse y join, nada mas
//  ["The", "Henry", "Challengue", "is", "Close"] -> "ehTyrneHegnellahCsi!esolc"
  }).join(' '); // al ultimo, como metodo que integra la funcion entera de map, convertimos la frase sin espacios a una con espacios como separador de cada palabra
// "ehTyrneHegnellahCsi!esolc" -> "ehT yrneH egnellahC si !esolc"
  return fraseEspejo; // retornamos nuestra frase espejo
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var deNumeroAString = numero.toString() //pasamos el numero a string para poder aplicarle los metodos siguientes
  var stringInvertida = deNumeroAString.split('').reverse().join('') // invertimos el numero 
  if (deNumeroAString === stringInvertida) { // si el numero es igual al reves, es capicua, si no, no lo es 
    return "Es capicua";
  } 
  else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  // el metodo replace de strings nos permite reemplazar caracteres de un string per tambien eliminarlos como en este caso
  cadena = cadena.replace('a', '');
  cadena = cadena.replace('b', '');         //hacerlo separado por cada caracter, no en una sola linea
  cadena = cadena.replace('c', '');
  return cadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var newArray = arr.sort(function comparadora (elementoActual, elementoSiguiente){
    return elementoActual.length - elementoSiguiente.length
});
return newArray;
} 


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var newArray = [];
  // lo siguiente es un for anidado, ya que trabajamos sobre mas de un array
  for (var i = 0; i < arreglo1.length; i++) {
    
    for (var b = 0; b < arreglo2.length; b++) {
      if (arreglo1[i] === arreglo2[b]) {
        newArray.push(arreglo1[i]) // pushear o los elementos del arreglo1[i] o del arreglo2[b] al newArray es lo mismo, ya que serian los mismos elementos
      } 
    } 
  }//si los elementos de ambos arrays no son iguales, no se hace nada y devuelve mi newArray (estaria vacio)
  return newArray; // igualmente si se agregaron elementos al newArray que se devuelva tambien
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

