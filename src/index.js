import validator from './validator.js';

function Validar (){ 
//alertas para los datos faltantes 
  const nombreU = document.getElementById("cardHolder");   //traer info que esta en card holder
  const nombre = nombreU.value; 
      
  if (nombre === "") {              
    alert ("Ingresa Nombre")
    return;
  }

  const fechaM = document.getElementById("cardExpirationmonth");   //traer info que esta en card holder
  const fechaV = fechaM.options[fechaM.selectedIndex].value;
  //console.log(fechaV);   
  if (fechaV === "Month") {              
    alert ("Indica fecha de vencimiento")
    return;
  }
  const fechaY = document.getElementById("cardExpirationYear");   //traer info que esta en card holder
  const fechaYear = fechaY.options[fechaY.selectedIndex].value;
  //console.log(fechaYear);   
  if (fechaYear === "Year") {              
    alert ("Indica año de vencimiento")
    return;
  }

  const claveCcv = document.getElementById("cardCCV");   //traer info que esta en card holder
  const ccV = claveCcv.value;   
  if (ccV === "") {              
    alert ("Ingresa CCV")
    return;
  }

  // Inician tareas para el numero de tarjeta 
  const inputCardNum = document.getElementById("cardNumber"); //crear una constante para indicar que traemos la caja 
  const numeroDeTarjeta = inputCardNum.value; // se crea la constante para traer los numeros contenidos en la caja    
  const masked = validator.maskify(numeroDeTarjeta)
    

  if (numeroDeTarjeta.length <=0){
    alert ("Introduce numero de tarjeta")
    return;
  }
  const resultadoFinal = validator.isValid(numeroDeTarjeta);   //en esta funcion se llama al validator
  if (resultadoFinal){ 
    //console.log("Tarjeta valida")
    alert ("Tarjeta Válida"+ masked);
    inputCardNum.value = masked; 
  }  else {
    //console.log ("tarjeta invalida")
    alert ("Tarjeta Invalida"+ masked);
    inputCardNum.value = ""
  }
  /*
  if (validator.isValid (numeroDeTarjeta)) { 
    alert ("Tarjeta válida"+ masked);
}else {
    alert ("Tarjeta invalida"+ masked);
} */

}

/*function Validar () {
    const numeroDeTarjeta = documen.getElementById ("cardNumber").value;
    const masked = validator.maskify(numeroDeTarjeta)
    
    if (validator.isValid (numeroDeTarjeta)) { 
        alert ("Tarjeta válida"+ masked);
    }else {
        alert ("Tarjeta invalida"+ masked);
    }

}*/

////code wars solution for masking all characters except the last 4 with #
//input string could be any length
/*var cc = "ABCD 1234 *!X£ 9999";

function maskify(input) {
  return input.slice(0,-4).replace(/./g, "#") + input.slice(-4);
}*/



document.getElementById ("ValidarDAtosTarjeta").addEventListener("click",Validar)
//console.log(validator);


