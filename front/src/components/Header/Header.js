import React, {useState} from "react";
import "./Header.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faClose} from "@fortawesome/free-solid-svg-icons/faClose";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import {useTranslation} from "react-i18next";
import i18next from '../../i18next';

import en from "./../../img/locale/GB.png";
import ua from "./../../img/locale/UA.png";
import ru from "./../../img/locale/ru2.png";


function Header() {
    const {i18n} = useTranslation();
    const changeLanguage = (language)=>{
        i18n.changeLanguage(language).then(()=>{});
    };
    const [menu, setMenu] = useState(true);
    return(        <header className={`Header ${menu ? '' : 'mobile_show'}`}>
        <div className="logo"><a href="/">HighFive</a></div>
        <nav className={`nav`}>
            <div className="nav-item"><NavLink to={"/"}  exact="true" end>{i18next.t('header.home')}</NavLink></div>
            <div className="nav-item dropdown"><NavLink className={'disable'} to={"/other"} exact="true" >{i18next.t('header.other')} <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                <div className="dropdown-menu">
                    {/*<div className="nav-item dropdown2"><NavLink className={'disable'} to={"/other/quests"} exact="true">{i18next.t('header.quests')} <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>*/}
                    {/*    <div className="nav-item dropdown-menu2">*/}
                    {/*        <div className="nav-item"><NavLink to={"/other/TEMPLATE/TEMPLATE"}  exact="true" end>item</NavLink></div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="nav-item dropdown2"><NavLink className={'disable'} to={"/other/extra"} exact="true">{i18next.t('header.extra')} <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                        <div className="nav-item dropdown-menu2">
                            <div className="nav-item"><NavLink to={"/other/extra/enchante_chance"}  exact="true" end>{i18next.t('header.skill_enchant_chance')}</NavLink></div>
                            <div className="nav-item"><NavLink to={"/other/extra/attribute"}  exact="true" end>{i18next.t('header.attribute')}</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-item dropdown"><NavLink className={'disable'} to={"/quests"} exact="true" >Quests <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                <div className="dropdown-menu">
                    <div className="nav-item"><NavLink to={"/quests/subclass"}  exact="true" end>Subclass</NavLink></div>
                    {/*<div className="nav-item dropdown2"><NavLink className={'disable'} to={"/other/extra"} exact="true">{i18next.t('header.extra')} <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                        <div className="nav-item dropdown-menu2">
                            <div className="nav-item"><NavLink to={"/other/extra/enchante_chance"}  exact="true" end>{i18next.t('header.skill_enchant_chance')}</NavLink></div>
                            <div className="nav-item"><NavLink to={"/other/extra/attribute"}  exact="true" end>{i18next.t('header.attribute')}</NavLink></div>
                        </div>
                    </div>*/}
                </div>
            </div>
            <div className="nav-item dropdown"><NavLink className={'disable'} to={"/respawn"} exact="true">{i18next.t('header.rss')} <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                <div className="dropdown-menu">
                    <div className="nav-item dropdown2"><NavLink className={'disable'} to={"/respawn/asterios"} exact="true">Asterios <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                        <div className="nav-item dropdown-menu2">
                            <div className="nav-item"><NavLink to={"/respawn/asterios/subclass-rb_x1"}  exact="true" end>x1</NavLink></div>
                            <div className="nav-item"><NavLink to={"/respawn/asterios/subclass-rb_x1.5"}  exact="true" end>x1.5</NavLink></div>
                            <div className="nav-item"><NavLink to={"/respawn/asterios/subclass-rb_x5"}  exact="true" end>x5</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="nav-item nav-auth"><NavLink to={"/auth"}  exact="true">Auth</NavLink></div>*/}
            <div className="nav-item nav-auth"><NavLink to={"/contacts"}  exact="true">{i18next.t('header.contacts')}</NavLink></div>
        </nav>
        <div className="nav_bars" onClick={()=>{setMenu(!menu)}}>
            {menu
                ? <FontAwesomeIcon className={`faCaretLeft`} icon={faBars}/>
                :  <FontAwesomeIcon className={`faCaretLeft`} icon={faClose}/>}

        </div>
        <div className="_locale">
            <div className="main_language">
                {i18n.language === 'en' ? <div className="flag-wrapper en"><img src={en} alt="USA flag icon"/></div>: ''}
                {i18n.language === 'ua' ? <div className="flag-wrapper ua"><img src={ua} alt="Ukraine flag icon"/></div>:''}
                {i18n.language === 'ru' ? <div className="flag-wrapper ru"><img src={ru} alt="russia flag icon"/></div>:''}
            </div>
            <div className="locale__list">
                <div onClick={()=>{changeLanguage('ua')}} className="flag-wrapper ua"><img src={ua} alt="Ukraine flag icon"/> UA</div>
                <div onClick={()=>{changeLanguage('en')}} className="flag-wrapper en"><img src={en} alt="USA flag icon"/> EN</div>
                {/*<div className="flag-wrapper ua"><img src={ua} alt="Ukraine flag icon"/> RU</div>*/}
                <div onClick={()=>{changeLanguage('ru')}} className="flag-wrapper ru"><img src={ru} alt="russia flag icon"/> RU</div>
            </div>
        </div>
    </header>);
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
export default connect(mapStateToProps, mapDispatchProps)(Header);