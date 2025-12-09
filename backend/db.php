<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$host = "localhost";
$user = "root";
$pw = "";
$db = "biblioteca";

$conn = new mysqli($host, $user, $pw, $db);

$conn = mysqli_connect($host, $user, $pw, $db);

if (mysqli_connect_errno()) {
    die(json_encode([
        "success" => false,
        "error" => mysqli_connect_error()
    ]));
}
?>
