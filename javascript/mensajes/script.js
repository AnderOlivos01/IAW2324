let oldcoments=[];
haycomenarios(comentarios);

function publicar(a,b){
    if(a.value!=''){
        oldcoments.push(a.value);
        actualizar();
    }
}

function haycomenarios(a){
    if(oldcoments.length==0){
        a.innerHTML="<p id='no-coments'>Aún no hay comentarios</p>"
    }
}

function borrar(a,b){
    oldcoments[a].className
    oldcoments.splice(a,1);
    actualizar();
}
    

document.getElementById('mensaje').addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        publicar(mensaje,comentarios);
    }
}, false);

function actualizar(){
    oldcoments.sort();
    var newcoments='';
    for(var i=0;i<oldcoments.length;i++){
        newcoments+="<div class='coment-div'><p class='coment-p'>"+oldcoments[i]+"</p><img class='basura' src='trash.png' onclick='borrar("+i+")'></div>";
    }
    document.getElementById('comentarios').innerHTML=newcoments;
}
