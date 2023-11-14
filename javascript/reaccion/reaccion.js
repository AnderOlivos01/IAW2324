
creafigura(forma);

function creafigura(a){
    var colorRandomA=Math.floor(Math.random() * (256) + 255);
    var colorRandomB=Math.floor(Math.random() * (256) + 255);
    var tamañoRandom=Math.floor(Math.random() * (80 - 40 + 1) + 40);
    var formaRandom=Math.floor(Math.random()*2);
    var col = "rgb(" + colorRandomA + "," + colorRandomB + ",0)";
    a.style.backgroundColor=col;
    a.style.width=tamañoRandom+"px";
    a.style.height=tamañoRandom+"px";
    if(formaRandom==1){
        a.style.borderRadius="0px";
    }
    else{
        a.style.borderRadius="50%";
    }
}