<?php
header('Access-Control-Allow-Origin');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$conn = mysqli_connect("localhost", "root", "mysql", "reactform");
$query = "insert into reactform (name, email)
values(
'" . $_POST['name'] . "',
'" . $_POST['email'] . "'
)";
$result = @mysqli_query($conn, $query);
if ($result) {
    echo json_encode(["sent" => 1,]);
    var_dump($result);
} else {
    echo json_encode(["sent" => 0,]);
    var_dump($result);
}