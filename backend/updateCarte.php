<?php
include 'db.php';

$id = $_POST['id'];
$titlu = $_POST['titlu'];
$autor = $_POST['autor'];
$editura = $_POST['editura'];
$pret = $_POST['pret'];

$sql = "UPDATE carti SET
            titlu = ?,
            autor = ?,
            editura = ?,
            pret = ?
        WHERE id = ?";

$stmt = mysqli_prepare($conn, $sql);

if (!$stmt) {
    die(json_encode(["success" => false, "error" => mysqli_error($conn)]));
}

mysqli_stmt_bind_param($stmt, "sssdi", $titlu, $autor, $editura, $pret, $id);

if (mysqli_stmt_execute($stmt)) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode([
            "success" => false,
            "error" => mysqli_stmt_error($stmt),
        ]);
}

mysqli_stmt_close($stmt);
mysqli_close($conn);
?>
