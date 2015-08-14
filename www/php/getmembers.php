<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
require("dbaseinfo.php");

$conn = new mysqli($server, $susername, $spassword, $database);

$result = $conn->query("SELECT * FROM members");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"id":"'       . $rs["id"]          . '",';
    $outp .= '"fname":"'     . $rs["firstname"]   . '",';
    $outp .= '"lname":"'     . $rs["lastname"]    . '",';
    $outp .= '"name":"'     . $rs["lastname"].", ". $rs["firstname"]   . '",';
    $outp .= '"phone":"'     . $rs["phonenumber"] . '",'; 
    $outp .= '"address":"'   . $rs["address"]     . '"}'; 
}
$outp ='{"members":['.$outp.']}';
$conn->close();

echo($outp);
?>