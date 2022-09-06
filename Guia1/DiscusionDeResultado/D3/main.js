 /*Crear un programa donde el usuario ingrese en un prompt la temperatura en Celcius y el programa muestre en la
página la temperatura en Fahrenheit.*/ 
  
    var Celcius =  parseFloat(prompt("Ingrese Celsius a Convertir a Fahrenheit"));
    var conversion = (Celcius*1.8)+32;

    document.write(`<h1>La conversion de grados Celsius  ${Celcius} a Fahrenheit es ${conversion}</h1>`);
    
   
