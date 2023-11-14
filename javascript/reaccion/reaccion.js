esperar();
var old_fecha, tardado, new_fecha;
function esperar(){
    setTimeout(creafigura,2000);
    document.getElementById("forma").style.display='none';
    old_fecha=new Date().getTime();
}

function creafigura(){
    new_fecha=new Date().getTime();
    tardado=new_fecha-old_fecha-2000;
    document.getElementById('s_tardado').innerText=tardado+" seg";
    var a=document.getElementById("forma");
    a.style.display='block';
    var colorRandomA=Math.round(Math.random()*256);
    var colorRandomB=Math.round(Math.random()*256);
    var posicionX=Math.round(Math.random()*901);
    var posicionY=Math.round(Math.random()*601);
    var tamañoRandom=Math.round(Math.random()*(150 - 50 + 1) + 50);
    var formaRandom=Math.round(Math.random()*2);
    var col = "rgb(" + colorRandomA + "," + colorRandomB + ",30)";
    a.style.backgroundColor=col;
    a.style.width=tamañoRandom+"px";
    a.style.height=tamañoRandom+"px";
    if(formaRandom==1){
        a.style.borderRadius="0px";
    }
    else{
        a.style.borderRadius="50%";
    }
    a.style.top=posicionY+"px";
    a.style.left=posicionX+"px";
}
