<?php
include('vendor/autoload.php');
use Telegram\Bot\Api;
include_once('tg-bot.php');
include_once('env.php');
include_once('db.php');
use env\Env as env;
use mydb\myDB;

$env = new env();
$dbase3 = new myDB(env::class);
$tgBot3 = new TGBot(env::class);

header('Content-type: text/html; charset=utf-8');
require_once __DIR__.'/libs/phpQuery-0.9.5.386-onefile/phpQuery-onefile.php';

$url = "https://a.co/d/1V5xr3g";

echo $url;

/*for($i=0;$i<5;$i++){
    $tgBot3->sendMessage("-718032249",$i);
    sleep(1);
}*/










//$tgBot3->sendMessage("-894503163","message\ntest");
//$telegram->sendMessage(['chat_id' => '-718032249', 'text' => $reply]);
