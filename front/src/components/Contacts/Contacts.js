import React from "react";
import "./Contacts.scss";
import {connect} from 'react-redux';
import foto from "./../../img/l2sb_foto_contacts.jpg";
import InputClass from "../../sublimate/input";
import ContactClass from "../../sublimate/callback_us";
import ValidatorClass from "../../sublimate/validator";
import BigPopup from "../../sublimate/popup/BigPopup";

const input = new InputClass();
const tgBot = new ContactClass();
const valid = new ValidatorClass();

function Contacts() {
    const name = input.init("");
    const email = input.init("");
    const text = input.init("");

    const sendMessage = ()=>{
        let message = tgBot.create_message(name.val, text.val, email.val);
        let url     = tgBot.create_url(message);
        if(message) tgBot.sendMessage(url);
    };

    const check_if_errors = ()=>{return valid.isLength(name.val, 4, 20) && valid.isLength(text.val, 10, 400);};


    return(<div className={`Contacts`}>
        <div className="contacts_greyline"></div>
        <div className="wrapper">
            <div className="col col-1">
                <h2>CONTACT</h2>
                <label>Name
                    {name.touched && valid.isEmpty(name.val) ? <span className={`error`}>Ввод имени обязателен.</span> : false}
                    {name.touched && !valid.isEmpty(name.val) && !valid.isLength(name.val, 4, 20) ? <span className={`error`}>Длинна 4-20 символов</span> : false}
                    <input className={`form-control`} name={`name`} placeholder={``} type="text"
                        onBlur={(e)=>{name.onBlur(e)}}
                        onChange={(e)=>{name.onChange(e)}} value={name.val}
                    /></label>
                <label>Email
                    <input className={`form-control`} name={`email`} placeholder={`для ответа`} type="email"
                       onChange={(e)=>{email.onChange(e)}} value={email.val}
                    /></label>
                <label>Message
                    {text.touched && valid.isEmpty(text.val) ? <span className={`error`}>Ввод сообщения обязателен.</span> : false}
                    {text.touched && !valid.isEmpty(text.val) && !valid.isLength(text.val, 10, 400) ? <span className={`error`}>Длинна 10-400 символов</span> : false}
                    <textarea className={`form-control`} name={`text`}
                        onBlur={(e)=>{text.onBlur(e)}}
                        onChange={(e)=>{text.onChange(e)}} value={text.val}
                    ></textarea></label>
                {/*<label className={`terms`}><input type="checkbox"/> I accept the <a href="#">Terms of Service</a></label>*/}
                <div className="button"
                onClick={()=>{  if(check_if_errors())   sendMessage();  }}
                >Submit</div>
            </div>
            <div className="col col-3">
                <img src={foto} alt="contacts foto"/>
            </div>
        </div>
        <BigPopup/>
    </div>);
}


function mapStateToProps(state){
    return {
        prop: state.app.prop,
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Contacts);