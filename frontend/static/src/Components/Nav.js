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
    <div className="navComponent">
    {this.props.all.gameOn == true ? <NavLink to="/main/">Game</NavLink> : null}

    {!this.props.all.char && this.props.all.isLoggedIn === true ? <NavLink to="/character/create/">Create Character</NavLink> : null}
    {this.props.all.gameOn ? <NavLink to="/character/">Character</NavLink> : null}

    {this.props.all.char ?
    this.props.all.gameOn && this.props.all.char.magicUser===true ? <NavLink to="/magic/">Magic</NavLink> : null : null}

    {this.props.all.gameOn ? <NavLink to="/inventory/">Inventory</NavLink> : null}
    <NavLink to="/account/">{this.props.all.isLoggedIn ? `Account` : `Log In/Register`}</NavLink>
    {this.props.all.char && this.props.all.char.builder === true ? <NavLink to="/build/">Builder</NavLink> : null}
    </div>

  );
}
}
export default Nav;
