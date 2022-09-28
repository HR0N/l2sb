import "./card.scss";
import {connect} from 'react-redux';
import React, {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkullCrossbones, faHourglassStart, faHourglassEnd} from "@fortawesome/free-solid-svg-icons";
import Time from "../../../sublimate/time";

const time = new Time();
const width       = 120;
const height      = 120;
const strokeWidth = 4;
const radius = (width / 2) - (strokeWidth * 2);
const circumference = 2 * Math.PI * radius;

// time.ast_format_refactoring("2022-09-22 07:46:55: Убит босс Longhorn Golkonda");

const asterios_date_to_normal = (props)=>{
    let sKilled_date = props.data[0].split(' ')[0].split('-');
    sKilled_date = `${sKilled_date[2]}.${sKilled_date[1]}.${sKilled_date[0]}`;
    let sKilled_time = props.data[0].split(' ')[1].substr(0, 5);
    return [sKilled_date, sKilled_time];
};


function Card(props) {
    const [compare, setCompare] = useState(time.compare_dateTime_formats(props.data[0]));
    const [begun, setBegun] = useState(compare.begun);
    // const [killed, setKilled] = useState(time.aster_Time_format_to_l2sb(props.data[0]));


    // time.aster_Time_format_to_l2sb(props.data[0]);
    // time.new_Date_format_to_l2sb(new Date());

    // let rt = time.compare_dateTime_formats(props.data[0]);
    // console.log(rt);


    useEffect(()=>{
        const circle = document.querySelector('.progress-ring__circle');

        const setProgress = percent =>{circle.style.strokeDashoffset = circumference - percent / 100 * circumference};
        const getPercent  = ()=>{return Math.round(100 - (compare.difference[0] * 100 / 720))};


        circle.style.strokeDasharray  = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = circumference;
        setInterval(()=>{
            setProgress(getPercent());
            setCompare(time.compare_dateTime_formats(props.data[0]));
            setBegun(compare.begun);
        }, 2000);  // todo:                                               . . : : interval refresh data : : . .


        const stringGap = (string, poOffset = 0)=>{
            let array = [...string.getElementsByTagName('span')];
            array.map((v, k)=>{
                v.style.transition = `linear all ${2.5 - ((k+9)/10)}s`;
                v.style.transform = `rotate(${poOffset+(k*8.5)}deg)`;
            });
        };
        if(!begun){
            setTimeout(()=>{stringGap(document.querySelector('.resp_time_left'), 300);}, 200);
        }else{
            setTimeout(()=>{stringGap(document.querySelector('.resp_time_passed'), 305);}, 200);
        }
    }, []);


    return(<div className={`Card ${begun ? ' begun' : ' wait'}`}>
        <div className="title">
            <h2>{props.data[1]}</h2>
        </div>
        <div className="Card__info">
            <div className="resp">Убит:</div>
            <div className="info__row was-killed">{time.aster_Time_format_to_l2sb(props.data[0])}</div>
            <br/>
            <div className="resp">Респавн:</div>
            <div className="info__row start-resp">{`${compare.start[1]} - ${compare.finish[1]}`}</div>
            {/*<div className="info__row max-resp">23:00</div>*/}
        </div>
        <div className="interface">
            <div className="flag-words">
                {!begun ? <div className="flag resp_time_left">
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
                {begun ? <div className="flag resp_time_passed">
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
            <div className="percent">{compare.difference[1]}</div>
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