import {NavLink} from 'react-router-dom';
import React, {Component} from 'react';
import '../App.css';

class Nav extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid" id="navContainer">
    <NavLink to="/inventory">Inventory</NavLink>
    <NavLink to="/character">Character</NavLink>
    </div>
    </nav>
  );
}
}
export default Nav;
