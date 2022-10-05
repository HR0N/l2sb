import React, {useState} from "react";
import "./Header.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux';
import {faBars} from "@fortawesome/free-solid-svg-icons/faBars";
import {faClose} from "@fortawesome/free-solid-svg-icons/faClose";


function Header() {
    const [menu, setMenu] = useState(true);
    return(        <header className={`Header ${menu ? '' : 'mobile_show'}`}>
        <nav className={`nav`}>
            <div className="nav-item nav-home"><NavLink to={"/"}  exact="true" end>Home</NavLink></div>
            <div className="nav-item nav-home dropdown"><NavLink className={'disable'} to={"/other"} exact="true" >Other</NavLink>
                <div className="dropdown-menu">
                    <div className="nav-item nav-home dropdown2"><NavLink className={'disable'} to={"/other/quests"} exact="true">Quests</NavLink>
                        <div className="nav-item nav-home dropdown-menu2">
                            <div className="nav-item nav-home"><NavLink to={"/other/TEMPLATE/TEMPLATE"}  exact="true" end>item</NavLink></div>
                        </div>
                    </div>
                    <div className="nav-item nav-home dropdown2"><NavLink className={'disable'} to={"/other/extra"} exact="true">Extra</NavLink>
                        <div className="nav-item nav-home dropdown-menu2">
                            <div className="nav-item nav-home"><NavLink to={"/other/extra/enchante_chance"}  exact="true" end>Шанс точки скилов</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-item nav-home dropdown"><NavLink className={'disable'} to={"/respawn"} exact="true" >RSS</NavLink>
                <div className="dropdown-menu">
                    <div className="nav-item nav-home dropdown2"><NavLink className={'disable'} to={"/respawn/asterios"} exact="true">Asterios</NavLink>
                        <div className="nav-item nav-home dropdown-menu2">
                            <div className="nav-item nav-home"><NavLink to={"/respawn/asterios/subclass-rb_x1"}  exact="true" end>x1</NavLink></div>
                            <div className="nav-item nav-home"><NavLink to={"/respawn/asterios/subclass-rb_x1.5"}  exact="true" end>x1.5</NavLink></div>
                            <div className="nav-item nav-home"><NavLink to={"/respawn/asterios/subclass-rb_x5"}  exact="true" end>x5</NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav-item nav-auth"><NavLink to={"/auth"}  exact="true">Auth</NavLink></div>
        </nav>
        <div className="nav_bars" onClick={()=>{setMenu(!menu)}}>
            {menu
                ? <FontAwesomeIcon className={`faCaretLeft`} icon={faBars}/>
                :  <FontAwesomeIcon className={`faCaretLeft`} icon={faClose}/>}

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