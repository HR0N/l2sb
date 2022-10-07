import React from "react";
import "./MessagePopup.scss";
import {connect} from 'react-redux';


function MessagePopup() {
    return(<div className={`MessagePopup`}></div>);
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