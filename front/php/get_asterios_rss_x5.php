<?php
// todo:                                                       . . : : C O R S : : . .
header('Content-type: text/html; charset=utf-8');
//header('Access-Control-Allow-Credentials: false');
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

include_once('db.php');
include_once('env.php');
use env\Env;

$db = new \mydb\myDB(Env::class);
$res = [...$db->get_all_x5()[0]];

echo str_replace("`", '"', $res[1]);
