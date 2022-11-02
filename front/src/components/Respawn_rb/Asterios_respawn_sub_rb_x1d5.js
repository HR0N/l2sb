import React, {useEffect, useState} from "react";
import "./Respawn_rb.scss";
import {connect, useSelector} from 'react-redux';
import Card from "./card/card";
import {load_rss_x1d5} from "../../redux/actions/rss";
import background from "../../img/background3.webp"
import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import i18next from "../../i18next";
import LocalStorage from "../../sublimate/localStorage";
const ls = new LocalStorage();


function Asterios_respawn_sub_rb_x1d5(props) {
    const rss_x1d5 = useSelector(state => props.rss_x1d5);  //  subscribe to redux data
    const link = "https://t.me/+ybkn6yQ8n6w4MDFi";

    const [gmt, setGmt] = useState(ls.get('gmt') !== null ? ls.get('gmt') : 3);
    const [showGmt, setShowGmt] = useState(false);

    useEffect(()=>{props.load_rss();}, []);
    useEffect(()=>{
        let interval = setInterval(()=>{props.load_rss();},5000);
        return ()=>{clearInterval(interval)};
    }, []);
    useEffect(()=>{}, [rss_x1d5]);
    const add_chest_targets_to_key_bosses_x1d5 = ()=>{
        rss_x1d5[1].Cabrio[2]   = ('/target Coffer of the Dead');
        rss_x1d5[1].Hallate[2]  = ('/target Hallate\'s chest');
        rss_x1d5[1].Hallate[3]  = ('ToI 3');
        rss_x1d5[1].Kernon[2]   = ('/target Chest of Kernon');
        rss_x1d5[1].Kernon[3]   = ('ToI 8');
        rss_x1d5[1].Golkonda[2] = ('/target Chest of Golkonda');
        rss_x1d5[1].Golkonda[3] = ('ToI 11');
        /*setTimeout(()=>{
            rss_x5[1].Hallate[0]  = ('2022-09-29 21:12:23');}, 3000)*/
    };
    // console.log(rss_x5);
    const change_gmt = (new_gmt)=>{
        setGmt(new_gmt);
        ls.set("gmt", new_gmt);
        setShowGmt(!showGmt);
    };
    return(<div className={`RespawnRb`}
    >
        <Helmet>
            <title>Респ саб РБ Астериос x1.5</title>
            <meta name="description" content="Расчёт времени респауна сабкласс рейд боссов на серверах Asterios. RSS оповещения об убийстве РБ в Telegram." />
            <link /*rel="canonical"*/ href="https://www.l2lb.monster/respawn/asterios/subclass-rb_x1.5" />
        </Helmet>
        <div className="background_img"><img src={background} alt="background img"/></div>
        <div className="extra_nav">
            <NavLink to={"/respawn/asterios/subclass-rb_x1"}  exact="true" end>x1</NavLink>
            <NavLink to={"/respawn/asterios/subclass-rb_x1.5"}  exact="true" end>x1.5</NavLink>
            <NavLink to={"/respawn/asterios/subclass-rb_x5"}  exact="true" end>x5</NavLink>
            <div className="subclass_quest_link">
                <NavLink to={"/quests/subclass"}>{i18next.t('rss.subclass_quest_link')}</NavLink>
                <NavLink to={"/other/extra/subskills"}>Sub skills</NavLink>
            </div>
        </div>
        <h2 className={`component_title`}><span>Asterios</span></h2>
        {rss_x1d5 ? add_chest_targets_to_key_bosses_x1d5() : false}
        <div className={`gmt-wrapper ${showGmt ? "gmt-active":""}`}>
            <div className="modal-backdrop" onClick={()=>{setShowGmt(!showGmt)}}> </div>
            <div className="title" onClick={()=>{setShowGmt(!showGmt)}}>GMT {gmt>0?"+":""}{gmt !== 0?gmt:""}</div>
            <div className="list">
                <ul>
                    <li onClick={()=>{change_gmt(-1)}}>GMT-1</li>
                    <li onClick={()=>{change_gmt(-2)}}>GMT-2</li>
                    <li onClick={()=>{change_gmt(-3)}}>GMT-3</li>
                    <li onClick={()=>{change_gmt(-4)}}>GMT-4</li>
                    <li onClick={()=>{change_gmt(-5)}}>GMT-5</li>
                    <li onClick={()=>{change_gmt(-6)}}>GMT-6</li>
                    <li onClick={()=>{change_gmt(-7)}}>GMT-7</li>
                    <li onClick={()=>{change_gmt(-8)}}>GMT-8</li>
                    <li onClick={()=>{change_gmt(-9)}}>GMT-9</li>
                    <li onClick={()=>{change_gmt(-10)}}>GMT-10</li>
                    <li onClick={()=>{change_gmt(-11)}}>GMT-11</li>
                    <li onClick={()=>{change_gmt(-12)}}>GMT-12</li>
                </ul>
                <ul><li onClick={()=>{change_gmt(0)}}>GMT</li></ul>
                <ul>
                    <li onClick={()=>{change_gmt(1)}}>GMT+1</li>
                    <li onClick={()=>{change_gmt(2)}}>GMT+2</li>
                    <li onClick={()=>{change_gmt(3)}}>GMT+3</li>
                    <li onClick={()=>{change_gmt(4)}}>GMT+4</li>
                    <li onClick={()=>{change_gmt(5)}}>GMT+5</li>
                    <li onClick={()=>{change_gmt(6)}}>GMT+6</li>
                    <li onClick={()=>{change_gmt(7)}}>GMT+7</li>
                    <li onClick={()=>{change_gmt(8)}}>GMT+8</li>
                    <li onClick={()=>{change_gmt(9)}}>GMT+9</li>
                    <li onClick={()=>{change_gmt(10)}}>GMT+10</li>
                    <li onClick={()=>{change_gmt(11)}}>GMT+11</li>
                    <li onClick={()=>{change_gmt(12)}}>GMT+12</li>
                </ul>
            </div>
        </div>
        {rss_x1d5 ?
            <div className={`key_bosses_cards`}>
                <Card idx={0} data={rss_x1d5[1].Cabrio} link={link} gmt={gmt}/>
                <Card idx={1} data={rss_x1d5[1].Hallate} link={link} gmt={gmt}/>
                <Card idx={2} data={rss_x1d5[1].Kernon} link={link} gmt={gmt}/>
                <Card idx={3} data={rss_x1d5[1].Golkonda} link={link} gmt={gmt}/>
            </div>
            : false}
    </div>);
}


function mapStateToProps(state){
    return {
        rss_x1d5: state.rss.rss_x1d5,
    }
}
function mapDispatchProps(dispatch){
    return {
        load_rss: () =>{dispatch(load_rss_x1d5())},
    }
}
export default connect(mapStateToProps, mapDispatchProps)(Asterios_respawn_sub_rb_x1d5);