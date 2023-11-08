var trys,random;
reseteo(pista);

function fempezar(a,b){
    a.style.display='none';
    b.style.display='block';
    tienes(tienestrys);
}

function intentar(a,b,c){
    if(a.value==random){
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
            if(a.value<random){
                b.innerHTML="El número es más grande"
            }
            else{
                b.innerHTML="El número es más pequeño"
            }
        }
    }
}

function cambio(a,b){
    a.style.display='none';
    b.style.display='block';
}

function reseteo(a){
    trys=5;
    random=Math.floor(Math.random() * (101));
    console.log(random);
    a.innerHTML='';
}

function maloera(c){
    c.innerHTML=random;
}

function tienes(a){
    a.innerHTML="Te quedan <b>"+trys+" intentos</b>";
}