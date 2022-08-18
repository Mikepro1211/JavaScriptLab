//Declaracion de variables
var salario, preciocasa,prima,cuotamensual;
var annios;
var h1 ,totalh1;
salario =parseFloat(prompt("Ingrese su salario mensual"));
annios =12*15;//numero de años a pagar 
preciocasa =parseFloat(prompt("Ingrese el precio de la casa"));

 if(salario<=400){
    if(preciocasa>8000){
        alert("Losiento el valor de la casa es muy alto para su sueldo");
    }else{
        prima=(preciosa*0.1);
        cuotamensual=(preciocasa-prima)/annios;
        document.write("<h1>Calculo de Prima de Casa </h1>");
        document.write("<img src='img/house.png'>");
        document.write("<h1>Calculo de prima de Casa</h1>");
        document.write("<h1 class='alert alert-primary'> La prima que usted debe pagar por la casa es = $" +Math.round(prima* Math.round(10,2))/Math.pow(10,2)+"</h1><hr>");
        document.write("<h1 class='alert alert-primary'> La cuota mensual a pagar durante 30 años es de =$"+Math.round(cuotamensual*Math.pow(10,2))/Math.pow(10,2)+"</h1><hr>");

    }
    }else {
        prima = (preciocasa*0.2);
        cuotamensual= (preciocasa-prima)/annios;
        document.write("<h1> Calculo de Prima de casa </h1>");
        document.write("<img src='img/house.png'>");
        document.write("<h1 class ='alert alert-primary'>La prima que usted debe pagar por la casa es =$"+Math.round(prima*Math.pow(10,2))/Math.pow(10,2)+"</h1><hr>");
        document.write("<h1 class='alert alert-primary'>La cuota mensual a pagar durante 15 años es de = $" +Math.round(cuotamensual*Math.pow(10,2))/Math.pow(10,2)+"</h1><hr>");

        //Buscar todos los elementos h1 dentro del documento
        h1 = document.getElementsByTagName('h1');
        //obtener el total de los elementos h1 encontrados
        totalh1 =h1.length;
        //Crear un ciclo o lazo para asignar el manejador de evnetos  onmousever y onmouseout
        for (var i=0; i<totalh1;i++){
            h1[i].onmouseover =function(){
                this.className ='alert alert-info';
            }
            h1[1].onmouseout =function(){
                this.className ='alert alert-primary';
            }
        }

    }
 
