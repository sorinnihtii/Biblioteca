<?php
include 'db.php';

$titlu = $_POST['titlu'];
$autor = $_POST['autor'];
$editura = $_POST['editura'];
$pret = $_POST['pret'];

$sql = "INSERT INTO carti (titlu, autor, editura, pret) VALUES (?, ?, ?, ?)";
$stmt = mysqli_prepare($conn, $sql);

if (!$stmt) {
    die(json_encode(["success" => false, "error" => mysqli_error($conn)]));
}

mysqli_stmt_bind_param($stmt, "sssi", $titlu, $autor, $editura, $pret);

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
