//se crea un objeto, que contiene las funciones (is valid, llama solo de numero de tarjeta)
const validator = {
  isValid: function (numeroDeTarjeta){          
    numeroDeTarjeta = numeroDeTarjeta.split("");//separa cada uno de los elementos de la tarjeta 
    //const reversed = numeroDeTarjeta.reverse(); 

    for (let numeroImpar = 1 ; numeroImpar < numeroDeTarjeta.length; numeroImpar = numeroImpar + 2) { // de denomina una constante para determinar el la primer posicion par, la primera es 1 ya que JS cuenta posicion 0 como la primera  
      numeroDeTarjeta[numeroImpar] = Number (numeroDeTarjeta[numeroImpar])*2;    //ubicando los numeros de tarjeta impares se multiplican por 2, generando otra avariable llamada Number 
       
      if (numeroDeTarjeta [numeroImpar]>9){                                
        numeroDeTarjeta[numeroImpar] = numeroDeTarjeta [numeroImpar]-9; //se condiciona si el resultado de la multiplicacion del numero en posicion impar es mayor a 9, se reduce a un digito restandole 9
      }
    }
    //console.log (numeroDeTarjeta) //mandamos mensaje en la consola para probar 

    let resultado = 0   //se denomina la variable para el resultado de la suma total

    for (let principal= 0; principal < numeroDeTarjeta.length; principal ++){   //se  crea una tarea tipo bucle con el for, indicando la variable let que es principal, lleva parentesis, 
      numeroDeTarjeta[principal] = Number (numeroDeTarjeta[principal])          
      resultado = resultado + numeroDeTarjeta[principal];
    }
    //console.log(resultado%10);
    return resultado % 10 === 0;
  },


  maskify: function (numeroDeTarjeta) {
    const soloVisibles = 4;
    const totalDigitos = numeroDeTarjeta.slice(0, -soloVisibles).replace (/./g,"#");
    const ultimosDigitos = numeroDeTarjeta.slice (-soloVisibles);
    return  totalDigitos + ultimosDigitos;
  },
};

export default validator;

