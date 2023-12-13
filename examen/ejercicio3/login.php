<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LOGIN</title>
</head>
<body>
<h1>LOG IN</h1>
<form action="" method="post">
<p>Usuario</p>
<input type="text" name="user">
<p>Contraseña</p>
<input type="password" name="password">
<br><br>
<button type="submit">Enviar</button>
</form>
<br>

<?php
     if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $usuario=htmlentities($_POST["user"]);
    $contrasena=htmlentities($_POST["password"]);
    include('config.php');
    if($usuario==acceso[0] && $contrasena==acceso[1]){
        echo "Acceso concedido $usuario";
    }
    else {
        echo "Acceso denegado";
    }
     }
?>
</body>
</html>