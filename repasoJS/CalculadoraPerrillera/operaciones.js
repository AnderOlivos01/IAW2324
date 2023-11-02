function sumar () {
    var x = parseFloat(document.getElementById('valorA').value);
    var y = parseFloat(document.getElementById('valorB').value);
    if(isNaN(x)||isNaN(y)){
        document.getElementById('resultado').innerHTML="Introduzca valores númericos por favor";
    }
    else{
        var result = x+y;
        document.getElementById('resultado').innerHTML="La suma es <span>" + result + "</span>";
    }
}

function restar () {
    var x = parseFloat(document.getElementById('valorA').value);
    var y = parseFloat(document.getElementById('valorB').value);
    if(isNaN(x)||isNaN(y)){
        document.getElementById('resultado').innerHTML="Introduzca valores númericos por favor";
    }
    else{
    var result = x-y;
    document.getElementById('resultado').innerHTML="La resta es <span>" + result + "</span>";
    }
}

function multiplicar () {
    var x = parseFloat(document.getElementById('valorA').value);
    var y = parseFloat(document.getElementById('valorB').value);
    if(isNaN(x)||isNaN(y)){
        document.getElementById('resultado').innerHTML="Introduzca valores númericos por favor";
    }
    else{
    var result = x*y;
    document.getElementById('resultado').innerHTML="La multiplicación es <span>" + result + "</span>";
    }
}

function dividir () {
    var x = parseFloat(document.getElementById('valorA').value);
    var y = parseFloat(document.getElementById('valorB').value);
    if(isNaN(x)||isNaN(y)){
        document.getElementById('resultado').innerHTML="Introduzca valores númericos por favor";
    }
    else{
        if(y==0){
            document.getElementById('resultado').innerHTML="No se puede dividir entre 0";
        }
        else{
        var result = x/y;
        document.getElementById('resultado').innerHTML="La división <span>" + result + "</span>";
        }
    }
}
