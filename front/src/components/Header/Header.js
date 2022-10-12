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
        {{i18next.t('title')}}
    };
    const [menu, setMenu] = useState(true);
    return(        <header className={`Header ${menu ? '' : 'mobile_show'}`}>
        <div className="logo">HighFive</div>
        <nav className={`nav`}>
            <div className="nav-item nav-home"><NavLink to={"/"}  exact="true" end>Home</NavLink></div>
            <div className="nav-item nav-home dropdown"><NavLink className={'disable'} to={"/other"} exact="true" >Other <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                <div className="dropdown-menu">
                    <div className="nav-item nav-home dropdown2"><NavLink className={'disable'} to={"/other/quests"} exact="true">Quests <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                        <div className="nav-item nav-home dropdown-menu2">
                            <div className="nav-item nav-home"><NavLink to={"/other/TEMPLATE/TEMPLATE"}  exact="true" end>item</NavLink></div>
                        </div>
                    </div>
                    <div className="nav-item nav-home dropdown2"><NavLink className={'disable'} to={"/other/extra"} exact="true">Extra <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                        <div className="nav-item nav-home dropdown-menu2">
                            <div className="nav-item nav-home"><NavLink to={"/other/extra/enchante_chance"}  exact="true" end>Шанс точки скилов</NavLink></div>
                            <div className="nav-item nav-home"><NavLink to={"/other/extra/attribute"}  exact="true" end>Attribute</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-item nav-home dropdown"><NavLink className={'disable'} to={"/respawn"} exact="true">RSS <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                <div className="dropdown-menu">
                    <div className="nav-item nav-home dropdown2"><NavLink className={'disable'} to={"/respawn/asterios"} exact="true">Asterios <FontAwesomeIcon className={`faIcons`} icon={faChevronDown}/></NavLink>
                        <div className="nav-item nav-home dropdown-menu2">
                            <div className="nav-item nav-home"><NavLink to={"/respawn/asterios/subclass-rb_x1"}  exact="true" end>x1</NavLink></div>
                            <div className="nav-item nav-home"><NavLink to={"/respawn/asterios/subclass-rb_x1.5"}  exact="true" end>x1.5</NavLink></div>
                            <div className="nav-item nav-home"><NavLink to={"/respawn/asterios/subclass-rb_x5"}  exact="true" end>x5</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="nav-item nav-auth"><NavLink to={"/auth"}  exact="true">Auth</NavLink></div>*/}
            <div className="nav-item nav-auth"><NavLink to={"/contacts"}  exact="true">Contacts</NavLink></div>
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
                <div onClick={()=>{changeLanguage('en')}} className="flag-wrapper en"><img src={en} alt="USA flag icon"/> EN</div>
                <div onClick={()=>{changeLanguage('ua')}} className="flag-wrapper ua"><img src={ua} alt="Ukraine flag icon"/> UA</div>
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