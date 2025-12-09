<?php
include 'db.php';

$id = $_POST['id'];
$nume = $_POST['nume'];
$prenume = $_POST['prenume'];
$adresa = $_POST['adresa'];
$telefon = $_POST['telefon'];
$id_carte = $_POST['id_carte'];
$data_imprumut = $_POST['data_imprumut'];
$data_return = $_POST['data_return'];

if (empty($data_return)) {
    $data_return = null;
}

$sql = "UPDATE cititori SET
            nume = ?,
            prenume = ?,
            adresa = ?,
            telefon = ?,
            id_carte = ?,
            data_imprumut = ?,
            data_return = ?
        WHERE id = ?";

$stmt = mysqli_prepare($conn, $sql);

if (!$stmt) {
    die(json_encode(["success" => false, "error" => mysqli_error($conn)]));
}

mysqli_stmt_bind_param(
    $stmt,
    "ssssissi",
    $nume,
    $prenume,
    $adresa,
    $telefon,
    $id_carte,
    $data_imprumut,
    $data_return,
    $id
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
