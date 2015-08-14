<?php
error_reporting(E_ALL ^ (E_NOTICE | E_WARNING | E_DEPRECATED));
$data = json_decode(file_get_contents("php://input"));
$fname = mysql_real_escape_string($data->fname);
$lname = mysql_real_escape_string($data->lname);
$phone = mysql_real_escape_string($data->phone);
$address = mysql_real_escape_string($data->address);
$con = mysql_connect('localhost', 'root', '');
mysql_select_db('zion_tithes', $con);

if( $fname == "" || $lname == "" ){
    $arr = array('error' => "Missing required info");
    $jsn = json_encode($arr);
    print_r($jsn);
    die();
}

$qry = 'INSERT INTO members (firstname, lastname, phonenumber, address) values ("' . $fname . '","' . $lname . '","' . $phone . '","' . $address . '")';
print_r($qry);
$qry_res = mysql_query($qry);
?>