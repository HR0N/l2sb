import React from "react";
import "./Contacts.scss";
import {connect} from 'react-redux';
import foto from "./../../img/l2sb_foto_contacts.jpg";
import InputClass from "../../sublimate/input";
import ContactClass from "../../sublimate/callback_us";

const input = new InputClass();
const tgBot = new ContactClass();

function Contacts() {
    const name = input.init("");
    const email = input.init("");
    const text = input.init("");

    const sendMessage = ()=>{
        let message = tgBot.create_message(name.val, text.val, email.val);
        console.log(name.val);
        console.log(text.val);
        console.log(message);
        let url     = tgBot.create_url(message);
        if(message) tgBot.sendMessage(url);
    };


    return(<div className={`Contacts`}>
        <div className="contacts_greyline"></div>
        <div className="wrapper">
            <div className="col col-1">
                <h2>CONTACT</h2>
                <label>Name
                    <input className={`form-control`} name={`name`} placeholder={``} type="text"
                    onChange={(e)=>{name.onChange(e)}} value={name.val}
                    /></label>
                <label>Email
                    <input className={`form-control`} name={`email`} placeholder={`не обязательно`} type="email"
                       onChange={(e)=>{email.onChange(e)}} value={email.val}
                    /></label>
                <label>Message
                    <textarea className={`form-control`} name={`text`}
                       onChange={(e)=>{text.onChange(e)}} value={text.val}
                    ></textarea></label>
                {/*<label className={`terms`}><input type="checkbox"/> I accept the <a href="#">Terms of Service</a></label>*/}
                <div className="button"
                onClick={()=>{sendMessage();}}
                >Submit</div>
            </div>
            <div className="col col-3">
                <img src={foto} alt="contacts foto"/>
            </div>
        </div>
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