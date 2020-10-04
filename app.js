
var btn = document.getElementsByClassName("btn");
 var fotos = document.getElementById("fotos");

 var imagenes = new Array(
     "imagenes/pic1.jpg", 
     "imagenes/pic2.jpg", 
     "imagenes/pic3.jpg", 
     "imagenes/pic4.jpg", 
 );

 for(lef i=0; i<btn.length; i++){
     btn [i].onclick =function(){
         fotos.src=imagenes[i];
     };
 }