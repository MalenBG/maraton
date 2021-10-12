// 1) Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.

// alert('Bienvenido a mi página uwu')

// let texto = prompt("Introduzca su nombre de usuario <3");
// window.alert('Hola! ' + texto + ', todo bien?')
// window.alert(texto.toUpperCase());
// window.alert(texto.toLowerCase());

// 2)  Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.

// alert('Ahora introduzca dos números así los puedo sumar y restar por vos n.n');

// const a = parseInt(window.prompt('Intoduzca el primer número'));
// const b = parseInt(window.prompt('Introduzca el segundo número'));

// const miFuncion = new Function("a", "b", "alert(a + b)");
// const resultado = miFuncion(a, b);

// const miFuncionl = new Function("a", "b", "alert(a - b)");
// const resultadol = miFuncionl(a, b);

// 3) Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.

// const frases = window.prompt('Bueno ahora ingresa algo que te guste (Una frase, un canción, etc.)')

// if (window.confirm("¿Querés que te lo muestro en la consola el resultado?")) {
//     console.log(frases.toUpperCase());
// } else{
//     alert('Entonces te lo muestro en este alert: ' + (frases.toUpperCase()))
// }

// 4)  Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.

// alert('Espero que te haya gustado, ahora necesito dos números más owo')
// const unoNumero = parseInt(window.prompt('Introducí el primer número'))
// const dosNumero = parseInt(window.prompt('Introducí el segundo número'))

// var operaciones;

// operaciones = prompt("¿Qué operaciones queres hacer? (multiplicacion, suma, resta, division) uwu");
// switch(operaciones){
//     case "multiplicacion":
//         const c = unoNumero * dosNumero;
//             alert(c);
//         break;

//     case "suma":
//         const d = unoNumero + dosNumero;
//             alert(d);
//         break;

//     case "resta":
//         const e = unoNumero - dosNumero;
//             alert(e);
//         break;

//     case "division":
//         const f = unoNumero / dosNumero;
//             alert(f);
//         break;

//     default:
//         alert("Solo son validos los operaciones mencionadas anteriormente, probá de nuevo :D ");
//         break;
// }

// 5) Vamos reutilizar la calculadora del punto 4. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar. Extra: investigar/googlear la función de Javascript "confirm" 

// calculadora()

// function calculadora() {

//     const unoNumero = parseInt(window.prompt('Introducí el primer número'))
//     const dosNumero = parseInt(window.prompt('Introducí el segundo número'))

//     var operaciones;

//     operaciones = prompt("¿Qué operaciones queres hacer? (multiplicacion, suma, resta, division) uwu");
//     switch (operaciones) {
//         case "multiplicacion":
//             const c = unoNumero * dosNumero;
//             alert(c);
//             break;

//         case "suma":
//             const d = unoNumero + dosNumero;
//             alert(d);
//             break;

//         case "resta":
//             const e = unoNumero - dosNumero;
//             alert(e);
//             break;

//         case "division":
//             const f = unoNumero / dosNumero;
//             alert(f);
//             break;

//         default:
//             alert("Solo son validos los días mencionados anteriormente, probá de nuevo :D ");
//             break;
//     }

//     otraOperacion();

// }

// function otraOperacion() {
//     const opcion = confirm('¿Quieres hacer otra operación?')
//     if (opcion) {
//         calculadora();
//     } else {
//         alert('Entonces nos vemos, byebye owo');
//     }
// }


// 6)  Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla.

// const nombres = [];
// var agregandoAlumnos = true;

// while (agregandoAlumnos) {
//     const nombre = window.prompt('Introduzca los nombres de los alumnos o(〃＾▽＾〃)o');
//     if (nombre == 'salir') {
//         agregandoAlumnos = false;
//         alert(nombres);
//     } else{
//         nombres.push(nombre);
//         alert('Agregaste: ' + nombres);
//     }
// }


// 7)Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.

const ej7Nombres = ["goku", "mario", "melchor", "mafalda", "cacho", "hermione", "tony", "pappo", "leia", "homero"];

// String.prototype.capitalize = function () {
//     return this.toLowerCase().replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
// }

// ej7Nombres.map((day) => {
//     console.log(day.capitalize())
// })


// // ----------

// const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia", "homero"];

// for (let i = 0; i < ej7Nombres.length; i++) {
//      console.log(i + " "+ ej7Nombres[i].charAt(0).toUpperCase()+ ej7Nombres[i].slice(1));
// }


//8)  Para una veterianaria. Dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
/*- Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
- Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
- Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
- Si es igual a "Tuerca", informar: "Entregar alimento balanceado" */

// const ej8Mascotas = ["Tuerca", "Ramshanaram", "Perro", "Gertrudis", "Kat", "Fido", "Lo", "Loko", "MAX", "Apolo", "Gogo", "Coqui", "Negra", "Sasha"]

// for (let i = 0; i < ej8Mascotas.length; i++) {
//     if (ej8Mascotas[i].length >= 6) {
//         console.log(ej8Mascotas[i] + "                       (Nombre largo)")
//     } else if (ej8Mascotas[i].length <= 3) {
//         console.log(ej8Mascotas[i] + "                       (Nombre corto)")
//     }
//     if (ej8Mascotas[i] == "Fido" || ej8Mascotas[i] == "Gertrudis") {
//         console.log(ej8Mascotas[i] + ("Hay que vacunar contra la rabia"))
//     } else if (ej8Mascotas[i] == "Tuerca") {
//         console.log("Entregar alimento balanceado")
//     }
// }


//9)  Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
/*- Cada menor de edad pagará el menú $450 y cada adulto, $700. 
- Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
Mostrar por pantalla la cantidad de comensales y el costo total a pagar. */

// const ej9restaurant = [25, 17, 18, 44, 12, 9, 36, 50];

// const menores = [];
// const mayores = [];

// const total = parseInt(" ");


// for (let i = 0; i < ej9restaurant.length; i++) {

//     if (parseInt(ej9restaurant[i]) <= 18) {
//         console.log(ej9restaurant[i] + ' $450')
//         menores.push(ej9restaurant[i] <= 18)
//     } else if (parseInt(ej9restaurant[i]) >= 18){
//         console.log(ej9restaurant[i] + ' $700')
//         mayores.push(parseInt(ej9restaurant[i]) >= 18)
//     }
// }
// console.log(menores[i])
// console.log(mayores[i])