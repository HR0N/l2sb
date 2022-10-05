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
