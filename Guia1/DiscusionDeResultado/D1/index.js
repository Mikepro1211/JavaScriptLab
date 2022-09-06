/*Crear una aplicación web realizar cálculo de presupuesto en un hospital. Dado un valor de presupuesto por el usuario,
el presupuesto se calcula el total asignado a tres áreas del hospital: Dermatología 40%, Traumatología 30% y Pediatría
25%.
*/ 
var presupuesto = parseFloat(prompt("Ingrese Presupuesto para el Hospitas"));
document.write(`<h1 class ='alert alert-primary'> Presupuesto Ingresado es de ${presupuesto}</h1>`);
document.write(`<h2>Este presupuesto se asignara a tres areas</h2><br>`);
var descuentoDerma = parseFloat (0.40)  ;
var descuentoT = 0.30;
var descuentoPedi  = 0.25;
//Operaciones 
var dermatologia = parseFloat(((presupuesto * descuentoDerma)/1));
var traumologia = ((presupuesto * descuentoT)/1);
var Pediatr =  ((presupuesto * descuentoPedi)/1);
var sumatoriadeDescuento= (dermatologia+traumologia+Pediatr);


document.write(` <h3> Presupuesto designado para dermatologa es del 40% es igual a  ${dermatologia}</h3> <br>`);
document.write(`<h3>Presupuesto designado para  Traumologia es del 30%  es igual a ${traumologia}</h3> <br>`);
document.write(`<h3> Presupuesto designado para Pediatria es del 25%    es igual a  ${Pediatr} </h3> <br>`);
var totallibre  = (presupuesto - sumatoriadeDescuento) ;
document.write(`<h4> Monto sobrante ${totallibre} `);



