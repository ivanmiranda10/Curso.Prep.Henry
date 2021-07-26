// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array [0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array.pop();
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return (array.length);
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  // [2, 3, 4, 5] -> [3, 4, 5, 6]
  for (var i = 0; i < array.length; i++) {
    array [i] = array [i] + 1;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   array.push(elemento);
  return (array);
}



function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return (array);
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
              //  0         1
            // palabras [0] -> 'Hello'
            // palabras [1] -> 'world!'
  // Tu código:
  var respuesta = palabras [0]; // respuesta = 'Hello'
  for (var i = 1; i < palabras.length; i++) {
    respuesta = respuesta + ' ' + palabras [i]; // -> palabras [1] - (si hay mas palabras, el for se repite tantas veces como palabras tenga el array)
//  respuesta = 'Hello'   + ' ' +   'world!'
  }
  return respuesta; // -> Hello world!
}

// return palabras.join(' '); -> concatena elementos de un array (forma facil de hacerlo)


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    if (array [i] === elemento) {
      return true; 
    }
  } return false;
}
// return array.includes(elemento); -> busca si un elemento esta o no dentro de una matriz (metodo sencillo)

function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  // ir recorriendo el array e ir sumando sus valores
  // [2, 3, ...]
  //  0  1 
  var suma = 0;
  for (var i = 0; i < numeros.length; i++) {
    suma = suma + numeros [i]; // -> posiciones/indices del array 
 //   0  =  0   +   2   ->  2
 // mientras el bucle se siga ejecutando, la variable suma va a tener el valor de la anterior suma
 // var suma = 2; -> ahora vale 2, no 0
 // for (var i = 1 -> {el bucle va aumentando su valor en 1 por cada vuelta} ; i < numeros.length; i++) -> segunda vuelta del bucle
 // suma = suma + numeros [i]
 //   2  =   2  +   3   ->  5
 // Y asi sucesivamente, hasta que ya no se cumpla la condicion de frenado, los valores se van a ir sumando 
 // Y cuando eso suceda, se retorna la variable suma:
  }
  return suma;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código (para sacar promedio se suma todos los elementos del array y se los divide por su longitud total)
  var resultado = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    resultado = resultado + resultadosTest [i]
  }
  return resultado / resultadosTest.length;
}
// return agregarNumeros(resultadosTest) / resultadosTest.length; -> otra manera de resolver el ejercicio, ya que:
// primero tengo que sumar los elementos del array, que es algo que ya hice en el ejercicio/funcion anterior
// y en vez de volver a hacerlo en esta funcion, llamo a esa funcion donde hice la suma (agregarNumeros)
// y como parametro le paso lo que me dice este ejercicio (resultadosTest)
// la primera mitad del ejercicio ya estaria resuelto, solo quedaria dividirlo para sacar el promedio


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  // Recorremos la matriz en busca del numero mas grande
  var masGrande = numeros [0] // Me paro en el primer numero del array y lo guardo en la variable
  for (var i = 1; i < numeros.length - 1; i++) { // Creo un bucle for que recorra el array hasta llegar al ultimo numero (el mas grande)
    if (numeros [i] > masGrande) { // numeros [i] -> numeros [1, 2, 3....] 
      masGrande = numeros [i] // mientras se cumpla la condicion en el if, quiero q se guarde en mi variable el numero mas grande del array siempre
    }
  }
  return masGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length < 1){ // si no hay argumentos
    return 0;               //  se devuelve 0     
  }
  var resultado = 1 // en la multiplicacion, el numero neutro no es 0, es 1 porque si lo defino en 0, todas las multiplicaciones me van a dar 0
  for (let i = 0; i < arguments.length; i++) {
    resultado = resultado * arguments[i]
  }
  return resultado;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0; // -> contador de elementos del array que son mayores a 18
  for (let i = 0; i < arreglo.length; i++) { // -> recorremos el array que nos pasan como parametro
    if (arreglo[i] > 18) { // preguntamos si arreglo en la posicion i en cada una de sus vueltas es mayor a 18
      contador++; // -> mientras la condicion if se cumpla, aumentamos el contador en 1 (es lo mismo hacer esto que contador = contador + 1;)
    }
  }
  return contador; // -> una vez que ya no se cumpla la condicion de frenado del bucle for
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if (numeroDeDia == 1 || numeroDeDia == 7) {
    return "Es fin de semana";
  } else {
    return "Es dia Laboral";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  // Intentar analizar todos los numeros existentes que empiezen con 9 es muy complejo
  // Por eso vamos a convertir el numero entero n en un string con el siguiente metodo:
  var aux = n.toString();  // ej: 9 -> '9'
  // ahora podemos evaluar si este string comienza con 9
  // hay que recordar que podemos trabajar los strings como si fuesen arrays:
  // "Hola" -> ['H', 'o', 'l', 'a'];
  //             0    1    2    3
  if (aux [0] === '9') return true; // si solo hay que retornar algo, podemos ponerlo en la misma linea del if y sin {}
          //   == 9 tambien funcionaria 
  return false;

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  // ['Hola', 'Hola', 'Chau']; -> supongamos que recibimos este array de strings para trabajar                          
  //    0        1       2
  //Lo primero que tengo que hacer para comparar 2 elementos de un array es guardar en algun lugar uno de los elementos dados
  var auxiliar = arreglo[0]; // -> capturo el primer elemento del array
   // nos servira para ir guardando los elementos anteriores segun la posicion en la cual yo este parado en el bucle 
  for (let i = 1; i < arreglo.length; i++) {
    if (auxiliar === arreglo [i]) { // -> verifico, lo que tengo en el auxiliar, es igual a lo que tengo en la posicion en la que estoy parado?
      // 'Hola'  ===  'Hola' (en la primera vuelta del bucle)
      auxiliar = arreglo [i]; // -> el auxiliar ahora vale lo que tengo en la posicion i actualmente (1 / 'Hola')
      return true;
    } else { // -> si no se cumple la condicion if, si no son iguales lo que tengo en el auxiliar y en la posicion i (seria el caso en la 2da vuelta del bucle)
      return false; // -> cuando 'Hola' no sea igual a 'Chau' (1 != 2)
    }
  }  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var array2 = [];
  for (let i = 0; i < array.length; i++) { // recorremos el array y nos fijamos si entre sus elementos estan los iguales a los meses pedidos
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
     array2.push(array[i]); // si cualquiera de las condiciones se cumple, con el metodo push agrego esos elementos a mi nuevo array creado
    } 
  } // lo siguiente es por fuera del bucle for
  if (array2.length === 3) { // si se encontraron los meses pedidos y se guardaron en el nuevo array,
    return array2; // lo devuelvo
  } else {         // si los meses no se encontraron, devuelvo lo siguiente:
    return "No se encontraron los meses pedidos";
  }


}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var array2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100 && array[i] <= 200) {
      array2.push(array[i]);
    }
  }
  return array2; //vamos viejaaaa, acordate de la felicidad por hacer este codigo solooo papaaaaaaaaaa
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:

  // Supongamos que el parametro numero = -4
  //Comienza el for en 0
  //La primera suma seria -4 + 2 = -2
  // -2 es igual a 0? No, entonces se salta el break y pushea en mi array el valor
  // Empieza el for de nuevo, ahora esta en 1
  // Segunda suma, -2 + 2 = 0
  // 0 es distinto de 1, vuelve a saltarse el break y vuelve a pushear el valor en mi array
  //Empieza el for de nuevo, ahora esta en 2
  // Nueva suma, 0 + 2 = 2
  // Esta suma y la posicion en la que estoy en el bucle coinciden (2 = 2)
  // Se ejecuta el break y sale del bloque for hacia el segundo if
  // Si no se completaron las 10 vueltas, devuelve el error
  // Si se completaron, devuelve mi array

  var array = [];  //declaramos un array vacio donde despues guardare los valores sumados
  var respuesta = numero; // declaramos tambien una variable donde guardo el parametro de la funcion dada 
   for (var i = 0; i < 10; i++) { // itero en un bucle for el numero un limite de 10 veces (empieza en 0)
    respuesta = respuesta + 2; // al numero que ya tenia guardado lo voy sumando/aumentando en 2
    if (respuesta === i) { // pregunto, esa suma en algun punto coincide con el numero de iteraciones (las vueltas que va dando el for) ?
      break // si coinciden, que termine el bucle for y pase al siguiente bloque
    } else {
      array.push(respuesta) // si no coinciden, que se vayan agregando a mi array creado los valores ya sumados, para volver a empezar el for 
    }
  }
  if (i < 9) return "Se interrumpió la ejecución"; //si el bucle no completo sus 10 vueltas, retornar que se interrumpio la ejecucion

  return array; // si se completo, que devuelva mi array 
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var resultado = numero;
  for ( i = 0; i < 10; i++) {
    if (i === 5) {
      continue;    // aca primero hay que ver que si i = 5, lo salte en el bucle sin hacer nada
    } else {      //  y despues recien si i != 5, que sume y pushe el resto de valores hasta que se cumpla la condicion del bucle
      resultado = resultado + 2 // por eso si yo sumaba primero y despues hacia la condicion if, el test no resultaba
      array.push(resultado)
    }
  } 
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
