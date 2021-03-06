import React, {Component} from 'react';
import '../App.css';
import Cookies from 'js-cookie'
import dungeonWalk from '../images/dungeonWalk.gif'
import dungeonStatic from '../images/dungeonStatic.jpg'
import archWall3 from '../images/archbwinfo.png'
import archWall4 from '../images/archwallcolor.png'
import bwsplash from '../images/bwsplash.png'
import Login from './Login'

class Splash extends Component{
  constructor (props){
        super(props);
        this.state = {
        isLoggedIn: !!Cookies.get('Authorization'),
        }
      }

  render(){
const startButton = <button onClick={this.props.startGame} className="startButton">Start!</button>

  return (
    <>
    <img id="mobileSplash" src={archWall3}/>
    <img id="largeSplash" src={bwsplash}/>
    <div className="col-sm-auto startButtonColumn">
    <Login id="logForms" all={this.props} gameOn={this.props.gameOn} startGame={this.props.startGame} setDemo={this.props.setDemo}/>
    {this.state.isLoggedIn === true ? startButton : null}
    </div>
    </>
  );
}
}
export default Splash;
