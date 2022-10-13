import React from "react";
import "./Armor.scss";
import $ from "jquery";
import {faDeleteLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import i18next from "../../../i18next";
import {useTranslation} from "react-i18next";

const att = {
    "ua": {
        fire:   ["Вогонь", "Вода", "fire-back"],
        water:  ["Вода", "Вогонь", "water-back"],
        earth:  ["Земля", "Вітер", "earth-back"],
        wind:   ["Вітер", "Земля", "wind-back"],
        holy:   ["Святість", "Темрява", "holy-back"],
        dark:   ["Темрява", "Святість", "dark-back"],
    },
    "en": {
        fire:   ["Fire", "Water", "fire-back"],
        water:  ["Water", "Fire", "water-back"],
        earth:  ["Earth", "Wind", "earth-back"],
        wind:   ["Wind", "Earth", "wind-back"],
        holy:   ["Holy", "Dark", "holy-back"],
        dark:   ["Dark", "Holy", "dark-back"],
    },
    "ru": {
        fire:   ["Огонь", "Вода", "fire-back"],
        water:  ["Вода", "Огонь", "water-back"],
        earth:  ["Земля", "Ветер", "earth-back"],
        wind:   ["Ветер", "Земля", "wind-back"],
        holy:   ["Святость", "Тьма", "holy-back"],
        dark:   ["Тьма", "Святость", "dark-back"],
    },
};


const a_lvl = [[0, 11],[12, 29],[30, 59],[60, 71],[72, 89],[90, 119],[120, 120]];  /* 7 lvl total, (step - 6 att)  */
const w_lvl = [[0, 24],[25, 74],[75, 149],[150, 174],[175, 224],[225, 299],[300, 300]];  /* 7 lvl total, (step - 5 att)  */

const get_percent = (val1, val2)=>{return (val1 * 100) / val2};

const get_lvl = (val)=>{
    let res = 0;
    a_lvl.map((v, k)=>{
        if(val >= v[0] && val <= v[1]) res = k + 1;
    });return res;};

const get_width = (val)=>{
    let lvl = a_lvl[get_lvl(val) - 1];
    let val1 = val - lvl[0];
    let val2 = (lvl[1] + 1) - lvl[0];
    let remain = 0;
    if(val2 === 0) val2 = 1;
    let percent = Math.round(get_percent(val1, val2));
    return (percent);
};


function Armor(props) {
    const {i18n} = useTranslation();
    const ratt = ()=> att[i18n.language];

    const delete_att = (idx)=>{
        let result;
        if(idx === 0){result = [["", 0], props.data[1], props.data[2]]}
        if(idx === 1){result = [props.data[0], ["", 0], props.data[2]]}
        if(idx === 2){result = [props.data[0], props.data[1], ["", 0]]}
        props.setData(result);
    };

    return(<div className={`Armor`}>
        {props.data[0][1] ?
        <div className="att att1">
            <div className="title">{ratt()[props.data[0][0]][0]} Lv {get_lvl(props.data[0][1])} ({ratt()[props.data[0][0]][1]} {i18next.t('attribute.defense')} {props.data[0][1]})</div>
            <div className="progress">
                <div className={`layer layer-1 ${ratt()[props.data[0][0]][2]}`} style={{width: get_width(props.data[0][1])+"%"}}></div>
                <div className={`layer layer-2 ${ratt()[props.data[0][0]][2]}`}></div>
                <FontAwesomeIcon className={`faDeleteLeft`} icon={faDeleteLeft} onClick={()=>{delete_att(0)}}/>
            </div>
        </div> : false }
        {props.data[1][1] ?
            <div className="att att2">
                <div className="title">{ratt()[props.data[1][0]][0]} Lv {get_lvl(props.data[1][1])} ({ratt()[props.data[1][0]][1]} {i18next.t('attribute.defense')} {props.data[1][1]})</div>
                <div className="progress">
                    <div className={`layer layer-1 ${ratt()[props.data[1][0]][2]}`} style={{width: get_width(props.data[1][1])+"%"}}></div>
                    <div className={`layer layer-2 ${ratt()[props.data[1][0]][2]}`}></div>
                    <FontAwesomeIcon className={`faDeleteLeft`} icon={faDeleteLeft} onClick={()=>{delete_att(1)}}/>
                </div>
            </div> : false }
        {props.data[2][1] ?
            <div className="att att3">
                <div className="title">{ratt()[props.data[2][0]][0]} Lv {get_lvl(props.data[2][1])} ({ratt()[props.data[2][0]][1]} {i18next.t('attribute.defense')} {props.data[2][1]})</div>
                <div className="progress">
                    <div className={`layer layer-1 ${ratt()[props.data[2][0]][2]}`} style={{width: get_width(props.data[2][1])+"%"}}></div>
                    <div className={`layer layer-2 ${ratt()[props.data[2][0]][2]}`}></div>
                    <FontAwesomeIcon className={`faDeleteLeft`} icon={faDeleteLeft} onClick={()=>{delete_att(2)}}/>
                </div>
            </div> : false }
    </div>);
}

export default Armor;