var mes = prompt("Ingrese el mes");
var year = prompt("Ingrese el año");
var diasdelmes;
var bisiesto = false;

 if (year%4 ==0 && (year%100 !=0 || year%400==0)) {
    bisiesto= true;
 }

 switch(mes){
    case "Enero": case"enero" : case"Marzo":
    case "marzo": case"Mayo": case"mayo":
    case "Julio" : case"julio":case"Agosto": case "agosoto":
    case "Octubre": case"octubre": case"Diciembre": case"diciembre":
   diasdelmes =31;
   break;
   case"Abril" :case"abril": case"Junio": case"junio": case"Septiembre": case"septiembre":
   case"Noviembre": case"noviembres": 
   diasdelmes =30;
   break;
   
    case "Febrero":  case"febrero":
        if(!bisiesto)
        {
            diasdelmes =28;
        }else {
            diasdelmes=29;
        }
    break;
    default: alert("El mes" +mes+"no existe");
    mes = "No existe";
    diasdelmes = 0;

 }

  if(bisiesto== true){
    var message = "El año "+year+ " es bisiesto <br/> El mes de "+mes+" tiene " +diasdelmes+ " dias ";
  }else{
    var message = " El año " +year+ " no es biciesto <br/> El mes de "+mes+" tiene "+diasdelmes+" dias ";
  }

  //variable para hacer referencia al elemento Div
  // donde se mostrara el numero de años del meses y dias

  var dias = document.getElementById('info');
  dias.innerHTML = '<h3>' +mes+' '+ year + '</h3>';
  dias.innerHTML += '<div class="card" style="width: 18rem;">';
  dias.innerHTML += '<img class="card-img-top" style=" height: 200px; width: 200px" src="img/calendar.png" alt="Card image cap">';
  dias.innerHTML += '<div class="card-body">';
  dias.innerHTML += ' <h5 class="card-title">'+diasdelmes+' dias</h5>';
  dias.innerHTML += ' <p class="card-text">'+message+'</p>';
  dias.innerHTML += ' </div>';
  dias.innerHTML += '</div>';
  

