function pasar(a,b){
    a.style.display="none";
    b.style.display="flex";
}

function comprueba(a,b,c){
    if(a.value==""||b.value==""||c.value==""){
        
    }
}

function validar1(aa,ab,ba,bb,ca,cb){
    if (aa.value==""){
        ab.style.display="block";
        ab.innerHTML="Este campo es obligatorio";
    }
    else{
        ab.style.display="none";
        if (ba.value==""){
            bb.style.display="block";
            bb.innerHTML="Este campo es obligatorio";
        }
        else{
            bb.style.display="none";
            if (ca.value==""){
                cb.style.display="block";
                cb.innerHTML="Este campo es obligatorio";
            }
            else{
                var w= validateEmail(ca);
                if(w==true){
                    cb.style.display="none";
                    pasar(caja1,caja2);
                }
                else{
                    cb.style.display="block";
                    cb.innerHTML="Introduzca un correo válido";
                }
            }
        }
    }
}


function validateEmail(a){
	
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{1,10})+$/;

	if( validEmail.test(a.value) ){
		return true;
	}else{
		return false;
	}
} 

function validar2(aa,ab,ba,bb,ca,cb){
    if (aa.value==""){
        ab.style.display="block";
        ab.innerHTML="Este campo es obligatorio";
    }
    else{
        ab.style.display="none";
        if (ba.value==""){
            bb.style.display="block";
            bb.innerHTML="Este campo es obligatorio";
        }
        else{
            bb.style.display="none";
            if (ca.value==""){
                cb.style.display="block";
                cb.innerHTML="Este campo es obligatorio";
            }
            else{
                if(ba.value!=ca.value){
                    cb.style.display="block";
                    cb.innerHTML="No coincide con el PIN";
                }
                else{
                    cb.style.display="none";
                    pasar(caja3,caja4);
                    usuario(i_nombre,i_apellido,i_telefono,p_usuario);
                }
            }
        }
    }
}

function usuario(a,b,c){
    var nombre=Array.from(a.value);
    var apellido=Array.from(b.value);
    var telefono=Array.from(c.value);
    p_usuario.innerHTML="Tu usuario es: <b>"+nombre[0]+nombre[1]+apellido[0]+apellido[1]+telefono[telefono.length-1]+telefono[telefono.length-2]+telefono[telefono.length-3]+"</b>";
}