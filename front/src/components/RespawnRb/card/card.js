import "./card.scss";
import {connect} from 'react-redux';
import React, {useEffect} from "react";


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
        stringGap(document.querySelector('.start'));
    }, []);


    return(<div className={`Card`}>
        <div className="interface">
            <div className="start">
                <span>s</span>
                <span>t</span>
                <span>a</span>
                <span>r</span>
                <span>t</span>
            </div>
            <svg className="progress-ring">
                <circle className="progress-ring__circle" cx={'60'} cy={'60'} r={`${radius}`}
                        strokeDashoffset={`${circumference}`}/>
            </svg>
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