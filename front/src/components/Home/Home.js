import React from "react";
import "./Home.scss";
import {connect} from 'react-redux';
import {Helmet} from "react-helmet-async";


function Home() {

    return(<div className={`Home`}>
        <Helmet>
            <title>L2 Little Base</title>
            <meta name="description" content="Небольшая база знаний по игре Lineage 2. Хроники High Five." />
            <link /*rel="canonical"*/ href="https://www.l2lb.monster" />
        </Helmet>
        <h2>l2 little base</h2>
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