import "./card.scss";
import {connect} from 'react-redux';
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkullCrossbones, faHourglassStart, faHourglassEnd} from "@fortawesome/free-solid-svg-icons";


const width       = 120;
const height      = 120;
const strokeWidth = 4;
const radius = (width / 2) - (strokeWidth * 2);
const circumference = 2 * Math.PI * radius;




function Card() {
    const [begun, setBegun] = useState(false);
    const [killed, setKilled] = useState(false);
    console.log(new Date());

    useEffect(()=>{
        const circle = document.querySelector('.progress-ring__circle');

        const setProgress = percent =>{circle.style.strokeDashoffset = circumference - percent / 100 * circumference;};


        circle.style.strokeDasharray  = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        setInterval(()=>{setProgress(75)}, 200);


        const stringGap = (string, poOffset = 0)=>{
            let array = [...string.getElementsByTagName('span')];
            array.map((v, k)=>{
                v.style.transition = `ease-in all ${2.5 - ((k+9)/10)}s`;
                v.style.transform = `rotate(${poOffset+(k*8.5)}deg)`;
            });
        };
        if(begun){
            setTimeout(()=>{stringGap(document.querySelector('.resp_time_left'), 300);}, 200);
        }else{
            setTimeout(()=>{stringGap(document.querySelector('.resp_time_passed'), 305);}, 200);
        }
    }, []);


    return(<div className={`Card`}>
        <div className="title">
            <h2>Cabrio</h2>
        </div>
        <div className="Card__info">
            <div className="resp">Убит:</div>
            <div className="info__row was-killed">15:00</div>
            <br/>
            <div className="resp">Респавн (старт\макс):</div>
            <div className="info__row start-resp">9:00 - 23:00</div>
            {/*<div className="info__row max-resp">23:00</div>*/}
        </div>
        <div className="interface">
            <div className="flag-words">
                {begun ? <div className="flag resp_time_left">
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
                </div> : false}
                {!begun ? <div className="flag resp_time_passed">
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
                </div> : false}
            </div>
            <svg className="progress-ring">
                <circle className="progress-ring__circle" cx={'60'} cy={'60'} r={`${radius}`}
                        strokeDashoffset={`${circumference}`}/>
            </svg>
            <div className="percent">{18 - (18 - 18)}:00</div>
            {/*<div className="percent">9ч / 12</div>*/}
        </div>
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