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
    <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
    {this.props.all.gameOn == true ? <div className="navBox"><NavLink to="/">Game</NavLink></div> : null}

    {!this.props.all.char && this.props.all.isLoggedIn === true ? <div className="navBox"><NavLink to="/character/create/">Create Character</NavLink></div> : null}
    {this.props.all.gameOn ? <div className="navBox"><NavLink to="/character/">Character</NavLink></div> : null}
    {this.props.all.gameOn ? <div className="navBox"><NavLink to="/magic/">Magic</NavLink></div> : null}
    <div className="navBox"><NavLink to="/login/">{this.props.all.isLoggedIn ? `Account` : `Log In/Register`}</NavLink></div>
    </div>
    </nav>

  );
}
}
export default Nav;


// <div className="navBox"><NavLink to="/inventory/">Inventory</NavLink></div>
