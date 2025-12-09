<?php
    include 'db.php';

    $allowed_tables = ['carti', 'cititori'];
    $table = $_GET['tabel'];

    if (!in_array($table, $allowed_tables)) {
        die(json_encode(["success" => false, "error" => "Tabel invalid"]));
    }

    $sql = "SELECT * FROM `$table`";
    $result = mysqli_query($conn, $sql);

    $data = [];
    while ($row = mysqli_fetch_assoc($result)) {
        $data[] = $row;
    }
    
    echo json_encode($data);

    mysqli_close($conn);
?>