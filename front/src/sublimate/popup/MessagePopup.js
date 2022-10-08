import React, {useEffect, useState} from "react";
import "./MessagePopup.scss";
import {connect} from 'react-redux';
import Body_toggle from "./body";
import $ from "jquery";

const body = new Body_toggle();


function MessagePopup(props) {
    // toggle body scroll by toggle popup
    if(props.status){body.hidden();}
    else{body.visible()}


    if(props.timeout){setTimeout(()=>{props.SetModal(false);}, props.timeout)}

    return(<div className={`MessagePopup muRef1 ${props.status ? '' : 'hidden'}`}>
        <div onClick={(e)=>{props.SetModal(false)}} className="wrapper">
            <div className="content" onClick={(e)=>{e.stopPropagation()}}>{props.message}</div>
        </div></div>);
}


function mapStateToProps(state){
    return {
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(MessagePopup);