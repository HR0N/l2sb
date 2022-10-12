<?php

include_once('env.php');
include_once('db.php');
include_once('tg-bot.php');
include_once('vendor/autoload.php');
use Telegram\Bot\Api;
use mydb\myDB;
use env\Env;

$tgBot = new TGBot(env::class);
$dbase = new myDB(env::class);
date_default_timezone_set('Europe/Kiev');
header('Content-type: text/html; charset=utf-8');
require_once __DIR__.'/libs/phpQuery-0.9.5.386-onefile/phpQuery-onefile.php';


/* description => parsing page
   return      => phpQuery document "$doc" */
function parse_order($url){
    $file = file_get_contents($url);
    return phpQuery::newDocument($file);
}
$epicBoss = ["Valakas"=>[], "Antharas"=>[], "Baium"=>[], "Queen Ant"=>[], "Beleth"=>[], "Orfen"=>[], "Core"=>[]];
$keyBoss  = ["Cabrio"=>[], "Hallate"=>[], "Kernon"=>[], "Golkonda"=>[], "Barakiel"=>[], "Commander Mos"=>[],
            "Hekaton"=>[], "Horus"=>[], "Shadith"=>[], "Tayr"=>[], "Brakki"=>[]];
$siege    = ["Giran"=>[], "Aden"=>[], "Dion"=>[], "Gludio"=>[], "Oren"=>[], "Goddard"=>[], "Schuttgart"=>[], "Rune"=>[],
            "Innadril"=>[]];


/* description => fetch parsed document to array (key bosses) x5
   return      => array  */
function fetch_key_bosses($doc){
    global $tgBot, $keyBoss;
    $i = 0;

    $content = $doc->find("#page_contents table a");

    foreach ($content as $item){
        $i++;
        if($i <= 50){
        foreach ($keyBoss as $key => $value){
            if(strpos($item->textContent, $key) && strlen($keyBoss[$key][0]) < 1){
                $exp = explode(": Убит босс ", $item->textContent);
                $keyBoss[$key] = [...$exp];
            }
        }
        }
    }
    return $keyBoss;
}


/* description => fetch parsed document to array (epic bosses) x5
   return      => array  */
function fetch_epic_bosses($doc){
    global $tgBot, $epicBoss;
    $i = 0;

    $content = $doc->find("#page_contents table a");

    foreach ($content as $item){
        $i++;
        if($i <= 50){
            foreach ($epicBoss as $key => $value){
                if(strpos($item->textContent, $key) && strlen($epicBoss[$key][0]) < 1){
                    $exp = explode(": Убит босс ", $item->textContent);
                    $epicBoss[$key] = [...$exp];
                }
            }
        }
    }
    return $epicBoss;
}


/* description => fetch parsed document to array (sieges) x5
   return      => array  */
function fetch_sieges($doc){
    global $tgBot, $siege;
    $i = 0;

    $content = $doc->find("#page_contents table a");

    foreach ($content as $item){
        $i++;
        if($i <= 50){
            if(strpos($item->textContent, "Начата осада")){
                foreach ($siege as $key => $value){
                    if(strpos($item->textContent, $key)){
                        $exp = explode(": Начата осада замка ", $item->textContent);
                        $siege[$key][0] = $exp[0];
                    }
                }
            }
            if(strpos($item->textContent, "Захвачен контроль")){
                foreach ($siege as $key => $value){
                    if(strpos($item->textContent, $key)){
                        $exp = explode(": Захвачен контроль над замком ", $item->textContent);
                        $siege[$key][1] = $exp[0];
                    }
                }
            }
            if(strpos($item->textContent, "Закончилась осада")){
                foreach ($siege as $key => $value){
                    if(strpos($item->textContent, $key)){
                        $exp = explode(": Закончилась осада замка ", $item->textContent);
                        $siege[$key][2] = $exp[0];
                    }
                }
            }
        }
    }
    return $siege;
}

/* description => march parsed data from x5 serve (epic bosses, key bosses, sieges)
   return      => JSON string */
function get_data($id){
    $url_epic_bosses = "https://asterios.tm/index.php?cmd=rss&serv=".$id."&filter=epic";
    $url_key_bosses  = "https://asterios.tm/index.php?cmd=rss&serv=".$id."&filter=keyboss";
    $url_siege       = "https://asterios.tm/index.php?cmd=rss&serv=".$id."&filter=siege";

    $doc_epic_bosses = parse_order($url_epic_bosses);
    $doc_key_bosses = parse_order($url_key_bosses);
    $doc_siege = parse_order($url_siege);

    $data = [
        fetch_epic_bosses($doc_epic_bosses),
        fetch_key_bosses($doc_key_bosses),
        fetch_sieges($doc_siege)];

    return $data;
}


/* description => check total mount seconds of each 5 minutes
   return      => total seconds */
function total_sec_in_each_five_min(){
    $min = intval(mb_substr(date('i'), 1));
    if($min >= 5){$min-=5;}
    $sec = intval(date('s'));
    return $min * 60 + $sec;
}


/* description => start parsing rss x1 */
function complex_start_x1(){
    global $tgBot, $dbase;
    $chat_id_x1 = Env::$CHAT_ID_X1;
    $servers_id = ["x1" => 3, "x1.5" => 7, "x5" => 0, "x55" => 2, "x3" => 6];
    $count = 0;
    while ($count < 3){
        sleep(15);
        $data = json_encode(get_data($servers_id["x1"]));
        $data = str_replace('"', "`", $data);

        $rates = "1";
        $new = $data;
        $old = $dbase->get_rss_x1()[0][1];
        compare_Cabrio($old, $new, $rates, $chat_id_x1);
        compare_Hallate($old, $new, $rates, $chat_id_x1);
        compare_Kernon($old, $new, $rates, $chat_id_x1);
        compare_Golkonda($old, $new, $rates, $chat_id_x1);


        $dbase->set_rss_x1($data);
        $count++;
    }
}


/* description => start parsing rss x1.5 */
function complex_start_x1d5(){
    global $tgBot, $dbase;
    $chat_id_x1d5 = Env::$CHAT_ID_X1d5;
    $servers_id = ["x1" => 3, "x1.5" => 7, "x5" => 0, "x55" => 2, "x3" => 6];
    $count = 0;
    while ($count < 3){
        sleep(15);
        $data = json_encode(get_data($servers_id["x1.5"]));
        $data = str_replace('"', "`", $data);

        $rates = "1.5";
        $new = $data;
        $old = $dbase->get_rss_x1d5()[0][1];
        compare_Cabrio($old, $new, $rates, $chat_id_x1d5);
        compare_Hallate($old, $new, $rates, $chat_id_x1d5);
        compare_Kernon($old, $new, $rates, $chat_id_x1d5);
        compare_Golkonda($old, $new, $rates, $chat_id_x1d5);


        $dbase->set_rss_x1d5($data);
        $count++;
    }
}


/* description => start parsing rss x5 */
function complex_start_x5(){
    global $tgBot, $dbase;
    $chat_id_x5 = Env::$CHAT_ID_X5;
    $servers_id = ["x1" => 3, "x1.5" => 7, "x5" => 0, "x55" => 2, "x3" => 6];
    $count = 0;
    while ($count < 3){
        sleep(15);
        $data = json_encode(get_data($servers_id["x5"]));
        $data = str_replace('"', "`", $data);

        $rates = "5";
        $new = $data;
        $old = $dbase->get_rss_x5()[0][1];
        compare_Cabrio($old, $new, $rates, $chat_id_x5);
        compare_Hallate($old, $new, $rates, $chat_id_x5);
        compare_Kernon($old, $new, $rates, $chat_id_x5);
        compare_Golkonda($old, $new, $rates, $chat_id_x5);


        $dbase->set_rss_x5($data);
        $count++;
    }
}



/* description => send message to tg group when refresh kill info Cabrio */
function compare_Cabrio($old, $new, $rates, $chat){
    global $tgBot;
    $old = str_replace("`", '"', $old);
    $new = str_replace("`", '"', $new);
    $old = json_decode($old)[1];
    $new = json_decode($new)[1];
    $east_date = explode(" ", $new->Cabrio[0]);
    $east_date2 = explode("-", $east_date[0]);
    $east_date = $east_date[1]." - ".$east_date2[2].".".$east_date2[1].".".$east_date2[0];


    $url = "https://l2sb.evilcode.space/respawn/asterios/subclass-rb_x".$rates;
    $inline[] = ['text'=>'More detailed information', 'url'=>$url];
    $inline = array_chunk($inline, 2);
    $reply_markup = ['inline_keyboard'=>$inline];
    $inline_keyboard = json_encode($reply_markup);


    if(strcmp($old->Cabrio[0], $new->Cabrio[0]) != 0){
        $tgBot->sendMessage_mark($chat,"*\nShilen's Messenger Cabrio\nKilled: ".$east_date."\n - \n"."/target Coffer of the Dead", $inline_keyboard);
    };
}

/* description => send message to tg group when refresh kill info Hallate */
function compare_Hallate($old, $new, $rates, $chat){
    global $tgBot;
    $old = str_replace("`", '"', $old);
    $new = str_replace("`", '"', $new);
    $old = json_decode($old)[1];
    $new = json_decode($new)[1];
    $east_date = explode(" ", $new->Hallate[0]);
    $east_date2 = explode("-", $east_date[0]);
    $east_date = $east_date[1]." - ".$east_date2[2].".".$east_date2[1].".".$east_date2[0];


    $url = "https://l2sb.evilcode.space/respawn/asterios/subclass-rb_x".$rates;
    $inline[] = ['text'=>'More detailed information', 'url'=>$url];
    $inline = array_chunk($inline, 2);
    $reply_markup = ['inline_keyboard'=>$inline];
    $inline_keyboard = json_encode($reply_markup);


    if(strcmp($old->Hallate[0], $new->Hallate[0]) != 0){
        $tgBot->sendMessage_mark($chat,"*\nDeath Lord Hallate\nKilled: ".$east_date."\n - \n"."/target Hallate's chest", $inline_keyboard);
    };
}

/* description => send message to tg group when refresh kill info Kernon */
function compare_Kernon($old, $new, $rates, $chat){
    global $tgBot;
    $old = str_replace("`", '"', $old);
    $new = str_replace("`", '"', $new);
    $old = json_decode($old)[1];
    $new = json_decode($new)[1];
    $east_date = explode(" ", $new->Kernon[0]);
    $east_date2 = explode("-", $east_date[0]);
    $east_date = $east_date[1]." - ".$east_date2[2].".".$east_date2[1].".".$east_date2[0];


    $url = "https://l2sb.evilcode.space/respawn/asterios/subclass-rb_x".$rates;
    $inline[] = ['text'=>'More detailed information', 'url'=>$url];
    $inline = array_chunk($inline, 2);
    $reply_markup = ['inline_keyboard'=>$inline];
    $inline_keyboard = json_encode($reply_markup);


    if(strcmp($old->Kernon[0], $new->Kernon[0]) != 0){
        $tgBot->sendMessage_mark($chat,"*\nKernon\nKilled: ".$east_date."\n - \n"."/target Chest of Kernon", $inline_keyboard);
    };
}

/* description => send message to tg group when refresh kill info Golkonda */
function compare_Golkonda($old, $new, $rates, $chat){
    global $tgBot;
    $old = str_replace("`", '"', $old);
    $new = str_replace("`", '"', $new);
    $old = json_decode($old)[1];
    $new = json_decode($new)[1];
    $east_date = explode(" ", $new->Golkonda[0]);
    $east_date2 = explode("-", $east_date[0]);
    $east_date = $east_date[1]." - ".$east_date2[2].".".$east_date2[1].".".$east_date2[0];


    $url = "https://l2sb.evilcode.space/respawn/asterios/subclass-rb_x".$rates;
    $inline[] = ['text'=>'More detailed information', 'url'=>$url];
    $inline = array_chunk($inline, 2);
    $reply_markup = ['inline_keyboard'=>$inline];
    $inline_keyboard = json_encode($reply_markup);


    if(strcmp($old->Golkonda[0], $new->Golkonda[0]) != 0){
        $tgBot->sendMessage_mark($chat,"*\nLonghorn Golkonda\nKilled: ".$east_date."\n - \n"."/target Chest of Golkonda", $inline_keyboard);
    };
}