<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));
$data = json_decode(file_get_contents("php://input"));
$uid = mysql_real_escape_string($data->uid);
$date = mysql_real_escape_string($data->date);
$amount = mysql_real_escape_string($data->amount);
$con = mysql_connect('localhost', 'root', '');
mysql_select_db('zion_tithes', $con);

if( $uid == "" || $amount == "" || $date == ""){
    $arr = array('error' => "Missing required info");
    $jsn = json_encode($arr);
    print_r($jsn);
    die();
}

$qry = 'INSERT INTO tithes (uid, date, amount) values ("' . $uid . '","' . $date . '","' . $amount . '")';
$qry_res = mysql_query($qry);
?>