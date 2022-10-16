import React from "react";
import "./Subclass.scss";
import {connect} from 'react-redux';
import {useTranslation} from "react-i18next";
import i18next from '../../../i18next';


const popupFadeToggle = (e)=>{
    let popup = e.target.querySelector('.popup');
    popup.style.opacity = 1;
    setTimeout(()=>{popup.style.opacity = 0;}, 2000);
};

function Subclass() {
    const {i18n} = useTranslation();
    return(<div className={`Subclass`}>
        <div className="Subclass-wrapper">
            <h2 className="title">{i18next.t('FatesWhisper.title')}</h2>
            <div className="terms">
                <div className="lvl">{i18next.t('terms.lvl')} <span>75+</span></div>
                <div className="lvl">{i18next.t('terms.requirements')} <span>{i18next.t('terms.no')}</span></div>
            </div>
            <div className="exercises">
                <div className="task" id={0}>
                    <span className="number">1. </span>
                    {i18next.t("FatesWhisper.1.1")}
                    <b className={`copy`} onClick={(e)=>{popupFadeToggle(e);
                        navigator.clipboard.writeText("/target Reorin");}}
                    > Reorin, <span className={`popup`}>{i18next.t('popup_target_copied')}</span></b>
                    {i18next.t("FatesWhisper.1.2")}
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
export default connect(mapStateToProps, mapDispatchProps)(Subclass);