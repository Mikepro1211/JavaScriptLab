function iniciar(){
    //elementos
    var selcountry =document.getElementById('country');
    var addcity = document.getElementById('btnagregar');
    //arreglo  
    var cities  = new Array(4);
    cities["Italia"] = ["Roma", "turin","Milan","Venecia","verona"];
    cities["Francia"] = ["Paris", "Lion","Niza","Monaco"];
    cities["España"] = ["Madrid", "Barcelona","Valencia","Sevilla"];
    cities["Estados Unidos"] = ["Washigton", "Florida","San Francisco","Houston"];


  selcountry.onchange =function(){
    addOptions(cities[this.options[this.selectedIndex].text], document.testform.city);

  }

   //asociando manejador 

   addcity.onclick =function(){
    addcity(cities[document.testform.country.options[document.testform.country.selectedIndex].text],document.test.city)
   }

  // 
  //Esta función limpia todas las opciones del menú desplegable de las ciudades
    function removeOptions(optionMenu){
    for(i=0; i<optionMenu.options.length; i++){
    optionMenu.options[i] = null;
    }
   }
   //Esta función agrega nuevas opciones en el menú desplegable 
   
   function addOptions(optionList, optionMenu){
    var i=0;
    //Limpia las opciones
    removeOptions(optionMenu);
    for(i=0; i<optionList.length; i++){
    optionMenu[i] = new Option(optionList[i], optionList[i]);
    }
   }
   //Permite agregar dinámicamente una ciudad al país actual
   function addCity(optionList, optionMenu){
    var newcity;
    do{
    newcity = prompt("Ingrese la ciudad que desea agregar:","");
    }while(newcity == null || newcity == undefined || newcity.length == 0);
    optionList.push(newcity);
    removeOptions(optionMenu);
    addOptions(optionList, optionMenu);
   
    }
} window.onload = iniciar ;
