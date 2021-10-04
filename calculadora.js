alert("Hola usuario");
let op;
let repetir=false;
do {
  op = prompt("Elige operacion");
  op = op.trim();

  if (op === "+" || op === "-" || op === "*" || op === "/") {
    let operador1 = "";
    let operador2 = "";
    let salir = false;

    while (!salir) {
      let operadores = prompt(
        "Introduzca los operadores separados por un espacio"
      );

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
        alert("Tienes que introducir dos números");
        salir = false;
      } else {
        salir = true;
      }
    }
    let resultado;
    switch (op) {
      case "+":
        resultado = operador1 + operador2;
        alert(resultado);
        break;
      case "-":
        resultado = operador1 + operador2;
        alert(resultado);
        break;
      case "/":
        resultado = operador1 / operador2;
        alert(resultado);
        break;
      case "*":
        resultado = operador1 * operador2;
        alert(resultado);
        break;
    }
    repetir = confirm("Quieres realizar otra operacion");
  
  }else{
      alert("Operacion erronea. Prueba de nuevo")
  }

  
} while ((op !== "+" && op !== "-" && op !== "*" && op !== "/") || repetir);
