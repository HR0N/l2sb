import React, {useEffect, useState} from "react";
import "./Attribute.scss";
import {connect} from 'react-redux';
import Armor from "./Armor/Armor";
import {Helmet} from "react-helmet-async";
import $ from "jquery";
import {useTranslation} from "react-i18next";
import i18next from '../../i18next';

import helmetImg from "./../../img/att/Helmet.png"
import breastplateImg from "./../../img/att/Breastplate.png"
import stockingImg from "./../../img/att/Stocking.png"
import glovesImg from "./../../img/att/Gloves.png"
import shoesImg from "./../../img/att/Shoes.png"

import fireStone from "./../../img/att/Fire-Stone.png";
import waterStone from "./../../img/att/Water-Stone.png";
import earthStone from "./../../img/att/Earth-Stone.png";
import windStone from "./../../img/att/Wind-Stone.png";
import holyStone from "./../../img/att/Holy-Stone.png";
import darkStone from "./../../img/att/Dark-Stone.png";

import fireCrystal from "./../../img/att/Fire-Crystal.png";
import waterCrystal from "./../../img/att/Water-Crystal.png";
import earthCrystal from "./../../img/att/Earth-Crystal.png";
import windCrystal from "./../../img/att/Wind-Crystal.png";
import holyCrystal from "./../../img/att/Holy-Crystal.png";
import darkCrystal from "./../../img/att/Dark-Crystal.png";

import chart from "./../../img/att/chart.png";

const att_literals = {
    fire:  "water",
    water: "fire",
    earth: "wind",
    wind:  "earth",
    holy:  "dark",
    dark:  "holy",
};

function Attribute() {
    const {i18n} = useTranslation();

    const [helmet, setHelmet]           = useState([["", 0],["", 0],["", 0]]);
    const [breastplate, setBreastplate] = useState([["", 0],["", 0],["", 0]]);
    const [stocking, setStocking]       = useState([["", 0],["", 0],["", 0]]);
    const [gloves, setGloves]           = useState([["", 0],["", 0],["", 0]]);
    const [shoes, setShoes]             = useState([["", 0],["", 0],["", 0]]);

    const [active, setActive]           = useState(null);
    const [banned, setBanned]           = useState([null, null, null]);
    const [total, setTotal]             = useState({fire:  0, water: 0, earth: 0, wind:  0, holy:  0, dark:  0});
    const [chance, setChance]           = useState(false);
    const [amount, setAmount]           = useState(6);
    const [enough, setEnough]           = useState(false);


    useEffect(()=>{ban_att(); get_total_att();}, [helmet, breastplate, stocking, gloves, shoes]);
    useEffect(()=>{ban_att();}, [active]);


    const check_value = (val1, val2)=>{if(val1 + val2 > 120){return 120}else if(val1 + val2 < 0){return 0}else return val1 + val2;};
    // const check_value = (val1, val2)=>{return val1 + val2 > 120 ? 120 : val1 + val2;};
    const check_banned = (att)=>{return !banned.includes(att);};
    const get_chance = (chance)=>{return chance > Math.round(Math.random()*100)};

    const get_active = (newActive)=>{   // return active armor object
        switch (newActive) {
            case "helmet":   return [helmet, setHelmet];      case "breastplate": return [breastplate, setBreastplate];
            case "stocking": return [stocking, setStocking];  case "gloves":      return [gloves, setGloves];
            case "shoes":    return [shoes, setShoes];        default: break;}};

    const addArmorAtt = (armor, setArmor, att)=>{
        if(!armor[0][0]){setArmor([[att, armor[0][1] + amount],armor[1],armor[2]])}
        else if(!armor[1][0]){setArmor([armor[0],[att, armor[1][1] + amount],armor[2]])}
        else if(!armor[2][0]){setArmor([armor[0],armor[1],[att, armor[2][1] + amount]])}

        if(armor[0][0] && armor[0][0] === att){setArmor([[att, check_value(armor[0][1], amount)],armor[1],armor[2]])}
        else if(armor[1][0] && armor[1][0] === att){setArmor([armor[0],[att, check_value(armor[1][1], amount)],armor[2]])}
        else if(armor[2][0] && armor[2][0] === att){setArmor([armor[0],armor[1],[att, check_value(armor[2][1], amount)]])}
    };

    const addArmorAtt_Handler = (att, stoneType)=>{
        let armor = get_active(active); // return active armor object
        if(chance){
            if(stoneType === 'stone' && get_chance(50)){
                if(check_att_amount(armor, att, stoneType)){if(armor && check_banned(att)) addArmorAtt(armor[0], armor[1], att)}
            }else if(stoneType === 'crystal' && get_chance(30)){
                if(check_att_amount(armor, att, stoneType)){if(armor && check_banned(att)) addArmorAtt(armor[0], armor[1], att)}
            }
        }else{if(check_att_amount(armor, att, stoneType)){if(armor && check_banned(att)) addArmorAtt(armor[0], armor[1], att)}}
    };

    const ban_att = ()=>{
        let armor = get_active(active); // return active armor object
        let banned2 = [null, null, null];
        if(armor){
            armor = armor[0];
            if(armor[0][0]){banned2 = [att_literals[armor[0][0]], banned2[1], banned2[2]]}
            if(armor[1][0]){banned2 = [banned2[0], att_literals[armor[1][0]], banned2[2]]}
            if(armor[2][0]){banned2 = [banned2[0], banned2[1], att_literals[armor[2][0]]]}
        }setBanned(banned2);};

    const check_att_amount = (armor, att, stoneType)=>{
        let result = null;
        let same_att = null;
            if(armor){armor[0].map((v, k)=>{
                if(v[0] === att && v[1] >= 60 && stoneType === 'stone'){result = false; same_att = true;}
                else if(v[0] === att && v[1] >= 60 && stoneType === 'crystal'){result = true; same_att = true;}
                else if(v[0] === att && v[1] <= 60 && (stoneType === 'stone' || stoneType === 'crystal')){result = true; same_att = true;}
                else if(v[0] === "" && v[1] === 0 && !same_att){result = true;}
            });}
            return result;};

    const get_total_att = ()=>{
        let totalIt = {fire:  0, water: 0, earth: 0, wind:  0, holy:  0, dark:  0};
        let keys = Object.keys(totalIt);
        parse_armor(helmet, totalIt, keys);
        parse_armor(breastplate, totalIt, keys);
        parse_armor(stocking, totalIt, keys);
        parse_armor(gloves, totalIt, keys);
        parse_armor(shoes, totalIt, keys);
        setTotal(totalIt);
    };
    const parse_armor = (armor, total, keys)=>{armor.map((v, k)=>{keys.map((v2, k2)=>{if(v[0] === v2){total[v2]+=v[1]}});}); return total;};


    const rotate_chart = (e)=>{
        const cardItem = e.currentTarget.querySelector('.img-wrapper');
        const halfHeight = 476 / 2;
        if(!enough){
            cardItem.style.transform = "rotateX("+ -(e.nativeEvent.offsetY - halfHeight) / 20+"deg) " +
                "rotateY("+ (e.nativeEvent.offsetX - 410) / 50+"deg)";
        }else{
            cardItem.style.transform = "rotateX(0deg) rotateY(0deg)";
        }
    };

    return(<div className={`Attribute`}>
        <Helmet>
            <title>l2 ?????????????? ??????, ?????? ?????????????????? ?????? ?? ??????????</title>
            <meta name="description" content="?????? ?????????????????? ?????????????? ?? ??????????, ?? ???????? Lineage 2. ?????????????? High Five. ?????????????????????? ?????????????? ??????." />
            <link /*rel="canonical"*/ href="https://www.l2lb.monster/other/extra/attribute" />
        </Helmet>
        <h2 onClick={()=>{setActive(null); setBanned([null, null, null]);}}>Attribute</h2>
        <div className="wrapper">
            <div className="Armor-wrapper">
                <div className={`armor-item helmet ${active === "helmet" ? 'active-armor':''}`}
                     onClick={()=>{setActive("helmet"); setBanned([null, null, null]);}}>
                    <img src={helmetImg} alt="img"/>
                    <Armor data={helmet} setData={setHelmet}/>
                </div>
                <div className={`armor-item breastplate ${active === "breastplate" ? 'active-armor':''}`}
                     onClick={()=>{setActive("breastplate"); setBanned([null, null, null]);}}>
                    <img src={breastplateImg} alt="img"/>
                    <Armor data={breastplate} setData={setBreastplate}/>
                </div>
                <div className={`armor-item stocking ${active === "stocking" ? 'active-armor':''}`}
                     onClick={()=>{setActive("stocking"); setBanned([null, null, null]);}}>
                    <img src={stockingImg} alt="img"/>
                    <Armor data={stocking} setData={setStocking}/>
                </div>
                <div className={`armor-item gloves ${active === "gloves" ? 'active-armor':''}`}
                     onClick={()=>{setActive("gloves"); setBanned([null, null, null]);}}>
                    <img src={glovesImg} alt="img"/>
                    <Armor data={gloves} setData={setGloves}/>
                </div>
                <div className={`armor-item shoes ${active === "shoes" ? 'active-armor':''}`}
                     onClick={()=>{setActive("shoes"); setBanned([null, null, null]);}}>
                    <img src={shoesImg} alt="img"/>
                    <Armor data={shoes} setData={setShoes}/>
                </div>
            </div>
            <div className="Attribute-wrapper">
                <div className="stones">
                    <div className={`attribute-item fire ${!check_banned("fire") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("fire", "stone")}}>
                        <img src={fireStone} alt="img"/>
                        <div className="title">Fire Stone</div>
                    </div>
                    <div className={`attribute-item water ${!check_banned("water") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("water", "stone")}}>
                        <img src={waterStone} alt="img"/>
                        <div className="title">Water Stone</div>
                    </div>
                    <div className={`attribute-item earth ${!check_banned("earth") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("earth", "stone")}}>
                        <img src={earthStone} alt="img"/>
                        <div className="title">Earth Stone</div>
                    </div>
                    <div className={`attribute-item wind ${!check_banned("wind") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("wind", "stone")}}>
                        <img src={windStone} alt="img"/>
                        <div className="title">Wind Stone</div>
                    </div>
                    <div className={`attribute-item dark ${!check_banned("dark") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("dark", "stone")}}>
                        <img src={darkStone} alt="img"/>
                        <div className="title">Dark Stone</div>
                    </div>
                    <div className={`attribute-item holy ${!check_banned("holy") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("holy", "stone")}}>
                        <img src={holyStone} alt="img"/>
                        <div className="title">Holy Stone</div>
                    </div>
                </div>
                <div className="crystals">
                    <div className={`attribute-item fire ${!check_banned("fire") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("fire", "crystal")}}>
                        <img src={fireCrystal} alt="img"/>
                        <div className="title">Fire Crystal</div>
                    </div>
                    <div className={`attribute-item water ${!check_banned("water") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("water", "crystal")}}>
                        <img src={waterCrystal} alt="img"/>
                        <div className="title">Water Crystal</div>
                    </div>
                    <div className={`attribute-item earth ${!check_banned("earth") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("earth", "crystal")}}>
                        <img src={earthCrystal} alt="img"/>
                        <div className="title">Earth Crystal</div>
                    </div>
                    <div className={`attribute-item wind ${!check_banned("wind") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("wind", "crystal")}}>
                        <img src={windCrystal} alt="img"/>
                        <div className="title">Wind Crystal</div>
                    </div>
                    <div className={`attribute-item dark ${!check_banned("dark") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("dark", "crystal")}}>
                        <img src={darkCrystal} alt="img"/>
                        <div className="title">Dark Crystal</div>
                    </div>
                    <div className={`attribute-item holy ${!check_banned("holy") ? "banned_att":""}`}
                         onClick={()=>{addArmorAtt_Handler("holy", "crystal")}}>
                        <img src={holyCrystal} alt="img"/>
                        <div className="title">Holy Crystal</div>
                    </div>
                </div>
                <div className="stat">
                    <div className="chance">
                        <label><input name={"chance"} type="radio" onChange={()=>{setChance(true)}} checked={chance}/> {i18next.t('attribute.chance')}: 50% / 30%</label>
                        <label><input name={"chance"} type="radio" onChange={()=>{setChance(false)}} checked={!chance}/> 100%</label>
                    </div>
                    <div className="stat-att fire"><span>Fire</span><span>{total.water}</span></div>
                    <div className="stat-att water"><span>Water</span><span>{total.fire}</span></div>
                    <div className="stat-att wind"><span>Wind</span><span>{total.earth}</span></div>
                    <div className="stat-att earth"><span>Earth</span><span>{total.wind}</span></div>
                    <div className="stat-att holy"><span>Holy</span><span>{total.dark}</span></div>
                    <div className="stat-att dark"><span>Dark</span><span>{total.holy}</span></div>
                    <div className="amount">
                        <label><input name={"amount"} type="radio" onChange={()=>{setAmount(6)}} checked={amount === 6}/> {i18next.t('attribute.quantity')}: 6</label>
                        <label><input name={"amount"} type="radio" onChange={()=>{setAmount(60)}} checked={amount === 60}/> 60</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="chart-wrapper" onMouseMove={(e)=>{rotate_chart(e)}}>
            <div className="img-wrapper">
                <div className="title title1">{i18next.t('attribute.bonus')}</div>
                <div className="title title2">{i18next.t('attribute.difference')}</div>
                <img src={chart} alt="att damage chart"/>
            </div>
            <div className={`enough ${enough ? "hide_enough":""}`}><span onClick={()=>{setEnough(true)}}>{i18next.t('attribute.enough')}</span></div>
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
export default connect(mapStateToProps, mapDispatchProps)(Attribute);