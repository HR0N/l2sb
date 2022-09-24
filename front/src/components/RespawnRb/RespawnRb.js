import React from "react";
import "./RespawnRb.scss";
import {connect} from 'react-redux';
import Card from "./card/card";
import ApiClient from "../../services/api";

const ax = new ApiClient();

function RespawnRb() {
    ax.get_rss_x5();
    return(<div className={`RespawnRb`}
    >
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