<?php
  try{
    $conexion = new PDO("mysql:host=localhost;port=3306;dbname=diseno", "root", "");
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

    $res = $conexion->query('SELECT * FROM datos ORDER BY ID DESC LIMIT 1') or die(print($conexion->errorInfo()));

    $data = [];

    while($item = $res->fetch(PDO::FETCH_OBJ)) {

        $data[] = [
            'ID' => $item->ID,
            'LATITUD' => $item->LATITUD,
            'LONGITUD' => $item->LONGITUD,
            'FECHA' => $item->FECHA,
            'HORA' => $item->HORA,
        ];

    }
    echo json_encode($data);
} catch(PDOException $error) {

    echo $error->getMessage();
    die();

}
?>

