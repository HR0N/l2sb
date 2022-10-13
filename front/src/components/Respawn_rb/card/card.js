import "./card.scss";
import {connect} from 'react-redux';
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCopy} from "@fortawesome/free-solid-svg-icons";
import Time from "../../../sublimate/time";
import dead from "../../../img/dead.png"
import dead_b from "../../../img/dead_black.png"
import dead_color from "../../../img/dead_color.png"
import happy from "../../../img/happy.png"
import happy_color from "../../../img/happy_color.png"
import telegram from "../../../img/telegram3-yellow.png";
import {useTranslation} from "react-i18next";
import i18next from '../../../i18next';

const time = new Time();
const width       = 120;
const height      = 120;
const strokeWidth = 4;
const radius = (width / 2) - (strokeWidth * 2);
const circumference = 2 * Math.PI * radius;



function Card(props) {
    const {i18n} = useTranslation();
    const [compare, setCompare] = useState(time.compare_dateTime_formats(props.data[0]));



    useEffect(()=>{
        const circle = document.querySelector(`.card_${props.idx} .progress-ring__circle`);

        const setProgress = percent =>{
            circle.style.strokeDashoffset = Math.round(circumference - percent / 100 * circumference);
        };
        const getPercent  = ()=>{
            if(compare.difference[0] > 720){
                return Math.round(100 - (compare.difference2[0] * 100 / 1080));
            }else{
                return Math.round(100 - (compare.difference[0] * 100 / 720));
            }};


        const interval = setInterval(()=>{
            setCompare(time.compare_dateTime_formats(props.data[0]));
        }, 2000);  // todo:                                               . . : : interval refresh data : : . .

        setTimeout(()=>{setProgress(getPercent());}, 2000);



        const stringGap = (string, poOffset = 0)=>{
            let array = [...string.getElementsByTagName('span')];
            array.map((v, k)=>{
                v.style.transition = `linear all ${2.5 - ((k+9)/10)}s`;
                v.style.transform = `rotate(${poOffset+(k*8.5)}deg)`;
            });
        };
        if(!compare.begun){
            setTimeout(()=>{stringGap(document.querySelector(`.card_${props.idx} .resp_time_left`), 300);}, 200);
        }else{
            setTimeout(()=>{stringGap(document.querySelector(`.card_${props.idx} .resp_time_passed`), 305);}, 200);
        }
        return ()=>{clearInterval(interval);};  // componentWillUnmount()
    }, [compare]);


    return(<div className={`Card card_${props.idx} ${compare.begun ? ' begun' : ' begun'}`}>
        {props.data[2] ? <div className="copy">
            <div className={'fa-icon fa-telegram'} onClick={()=>{window.open(props.link)}}
            ><img src={telegram} alt="telegram-icon"/></div>
            <FontAwesomeIcon
                onClick={()=>{navigator.clipboard.writeText(props.data[2])}}
                className={`fa-icon fa-copy`} icon={faCopy}/>
        </div> : false}
        <div className="title">
            <h2>{props.data[1]}</h2>
        </div>
        <div className="Card__info">
            <div className="resp">{i18next.t('rss.killed')}:</div>
            <div className="info__row was-killed">{time.aster_Time_format_to_l2sb(props.data[0])}</div>
            <br/>
            <div className="resp">{i18next.t('rss.respawn')}:</div>
            <div className="info__row start-resp">
                <span>{`${compare.start[1]} - ${compare.finish[1]}`}</span>
                {props.data[3] ? <span>{props.data[3]}</span> : ''}
            </div>
        </div>
        <div className="interface">
            <div className="flag-words">
                {!compare.begun ? <div className="flag resp_time_left">
                    <span>д</span>
                    <span>о</span>
                    <span> </span>
                    <span>н</span>
                    <span>а</span>
                    <span>ч</span>
                    <span>а</span>
                    <span>л</span>
                    <span>а</span>
                    <span> </span>
                    <span>р</span>
                    <span>е</span>
                    <span>с</span>
                    <span>п</span>
                    <span>а</span>
                </div> : <div className="flag resp_time_passed">
                    <span>д</span>
                    <span>о</span>
                    <span> </span>
                    <span>к</span>
                    <span>о</span>
                    <span>н</span>
                    <span>ц</span>
                    <span>а</span>
                    <span> </span>
                    <span>р</span>
                    <span>е</span>
                    <span>с</span>
                    <span>п</span>
                    <span>а</span>
                </div>}
            </div>
            <svg className="progress-ring">
                <circle className="progress-ring__circle" cx={'60'} cy={'60'} r={`${radius}`}
                        strokeDasharray={`${circumference} ${circumference}`}
                        strokeDashoffset={`${circumference}`}/>
            </svg>
            {compare.begun
                ? <div className="percent">{compare.difference[1]}</div>
                : <div className="percent">{compare.difference2[1]}</div>}
        </div>
        {compare.begun
        ? <img className={`resp_status_img`} src={happy_color} alt="monster status image"/>
        : <img className={`resp_status_img`} src={dead_color} alt="monster status image"/>}
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
export default connect(mapStateToProps, mapDispatchProps)(Card);