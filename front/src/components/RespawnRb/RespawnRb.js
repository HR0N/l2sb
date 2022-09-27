import React, {useEffect} from "react";
import "./RespawnRb.scss";
import {connect, useSelector} from 'react-redux';
import Card from "./card/card";
import {load_rss_x5} from "../../redux/actions/rss";


function RespawnRb(props) {
    const rss_x5 = useSelector(state => props.rss_x5);  //  subscribe to redux data
    useEffect(()=>{props.load_rss();}, []);
    useEffect(()=>{}, [rss_x5]);
    return(<div className={`RespawnRb`}
    >
        {rss_x5 ?
            <Card data ={rss_x5[1].Cabrio}/>
            : false}
    </div>);
}


function mapStateToProps(state){
    return {
        rss_x5: state.rss.rss_x5,
    }
}
function mapDispatchProps(dispatch){
    return {
        load_rss: () =>{dispatch(load_rss_x5())},
    }
}
export default connect(mapStateToProps, mapDispatchProps)(RespawnRb);