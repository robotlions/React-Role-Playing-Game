import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import Login from './Login'
import Character from './Character'
import Inventory from './Inventory'
import '../App.css';

class Nav extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }

      render(){


  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid" id="navContainer">
    <p>Account</p> <p>Character</p> <p>Inventory</p>
    </div></nav>
  );
}
}
export default Nav;
