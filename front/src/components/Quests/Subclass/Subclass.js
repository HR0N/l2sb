import React from "react";
import "./Subclass.scss";
import {connect} from 'react-redux';


function Subclass() {
    return(<div className={`Subclass`}>
        <h2 className="title">Fate's Whisper (Шепот Судьбы)</h2>
        <div className="terms">
            <div className="lvl">Уровень: <span>75+</span></div>
            <div className="lvl">Требования: <span>нет</span></div>
        </div>
    </div>);
}


function mapStateToProps(state){
    return {
    }
}
function mapDispatchProps(dispatch){
    return {
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Subclass);