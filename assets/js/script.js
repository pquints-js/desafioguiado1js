/* Realizar el diagrama de flujo para las siguientes operaciones matemáticas: Suma,
Resta, División, Multiplicación y el módulo de un número, partiendo de dos números
ingresados por el usuario. (1.5 Puntos) */


/* 1.- Declarar las variable */
var numeroUno;
var numeroDos;
var resultado;
/* 2.- Solicitar los dos numeros */
numeroUno = prompt('Ingresa el primer numero:');
numeroDos = prompt('Ingresa el segundo numero:');

/* 3 parsear los datos */
numeroUno = parseFloat(numeroUno);
numeroDos = parseFloat(numeroDos);


/* 4.- Realizar la operacion  */
/* var suma = numeroUno + numeroDos;
var resta = numeroUno - numeroDos;
var division = numeroUno / numeroDos;
var multiplicacion = numeroUno * numeroDos;
var modulo = numeroUno % numeroDos;  */

/* 5.- Mostrar cada resultado en pantalla */
resultado = numeroUno + numeroDos;
console.log(`el resultado de la suma es ${resultado}`);
resultado = numeroUno - numeroDos
console.log(`el resultado de la resta es ${resultado}`);
resultado = numeroUno / numeroDos
console.log(`el resultado de la division es ${resultado}`);
resultado = numeroUno * numeroDos
console.log(`el resultado de la multiplicacion es ${resultado}`);
resultado = numeroUno % numeroDos
console.log(`el resultado del modulo es ${resultado}`);


/* Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que
la transforme a grados Kelvin y Fahrenheit. */
/* 1.- Declaracion de Variable */
var celsius = 0;
var kelvin = 273.15;
var fahrenheit = 32;

/* 2.5 parsear */
celsius = parseFloat(celsius);
kelvin = parseFloat(kelvin);
fahrenheit = parseFloat(fahrenheit);

/*2.- solicitar grados  */
celsius = prompt ('Ingresa grados celsius')

/* 3.- operacion */
resultado = celsius + kelvin;
console.log(`de celsius a kelvin son ${resultado}`);
resultado = (celsius * 9/5) + 32; 
console.log(`de celsius a fahrenheit son ${resultado}`);

/* Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día.  */
var dias = prompt ('Ingresar cantidad de dias')

/* 2.conversion- */
var diasAnio = 365;
var diasSemana = 7;

/* 3.- calculacion de los años */
var anios = math.floor(dias / diasAnio);
var diasRestantes = dias % diasAnio;

/* 4.- calculacion semanas */
var semana = math.floor (diasRestantes / diasSemana);
diasRestantes = diasRestantes % diasSemana;




















































































