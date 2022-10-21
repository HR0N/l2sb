<?php
// todo:                                                       . . : : C O R S : : . .
header('Content-type: text/html; charset=utf-8');
//header('Access-Control-Allow-Credentials: false');
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

$ch1 = curl_init("http://ip-api.com/php/".$_SERVER['REMOTE_ADDR']); // IP API - https://ip-api.com/docs/api:serialized_php
curl_setopt($ch1, CURLOPT_HEADER, false);
curl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch1, CURLOPT_POST, 1);
curl_setopt($ch1, CURLOPT_SSL_VERIFYPEER, false);
$ipapi = curl_exec($ch1);
$ipapi = json_encode(unserialize($ipapi));
echo $ipapi;
