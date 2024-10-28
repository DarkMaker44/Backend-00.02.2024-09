//1. Crea una función que retorne la suma de dos números.

function sumaDeValores(valor1, valor2) {
    const result = valor1 + valor2;
    return result;
  }

  const dato1 = +prompt("Ingrese el primer valor");
  const dato2 = +prompt("Ingrese el segundo valor");

  const result = sumaDeValores (dato1,dato2);

  console.log(result);

// 2. Crea una función que retorne la potencia de un número dado, esta función deberá recibir la potencia y el número a potenciar.

function potencia(numero, potencia) {
    if (!numero) return "numero invalido";
    if (!potencia) return "potencia invalida";
    const resultado = Math.pow(numero, potencia);
    return resultado;
  }

  const num1 = +prompt("Ingrese el numero a potenciar");
  const num2 = +prompt("Ingrese el valor de potencia");

  const resultado = potencia (num1,num2);

  console.log(resultado);

// 3. Crea una función que tome números y devuelva la suma de sus cubos. sumOfCubes(1, 5, 9) ➞ 855
//    Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

function sumaCubos(nume1, nume2, nume3, cubo){

    const resultado3 = Math.pow(nume1, cubo) + Math.pow(nume2, cubo) + Math.pow(nume3, cubo);
    return resultado3;
  }

    const resultado3 = sumaCubos (+prompt("Ingrese el primer numero"),+prompt("Ingrese el segundo numero"),+prompt("Ingrese el tercer numero"),3);

    console.log(resultado3);

//4. Escribe una función que tome la base y la altura de un triángulo y devuelva su área. triArea(3, 2) ➞ 3

function areaTriangulo(base, altura){

    const resultado4 = ( base * altura ) / 2;
    return resultado4;
}

    const resultado4 = areaTriangulo(+prompt("Ingrese el valor de la base"),+prompt("Ingrese el valor de la altura"));

    console.log(resultado4);

//5. Crea una función llamada calculator que recibe 3 parámetros, dos números y una operación matemática 
//(+,-,/,x,%), y si la operación no es correcta que envié un mensaje “El parámetro no es reconocido” calculator(2,"+", 2) ➞ 4

const calculator =(valor1,operacion,valor2)=>{ 
    if (!valor1) return "primer valor invalido";
    if (!valor2) return "segundo valor invalida";
     
    switch(operacion){
        case "+":
            return valor1+valor2;
            
        case "-":
            return valor1-valor2;
            
        case "*":
            return valor1*valor2;
            
        case "/":
            return valor1/valor2;
            
        case "%":
            return valor1 * (valor2 / 100);
            
        default:
            return "El parámetro no es reconocido"
            
    }
   
}

    const resultado5 = calculator(2,"+", 2);

    console.log(resultado5);
