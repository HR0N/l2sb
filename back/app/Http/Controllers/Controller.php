<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use function Symfony\Component\HttpFoundation\Session\Storage\Handler\open;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function contact() {
//        return "THI IS IT. THIS IS TEST FOR SMTP. THIS IS ANOTHER STEP FOR MY WAY BITCH.";

        if($this->isOnline()){
            $mail_data = [
                'recipient'=>'vivante.des@gmail.com',
                'fromEmail'=>'vivante.des@gmail.com',
                'fromName'=>'name',
                'subject'=>'subject',
                'body'=>'message',
            ];

            \Mail::send('email-template', $mail_data, function($message) use ($mail_data){
                $message->to($mail_data['recipient'])
                        ->from($mail_data['fromEmail'], $mail_data['fromName'])
                        ->subject($mail_data['subject']);
            });

        }else{
            return "NO CONNECTION BITCH";
        }
    }

    public function isOnline($site = "https://youtube.com/"){
        if(@fopen($site, 'r')){
            return true;
        }else{return false;}
    }
}
