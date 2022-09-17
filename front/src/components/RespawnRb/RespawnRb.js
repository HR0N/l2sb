import React from "react";
import "./RespawnRb.scss";
import {connect} from 'react-redux';
import Card from "./card/card";


function RespawnRb() {
    return(<div className={`RespawnRb`}>
        <Card/>
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
export default connect(mapStateToProps, mapDispatchProps)(RespawnRb);