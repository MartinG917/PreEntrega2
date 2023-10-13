/*const nombre = prompt("Hola! Bienvenido a Sneaker House, ingresa tu nombre");
const SneakerCollection = [];

const despedida = function (nombre) {
  return alert("Hasta pronto " + nombre + " Esperamos volver a verte pronto!");
};

let sexo = prompt(
  "Hola " + nombre + " Sos hombre o Mujer? Ingresa una M o una H"
);

if (sexo == "M") {
  alert("bienvenida " + nombre + " !");
} else if (sexo == "H") {
  alert("bienvenido " + nombre + " !");
} else {
  alert("Entrada invalida. Por favor intenta de nuevo");
}

class Zapatilla {
  constructor(marca, modelo, nombre, talle) {
    this.marca = marca;
    this.modelo = modelo;
    this.nombre = nombre;
    this.talle = talle;
  }
  publicarZapatilla() {
    console.log(
      "Recibimos tu mensaje en el que estás interesado en vender tus " +
        this.marca +
        " " +
        this.modelo +
        " " +
        this.nombre +
        " en el talle " +
        this.talle
    );
    console.log("Gracias por comunicarte, te estaremos contactando en breve.");
  }
}

const vendedor = new Zapatilla("Nike", "SB", "Teddy Bear", 13);
const vendedor2 = new Zapatilla("Adidas", "Originals", "Superstar", 11);

SneakerCollection.push(vendedor);
SneakerCollection.push(vendedor2);

let container = document.getElementById("contenedor");
container.innerHTML =
  "<h2>Hola</h2>" + nombre + "<p>Bienvenido  a la tienda de sneakers más grande de Argentina</p>";

let zapatillaContainer = document.getElementById("Coleccion");


SneakerCollection.forEach((zapatilla) => {
  let zapatillaElement = document.createElement("div");
  zapatillaElement.className = "Zapatilla"; 

  zapatillaElement.innerHTML = `<p>Marca: ${zapatilla.marca}, Modelo: ${zapatilla.modelo}, Nombre: ${zapatilla.nombre}, Talle: ${zapatilla.talle}</p>`;

  zapatillaContainer.append(zapatillaElement);
});

*/

function suma(num1, num2) {
  return num1 + num2;
}

function resta(num1, num2) {
  return num1 - num2;
}

function concatenacion(num1, num2) {
  return num1.toString() + num2.toString();
}

function division(num1, num2) {
  if (num2 === 0) {
    return "No se puede dividir por cero.";
  }
  return num1 / num2;
}

function calcularPorcentaje(valor, porcentaje) {
  return (porcentaje / 100) * valor;
}

let numero1 = parseFloat(prompt("Ingrese el número 1"));
let numero2 = parseFloat(prompt("Ingrese el número 2"));
console.log(numero1, numero2);

let opcion = parseInt(prompt("Seleccione qué desea hacer con estos números:\n1-Sumar\n2-Restar\n3-Concatenación\n4-División\n5-Porcentaje numero 1 \n 6-Porcentaje numero 2 "));

let resultado;

switch (opcion) {
  case 1:
    resultado = suma(numero1, numero2);
    break;

  case 2:
    resultado = resta(numero1, numero2);
    break;

  case 3:
    resultado = concatenacion(numero1, numero2);
    break;

  case 4:
    resultado = division(numero1, numero2);
    break;

  case 5:
    let porcentaje = parseFloat(prompt("Ingrese el porcentaje que desea calcular (por ejemplo, 20 para el 20%):"));
    resultado = calcularPorcentaje(numero1, porcentaje);
    break;

  case 6:
      let porcentaje2 = parseFloat(prompt("Ingrese el porcentaje que desea calcular (por ejemplo, 20 para el 20%):"));
      resultado = calcularPorcentaje(numero2, porcentaje);
      break;


  default:
    resultado = "Opción no válida. Por favor, seleccione una opción válida.";
}

alert("El resultado es " + resultado);




