
const timeout=setTimeout(creafigura(forma),10000);

function creafigura(a){
    a.style.display='block';
    var colorRandomA=Math.round(Math.random()*256);
    var colorRandomB=Math.round(Math.random()*256);
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
    setTimeout(creafigura(forma),5000);
}