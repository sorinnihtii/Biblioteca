<?php
include 'db.php';

$id = $_POST['id'];

$stmt = mysqli_prepare($conn, "DELETE FROM cititori WHERE id=?");

if (!$stmt) {
    die(json_encode(["success" => false, "error" => mysqli_error($conn)]));
}

mysqli_stmt_bind_param($stmt, "i", $id);

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
