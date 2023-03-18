<?php 
    header('Access-Control-Allow-Origin: *');
    $_DATA = json_decode(file_get_contents("php://input"), true);

    echo json_encode($_DATA,JSON_PRETTY_PRINT);
?>