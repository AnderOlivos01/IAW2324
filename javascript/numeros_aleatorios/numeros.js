var trys,random;
reseteo(pista);

function fempezar(a,b){
    a.style.display='none';
    b.style.display='flex';
    tienes(tienestrys);
}

function intentar(a,b,c){
    if(parseFloat(a.value)==random){
        cambio(juego,finbueno)
        reseteo(pista);
    }
    else{
        trys--;
        tienes(tienestrys);
        if(trys==0){
            cambio(juego,finmalo);
            maloera(era);
        }
        else{
            if(parseFloat(a.value)<random){
                b.innerHTML="El número es más grande"
            }
            else{
                if(parseFloat(a.value)>random){
                    b.innerHTML="El número es más pequeño"
                }
                else{
                    
                    b.innerHTML="Error"
                }
            }
        }
    }
}

function cambio(a,b){
    a.style.display='none';
    b.style.display='flex';
}

function reseteo(a){
    trys=5;
    random=Math.floor(Math.random() * (101));
    tienes(tienestrys);
    a.innerHTML='';
}

function maloera(c){
    c.innerHTML=random;
}

function tienes(a){
    a.innerHTML="Te quedan <b style=color:red>"+trys+" intentos</b>";
}

document.getElementById('intento').addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        intentar(intento,pista);
        tienes(tienestrys);
    }
}, false);