<?php
include 'db.php';

$nume = $_POST['nume'];
$prenume = $_POST['prenume'];
$adresa = $_POST['adresa'];
$telefon = $_POST['telefon'];
$id_carte = $_POST['idCarte'];
$data_imprumut = $_POST['dataImprumut'];
$data_return = $_POST['dataReturn'];

if (empty($data_return)) {
    $data_return = null;
}

$sql = "INSERT INTO 
        cititori (nume, prenume, adresa, telefon, id_carte, data_imprumut, data_return) 
        VALUES (?, ?, ?, ?, ?, ?, ?)";

$stmt = mysqli_prepare($conn, $sql);

if (!$stmt) {
    die(json_encode(["success" => false, "error" => mysqli_error($conn)]));
}

mysqli_stmt_bind_param(
    $stmt, 
    "ssssiss", 
    $nume, 
    $prenume, 
    $adresa, 
    $telefon, 
    $id_carte, 
    $data_imprumut, 
    $data_return
);

if (mysqli_stmt_execute($stmt)) {
    echo json_encode(["success" => true]);
} else {
    $error_code = mysqli_errno($conn);

    if ($error_code == 1452) {
        echo json_encode([
            "success" => false,
            "error" => "ID carte inexistent"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "error" => mysqli_stmt_error($stmt),
        ]);
    }
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
