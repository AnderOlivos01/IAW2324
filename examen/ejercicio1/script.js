
/*Declaramos el array oldcoments*/
let oldcoments=[];
let oldfechas=[];
/*Nada mas empezar se inician las funciones recuperar (localstorage) 
y dice si hay comentarios o no*/
recuperar();
haycomentarios(comentarios);


/*Función para recuperar el array oldcoments del localstorage en caso de que exista*/
function recuperar(){
    if(localStorage.getItem("antiguocoment")){
        oldcoments=localStorage.getItem("antiguocoment");
        oldcoments=JSON.parse(oldcoments);
        oldfechas=localStorage.getItem("antiguofecha");
        oldfechas=JSON.parse(oldfechas);
        actualizar();
    }
    else{
        oldcoments=[];
        oldfechas=[];
    }
}

/*Función para añadir comentarios al array oldcoments*/
function publicar(a){
    if(a.value!=''){
        var fecha = new Date();
        oldfechas.push(fecha.toLocaleString());
        oldcoments.push(a.value);
        localStorage.setItem("antiguocoment",JSON.stringify(oldcoments));
        localStorage.setItem("antiguofecha",JSON.stringify(oldfechas));
        actualizar();
        mensaje.value="";
    }
}

/*Función para mostrar que no hay ningún mensaje*/
function haycomentarios(a){
    if(oldcoments.length==0){
        a.innerHTML="<p id='no-coments'>Aún no hay comentarios</p>"
    }
}

/*Borra el mensaje seleccionado*/
function borrar(i){
    oldcoments.splice(i,1);
    oldfechas.splice(i,1);
    actualizar();
}

/*Cada vez que se publica o borra un mensaje, se actualiza el div comentarios*/
function actualizar(){
    var newcoments='';
    for(var i=0;i<oldcoments.length;i++){
        newcoments+="<div class='coment-div'><p class='coment-p'>"+oldcoments[i]+
        "</p><p class='fechas'>"+oldfechas[i]+"</p><img class='basura' src='imagenes/trash.png' onclick='borrar("+i
        +")'></div>";
    }
    comentarios.innerHTML=newcoments;
    localStorage.setItem("antiguocoment",JSON.stringify(oldcoments));
    localStorage.setItem("antiguofecha",JSON.stringify(oldfechas));
    haycomentarios(comentarios);
}


/*Función para pulsar Enter y subir el mensaje*/
document.getElementById('mensaje').addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        publicar(mensaje,comentarios);
        mensaje.value="";
    }
}, false);

/*Función borrar mensajes almacenamiento local*/

function borrar_local(){
    oldcoments=[];
    oldfechas=[];
    localStorage.setItem("antiguocoment",'');
    localStorage.setItem("antiguofecha",'');
    actualizar();
}