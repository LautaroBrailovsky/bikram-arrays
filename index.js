// 1.
let arrayVacio = [];

// 2.
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// 3.
let arrayNumerosPares = [0, 2, 4, 6, 8];

// 4.
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

// 5.
function suma(a, b) {
  let resultado = a + b;
  return resultado;
}

// 6.
function potenciacion(a, b) {
  let resultado = 1;
  for (let i = 0; i < b; i++) {
    resultado = resultado * a;
  }
  return resultado;
}

// 7.
function separarPalabras(texto) {
  let palabras = texto.split(' ');
  return palabras;
}

// 8.
function repetirString(texto, repeticiones) {
  let textoRepetido = '';
  for (let i = 0; i < repeticiones; i++) {
    textoRepetido = textoRepetido + texto;
  }
  return textoRepetido;
}

// 9.
function esPrimo(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 10.
function ordenarArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}

// 11.
function obtenerPares(arr) {
  let pares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares.push(arr[i]);
    }
  }
  return pares;
}

// 12.
function pintarArray(arr) {
  let texto = '[';
  for (let i = 0; i < arr.length; i++) {
    texto = texto + arr[i];
    if (i < arr.length - 1) {
      texto = texto + ', ';
    }
  }
  texto = texto + ']';
  return texto;
}

// 13.
function arrayMapi(arr, funcion) {
  let nuevoArray = [];
  for (let i = 0; i < arr.length; i++) {
    let resultado = funcion(arr[i]);
    nuevoArray.push(resultado);
  }
  return nuevoArray;
}

// 14.
function eliminarDuplicados(arr) {
  let sinDuplicados = [];
  for (let i = 0; i < arr.length; i++) {
    let yaExiste = false;
    for (let j = 0; j < sinDuplicados.length; j++) {
      if (arr[i] === sinDuplicados[j]) {
        yaExiste = true;
      }
    }
    if (yaExiste === false) {
      sinDuplicados.push(arr[i]);
    }
  }
  return sinDuplicados;
}

// 15.
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

// 16.
let holaMundo = ['Hola', 'Mundo'];

// 17.
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal'];

// 18.
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

// 19.
function multiplicacion(a, b) {
  let resultado = a * b;
  return resultado;
}

// 20.
function division(a, b) {
  let resultado = a / b;
  return resultado;
}

// 21.
function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// 22.
function resta(a, b) {
  let resultado = a - b;
  return resultado;
}

let arrayFunciones = [suma, resta, multiplicacion];

// 23.
function ordenarArray2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}

// 24.
function obtenerImpares(arr) {
  let impares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      impares.push(arr[i]);
    }
  }
  return impares;
}

// 25.
function sumarArray(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
}

// 26.
function multiplicarArray(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    total = total * arr[i];
  }
  return total;
}


