import "./card.scss";
import {connect} from 'react-redux';
import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkullCrossbones, faHourglassStart, faHourglassEnd} from "@fortawesome/free-solid-svg-icons";


const width       = 120;
const height      = 120;
const strokeWidth = 4;
const radius = (width / 2) - (strokeWidth * 2);
const circumference = 2 * Math.PI * radius;




function Card() {

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
                v.style.transform = `rotate(${poOffset+(k+1)*9}deg)`;
            });
        };
        setTimeout(()=>{stringGap(document.querySelector('.progress_time'), 320);}, 200);
        // setTimeout(()=>{stringGap(document.querySelector('.start'));}, 200);
        // setTimeout(()=>{stringGap(document.querySelector('.killed'), 156);}, 200);
        // setTimeout(()=>{stringGap(document.querySelector('.stop'), 310);}, 200);
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
                <div className="flag progress_time">
                    <span>p</span>
                    <span>r</span>
                    <span>o</span>
                    <span>g</span>
                    <span>r</span>
                    <span>e</span>
                    <span>s</span>
                    <span>s</span>
                </div>
                {/*<div className="flag start">
                    <span>s</span>
                    <span>t</span>
                    <span>a</span>
                    <span>r</span>
                    <span>t</span>
                </div>
                <div className="flag killed">
                    <span>d</span>
                    <span>e</span>
                    <span>a</span>
                    <span>t</span>
                    <span>h</span>
                </div>
                <div className="flag stop">
                    <span>e</span>
                    <span>n</span>
                    <span>d</span>
                </div>*/}
            </div>
            <svg className="progress-ring">
                <circle className="progress-ring__circle" cx={'60'} cy={'60'} r={`${radius}`}
                        strokeDashoffset={`${circumference}`}/>
            </svg>
            <div className="percent">75%</div>
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