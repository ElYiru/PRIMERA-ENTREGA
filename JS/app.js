
let contraseñareal = "javascript";

const login = () => {
  let tieneusuario = false;
let usuario;
  for (let i = 3; i > 0; i--) {
    usuario = prompt("Ingrese su nombre de usuario");
    let contraseña = prompt("Ingrese su contraseña");

    if (contraseña === contraseñareal) {
      tieneusuario = true;
      alert("Inicio de sesión exitoso!");
      break;
    } else {
      alert("Contraseña incorrecta. Te quedan " + i + " intentos.");
    }
  }

  if (!tieneusuario) {
    alert("La cuenta " + usuario + " acaba de ser suspendida por multiples intentos de acceso, porfavor revise su casilla de mail");
  }      
  return tieneusuario
  
};

 
 if (login()){

const ImpuestoGanancias = 0.45;

const bienespersonales = 0.25;

const impuestopais = 0.30 ;
let monto;
let euro = 390.66; 
let dolar = 365.50;

const sumarimpuestos = (a, b, c) => a + b + c;

const impuestos = sumarimpuestos(impuestopais, ImpuestoGanancias, bienespersonales) 

monedavalida = false;
while(!monedavalida){
let cambio = prompt (`En que moneda esta el producto que va a comprar:

\n 1-EURO
\n 2- DOLAR
\nEscribir "SALIR" para volver`);

cambio = cambio.toLowerCase();
    

if (cambio === "euro" || cambio === "dolar" || cambio === "SALIR" || cambio === "salir"){
    monedavalida=true;
    if (cambio === "SALIR" || cambio === "salir") {
      alert("SALISTE");
      break;
    }
  } else {
    alert("Ingresar moneda válida");
  }


if (monedavalida){

switch (cambio){
case "euro":


do {
  monto = prompt("Ingresa el valor del producto que deseas convertir");
} while (isNaN(monto));

monto = parseFloat(monto);

if (!isNaN(monto)) {
  let extra = monto * impuestos;
  let total = extra + monto;
  let totalpesos = total * euro;
  alert("El total a pagar con impuestos incluidos es de\nEN PESOS:\n$" + totalpesos);
  document.write ("<h3> El total a pagar con impuestos incluidos es de\n <br>EN PESOS:\n$" + totalpesos + " </h3>" )
  break;
} else {
  alert("La entrada no es un número válido.");
}


case "dolar":

do {
  monto = prompt("Ingresa el valor del producto que deseas convertir");
} while (isNaN(monto));

monto = parseFloat(monto);

if (!isNaN(monto)) {
  let extra = monto * impuestos;
  let total = extra + monto;
  let totalpesos = total * euro;
  alert("El total a pagar con impuestos incluidos es de\nEN PESOS:\n$" + totalpesos);
  document.write ("<h3> El total a pagar con impuestos incluidos es de\n <br>EN PESOS:\n$" + totalpesos + " </h3>" )
  break;
} else {
  alert("La entrada no es un número válido.");
}


}




}
}
}



