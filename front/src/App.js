import './App.scss';
import {connect} from "react-redux";
import React, {Component} from "react";
import {Routes, Route} from 'react-router-dom';
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Header from "./components/Header/Header";
import Asterios_respawn_sub_rb from "./components/Respawn_rb/Asterios_respawn_sub_rb_x1";
import Asterios_respawn_sub_rb_x1d5 from "./components/Respawn_rb/Asterios_respawn_sub_rb_x1d5";
import Asterios_respawn_sub_rb_x5 from "./components/Respawn_rb/Asterios_respawn_sub_rb_x5";
import Enchante_chance from "./components/Enchante_chance/Enchante_chance";
import Contacts from "./components/Contacts/Contacts";
import Attribute from "./components/Attribute/Attribute";
import Subclass from "./components/Quests/Subclass/Subclass";
import Subskills from "./components/SubSkills/Subskills";


class App extends Component{


  componentDidMount() {
  }

  state = {
  };


  render() {
    return (
        <div className={'App'}>
          <Header/>
          <Routes>
            <Route exact={true} path={'/'} element={<Home/>}/>
            <Route exact={true} path={'/respawn/asterios/subclass-rb_x1'} element={<Asterios_respawn_sub_rb/>}/>
            <Route exact={true} path={'/respawn/asterios/subclass-rb_x1.5'} element={<Asterios_respawn_sub_rb_x1d5/>}/>
            <Route exact={true} path={'/respawn/asterios/subclass-rb_x5'} element={<Asterios_respawn_sub_rb_x5/>}/>
            <Route exact={true} path={'/respawn/asterios/subclass-rb_x5'} element={<Asterios_respawn_sub_rb_x5/>}/>
            <Route exact={true} path={'/other/extra/enchante_chance'} element={<Enchante_chance/>}/>
            <Route exact={true} path={'/other/extra/subskills'} element={<Subskills/>}/>
            <Route exact={true} path={'/quests/subclass'} element={<Subclass/>}/>
            <Route exact={true} path={'/contacts'} element={<Contacts/>}/>
            <Route exact={true} path={'/other/extra/attribute'} element={<Attribute/>}/>
            <Route exact={true} path={'/auth'} element={<Auth/>}/>
          </Routes>
        </div>
    );
  }
}


function mapStateToProps() {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
