"use strict";

alert("Hola usuario!");

let op;
let repetir = false;
do {
  function valop(op) {
    if (op === "+" || op === "-" || op === "*" || op === "/") {
      return op;
    } else {
      alert("La operación introducida es errónea. Prueba de nuevo.");
    }
  }
  op = prompt("Elije operación: +, -, * ó /", "");
  op = op.trim();

  if (valop(op)) {
    let operador1 = "";
    let operador2 = "";
    let salir = false;

    /*Operaciones*/
    let sumar = (operador1, operador2) => {
      return operador1 + operador2;
    };

    let restar = (operador1, operador2) => {
      return operador1 - operador2;
    };
    let multiplicar = (operador1, operador2) => {
      return operador1 * operador2;
    };
    let dividir = (operador1, operador2) => {
      return operador1 / operador2;
    };

    while (!salir) {
      let operadores;
      let validar = function (operadores) {
        operadores = prompt("Introduce los operadores separados por espacio");

        let i = 0;
        for (; i < operadores.length; i++) {
          if (operadores[i] !== " ") {
            operador1 += operadores[i];
          } else {
            if (operador1 !== "") {
              break;
            }
          }
        }

        console.log(operador1);

        for (; i < operadores.length; i++) {
          if (operadores[i] !== " ") {
            operador2 += operadores[i];
          } else {
            if (operador2 !== "") {
              break;
            }
          }
        }
        console.log(operador2);

        operador1 = Number(operador1);
        operador2 = Number(operador2);
        if (isNaN(operador1) || isNaN(operador2)) {
          alert("Tienes que introducir números");
          salir = false;
        } else {
          salir = true;
        }
        return operador1, operador2;
      };
      validar(operadores);
    }

    switch (op) {
      case "+":
        let suma = sumar(operador1, operador2);
        alert(suma);
        break;
      case "-":
        let resta = restar(operador1, operador2);
        alert(resta);
        break;
      case "*":
        let multiplicacion = multiplicar(operador1, operador2);
        alert(multiplicacion);
        break;
      case "/":
        let division = dividir(operador1, operador2);
        alert(division);
        break;
    }
    repetir = confirm("Quieres realizar otra operación?");
  }
} while ((op !== "+" && op !== "-" && op !== "*" && op !== "/") || repetir);

console.log(op);
