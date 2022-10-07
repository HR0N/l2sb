import $ from "jquery";
import EnvClass from "../env";

class ContactClass{
    constructor() {
        this.env = new EnvClass();
    }
    create_message(name, text, email){
        if(name.length > 2 && text.length > 5){ // todo: - - - - - - - - - - - \n = %0A
            return `Имя: ${name} ${email.length > 5 ? "%0Aemail: "+email : ''} %0Atext: ${text}`;
        }else{return false;}
    }

    create_url(message){
        return `https://api.telegram.org/bot${this.env.bot_token()}/sendMessage?chat_id=${this.env.group_id()}&text=${message}&parse_mode=HTML`;}

    sendMessage(url, callback = ()=>{}){ /* используйте GET запрос в PHP*/
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            method: 'POST',
            url: url,
            cache: false,
            success: function (data) {
                callback(data);
            },
            error: function (data, textStatus, errorThrown) {
                console.log('ERROR_A-X');
            },
        });
    }
}


export default ContactClass;