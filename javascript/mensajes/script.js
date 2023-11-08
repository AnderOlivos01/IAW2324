let oldcoments=[];
haycomenarios(comentarios);

function publicar(a,b){
    if(a.value!=''){
        var newcoments='';
        oldcoments.push(a.value);
        oldcoments.sort();
        for(var i=0;i<oldcoments.length;i++){
             newcoments+="<div class='coment-div'><p class='coment-p'>"+oldcoments[i]+"</p><img class='basura' src='trash.png' onclick='borrar("+i+")'></div>";
        }
        b.innerHTML=newcoments;
    }
}

function haycomenarios(a){
    if(oldcoments.length==0){
        a.innerHTML="<p id='no-coments'>Aún no hay comentarios</p>"
    }
}

function borrar(a,b){
    oldcoments.splice(a,1);
    oldcoments.sort();
        var newcoments='';
        for(var i=0;i<oldcoments.length;i++){
            newcoments+="<div class='coment-div'><p class='coment-p'>"+oldcoments[i]+"</p><img class='basura' src='trash.png' onclick='borrar("+i+")'></div>";
        }
        document.getElementById('comentarios').innerHTML=newcoments;
    }

document.getElementById('mensaje').addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        publicar(mensaje,comentarios);
    }
}, false);