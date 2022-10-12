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

/* description => parsing page
   return      => phpQuery document "$doc" */
function parse_order($url){
    $file = file_get_contents($url);
    echo $file;
    return phpQuery::newDocument($file);
}

$data = $dbase3->get_rss_x1()[0][1];


$data = str_replace("`", '"', $data);
function compare_Cabrio($old, $new){
    global $tgBot3;
    $old = json_decode($old)[1];
    $new = json_decode($new)[1];
    $east_date = explode(" ", $new->Cabrio[0]);
    $east_date2 = explode("-", $east_date[0]);
    $east_date = $east_date[1]." - ".$east_date2[2].".".$east_date2[1].".".$east_date2[0];


    $url = "https://qna.habr.com/q/747637";
    $inline[] = ['text'=>'More detailed information', 'url'=>$url];
    $inline = array_chunk($inline, 2);
    $reply_markup = ['inline_keyboard'=>$inline];
    $inline_keyboard = json_encode($reply_markup);


    if(strcmp($old->Cabrio[0], $new->Cabrio[0]) == 0){
        $tgBot3->sendMessage_mark("-883568838","*\nShilen's Messenger Cabrio\nKilled: ".$east_date, $inline_keyboard);
    };
}

compare_Cabrio($data, $data);


//$tgBot3->sendMessage("-894503163","message\ntest");






//$telegram->sendMessage(['chat_id' => '-718032249', 'text' => $reply]);
