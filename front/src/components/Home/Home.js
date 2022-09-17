import React from "react";
import "./Home.scss";
import {connect} from 'react-redux';


function Home() {
    return(<div className={`Home`}>
        <h2>Home</h2>
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
export default connect(mapStateToProps, mapDispatchProps)(Home);