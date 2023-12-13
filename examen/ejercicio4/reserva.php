<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>
<body>
    <h1>Habitaciones PHP</h1>
    <form action="" method="POST">
        <p>Nombre</p>
        <input type="text" name="nombre">
        <p>Apellido</p>
        <input type="text" name="apellido">
        <p>Email</p>
        <input type="email" name="email">
        <p>DNI</p>
        <input type="text" name="dni">
        <p>Día de entrada</p>
        <input type="date" name="entrada" id="entrada">
        <p>Número de noches</p>
        <input type="number" name="numeroDias" id="numeroDias" min=1 >
        <p>Tipo de habitación</p>
        <select name="habitacion" id="tipo">
            <option value="0" id="option0">Simple (30€)</option>
            <option value="1" id="option1">Doble (50€)</option>
            <option value="2" id="option2">Triple (80€)</option>
            <option value="3" id="option3">Suite (100€)</option>
        </select>
        <br><br>
        <input type="submit" value="Reservar">
        <p id="errores"></p>
    </form>

    <?php
     if ($_SERVER["REQUEST_METHOD"] == "POST"){
        $tipo_habitacion=["Simple (30€)","Doble (50€)","Triple (80€)","Suite (100€)"];
        $precio_habitacion=[30,50,80,100];
        $nombre=$_POST["nombre"];
        $apellido=$_POST["apellido"];
        $email=$_POST["email"];
        $dni=$_POST["dni"];
        $entrada=$_POST["entrada"];
        $numeroDias=$_POST["numeroDias"];
        $habitacion = $_POST["habitacion"];
        $precio_total=($numeroDias*$precio_habitacion[$habitacion]);
        if($nombre!='' && $apellido!='' && $email!='' && $dni!='' && $entrada!='' && $numeroDias!=''){
            if(is_valid_dni($dni)==true){
                echo "<div><h3>Felicidades $nombre $apellido!</h3><p>Tu reserva se ha completado correctamente.</p><h4>Informarción:</h4></p>";
                echo "<p><b>Nombre:</b> $nombre</p>";
                echo "<p><b>Apellido:</b> $apellido</p>";
                echo "<p><b>Email:</b> $email</p>";
                echo "<p><b>DNI:</b> $dni</p>";
                echo "<p><b>Fecha de entrada:</b> $entrada</p>";
                echo "<p><b>Número de días:</b> $numeroDias</p>";
                echo "<p><b>Habitación:</b> $tipo_habitacion[$habitacion]</p>";
                echo "<p><b>Precio total:</b> $precio_total €</p>";
                echo "<img style='width: 250px;' src='habitaciones/hab$habitacion.png'>";
                echo "</div>";
            }
            else{
                echo "<p><strong>ERROR.</strong> DNI inválido.</p>";
            }
        }
        else{
            
            echo "<p><strong>ERROR.</strong> Rellene todos los campos, por favor.</p>";
        }
     }


     function is_valid_dni($dni){
        $letter = substr($dni, -1);
        $numbers = substr($dni, 0, -1);

        if (substr("TRWAGMYFPDXBNJZSQVHLCKE", $numbers%23, 1) == $letter && strlen($letter) == 1 && strlen ($numbers) == 8 ){
            return true;
        }
        return false;
        }
?>
</body>
</html>