let oldcoments=[];
haycomenarios(comentarios);

function publicar(a,b){
    var newcoments='';
    oldcoments.push(a.value);
    for(var i=0;i<oldcoments.length;i++){
         newcoments+="<p id='coment'>"+oldcoments[i]+"</p>";
    }
    b.innerHTML=newcoments;
}

function haycomenarios(a){
    if(oldcoments.length==0){
        a.innerHTML="<p>Aún no hay comentarios</p>"
    }
}