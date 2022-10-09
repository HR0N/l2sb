import React, {useState} from "react";
import "./Attribute.scss";
import {connect} from 'react-redux';
import Armor from "./Armor/Armor";

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


function Attribute() {

    const [helmet, setHelmet]           = useState([["", 0],["", 0],["", 0]]);
    const [breastplate, setBreastplate] = useState([["", 0],["", 0],["", 0]]);
    const [stocking, setStocking]       = useState([["", 0],["", 0],["", 0]]);
    const [gloves, setGloves]           = useState([["", 0],["", 0],["", 0]]);
    const [shoes, setShoes]             = useState([["", 0],["", 0],["", 0]]);

    const [active, setActive] = useState(null);

    const check_value = (val1, val2)=>{return val1 + val2 > 120 ? 120 : val1 + val2;};

    const addArmorAtt = (armor, setArmor, att)=>{
        if(!armor[0][0]){setArmor([[att, armor[0][1] + 6],armor[1],armor[2]])}
        else if(!armor[1][0]){setArmor([armor[0],[att, armor[1][1] + 6],armor[2]])}
        else if(!armor[2][0]){setArmor([armor[0],armor[1],[att, armor[2][1] + 6]])}

        if(armor[0][0] && armor[0][0] === att){setArmor([[att, check_value(armor[0][1], 6)],armor[1],armor[2]])}
        else if(armor[1][0] && armor[1][0] === att){setArmor([armor[0],[att, check_value(armor[1][1], 6)],armor[2]])}
        else if(armor[2][0] && armor[2][0] === att){setArmor([armor[0],armor[1],[att, check_value(armor[2][1], 6)]])}
    };
    const addArmorAtt_Handler = (att, stoneType)=>{
        switch (active) {
            case "helmet":      addArmorAtt(helmet, setHelmet, att);            break;
            case "breastplate": addArmorAtt(breastplate, setBreastplate, att);  break;
            case "stocking":    addArmorAtt(stocking, setStocking, att);        break;
            case "gloves":      addArmorAtt(gloves, setGloves, att);            break;
            case "shoes":       addArmorAtt(shoes, setShoes, att);              break;
            default: break;}};


    return(<div className={`Attribute`}>
        <h2>Attribute</h2>
        <div className="wrapper">
            <div className="Armor-wrapper">
                <div className={`armor-item helmet ${active === "helmet" ? 'active-armor':''}`}
                     onClick={()=>{setActive("helmet");}}>
                    <img src={helmetImg} alt="img"/>
                    <Armor data={helmet} setData={setHelmet}/>
                </div>
                <div className={`armor-item breastplate ${active === "breastplate" ? 'active-armor':''}`}
                     onClick={()=>{setActive("breastplate");}}>
                    <img src={breastplateImg} alt="img"/>
                    <Armor data={breastplate} setData={setBreastplate}/>
                </div>
                <div className={`armor-item stocking ${active === "stocking" ? 'active-armor':''}`}
                     onClick={()=>{setActive("stocking");}}>
                    <img src={stockingImg} alt="img"/>
                    <Armor data={stocking} setData={setStocking}/>
                </div>
                <div className={`armor-item gloves ${active === "gloves" ? 'active-armor':''}`}
                     onClick={()=>{setActive("gloves");}}>
                    <img src={glovesImg} alt="img"/>
                    <Armor data={gloves} setData={setGloves}/>
                </div>
                <div className={`armor-item shoes ${active === "shoes" ? 'active-armor':''}`}
                     onClick={()=>{setActive("shoes");}}>
                    <img src={shoesImg} alt="img"/>
                    <Armor data={shoes} setData={setShoes}/>
                </div>
            </div>
            <div className="Attribute-wrapper">
                <div className="stones">
                    <div className="attribute-item fire">
                        <img src={fireStone} alt="img"/>
                        <div className="title">Fire Stone</div>
                    </div>
                    <div className="attribute-item water">
                        <img src={waterStone} alt="img"/>
                        <div className="title">Water Stone</div>
                    </div>
                    <div className="attribute-item earth">
                        <img src={earthStone} alt="img"/>
                        <div className="title">Earth Stone</div>
                    </div>
                    <div className="attribute-item wind">
                        <img src={windStone} alt="img"/>
                        <div className="title">Wind Stone</div>
                    </div>
                    <div className="attribute-item dark">
                        <img src={darkStone} alt="img"/>
                        <div className="title">Dark Stone</div>
                    </div>
                    <div className="attribute-item holy">
                        <img src={holyStone} alt="img"/>
                        <div className="title">Holy Stone</div>
                    </div>
                </div>
                <div className="crystals">
                    <div className="attribute-item fire">
                        <img src={fireCrystal} alt="img"/>
                        <div className="title">Fire Crystal</div>
                    </div>
                    <div className="attribute-item water">
                        <img src={waterCrystal} alt="img"/>
                        <div className="title">Water Crystal</div>
                    </div>
                    <div className="attribute-item earth">
                        <img src={earthCrystal} alt="img"/>
                        <div className="title">Earth Crystal</div>
                    </div>
                    <div className="attribute-item wind">
                        <img src={windCrystal} alt="img"/>
                        <div className="title">Wind Crystal</div>
                    </div>
                    <div className="attribute-item dark">
                        <img src={darkCrystal} alt="img"/>
                        <div className="title">Dark Crystal</div>
                    </div>
                    <div className="attribute-item holy">
                        <img src={holyCrystal} alt="img"/>
                        <div className="title">Holy Crystal</div>
                    </div>
                </div>
            </div>
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