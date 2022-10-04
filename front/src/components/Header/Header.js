import React from "react";
import "./Header.scss";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {connect} from 'react-redux';


function Header() {
    return(        <header className={`Header `}>
        <nav className={`nav`}>
            <div className="nav-item nav-home"><NavLink to={"/"}  exact="true" end>Home</NavLink></div>
            <div className="nav-item nav-home dropdown"><NavLink exact="true">RSS</NavLink>
                <div className="nav-item nav-home dropdown-menu dropdown2"><NavLink exact="true" end>Asterios</NavLink>
                    <div className="nav-item nav-home dropdown-menu2">
                        <div className="nav-item nav-home"><NavLink to={"/"}  exact="true" end>x1</NavLink></div>
                        <div className="nav-item nav-home"><NavLink to={"/"}  exact="true" end>x1.5</NavLink></div>
                        {/*<div className="nav-item nav-home"><NavLink to={"/"}  exact="true" end>x3</NavLink></div>*/}
                        <div className="nav-item nav-home"><NavLink to={"/respawn_rb"}  exact="true" end>x5</NavLink></div>
                        {/*<div className="nav-item nav-home"><NavLink to={"/"}  exact="true" end>x55</NavLink></div>*/}
                    </div>
                </div>
            </div>
            <div className="nav-item nav-auth"><NavLink to={"/auth"}  exact="true">Auth</NavLink></div>
        </nav>
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