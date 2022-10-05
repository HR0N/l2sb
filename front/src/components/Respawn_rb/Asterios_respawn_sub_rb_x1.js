import React, {useEffect} from "react";
import "./Respawn_rb.scss";
import {connect, useSelector} from 'react-redux';
import Card from "./card/card";
import {load_rss_x1} from "../../redux/actions/rss";
import background from "../../img/background3.png"


function Asterios_respawn_sub_rb_x1(props) {
    const rss_x1 = useSelector(state => props.rss_x1);  //  subscribe to redux data

    useEffect(()=>{props.load_rss();}, []);
    useEffect(()=>{
        let interval = setInterval(()=>{props.load_rss();},5000);
        return ()=>{clearInterval(interval)};
    }, []);
    useEffect(()=>{}, [rss_x1]);
    const add_chest_targets_to_key_bosses_x1 = ()=>{
        rss_x1[1].Cabrio[2]   = ('/target Coffer of the Dead');
        rss_x1[1].Hallate[2]  = ('/target Hallate\'s chest');
        rss_x1[1].Hallate[3]  = ('ToI 3');
        rss_x1[1].Kernon[2]   = ('/target Chest of Kernon');
        rss_x1[1].Kernon[3]   = ('ToI 8');
        rss_x1[1].Golkonda[2] = ('/target Chest of Golkonda');
        rss_x1[1].Golkonda[3] = ('ToI 11');
        /*setTimeout(()=>{
            rss_x5[1].Hallate[0]  = ('2022-09-29 21:12:23');}, 3000)*/
    };
    // console.log(rss_x5);
    return(<div className={`RespawnRb`}
    >
        <div className="background_img"><img src={background} alt="background img"/></div>
        <h2 className={`component_title`}><span>Asterios x1</span></h2>
        {rss_x1 ? add_chest_targets_to_key_bosses_x1() : false}
        {rss_x1 ?
            <div className={`key_bosses_cards`}>
                <Card idx={0} data={rss_x1[1].Cabrio}/>
                <Card idx={1} data={rss_x1[1].Hallate}/>
                <Card idx={2} data={rss_x1[1].Kernon}/>
                <Card idx={3} data={rss_x1[1].Golkonda}/>
            </div>
            : false}
    </div>);
}


function mapStateToProps(state){
    return {
        rss_x1: state.rss.rss_x1,
    }
}
function mapDispatchProps(dispatch){
    return {
        load_rss: () =>{dispatch(load_rss_x1())},
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Asterios_respawn_sub_rb_x1);