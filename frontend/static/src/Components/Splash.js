import React, {Component} from 'react';
import '../App.css';
import Cookies from 'js-cookie'
import dungeonWalk from '../images/dungeonWalk.gif'
import dungeonStatic from '../images/dungeonStatic.jpg'
import archWall from '../images/archWall2.png'
import archWall2 from '../images/archfullbwtitle.png'
import archWall3 from '../images/archbwinfo.png'
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
    <img id="largeSplash" src={archWall2}/>
    <div className="col-sm-auto startButtonColumn">
    <Login id="logForms" all={this.props} gameOn={this.props.gameOn}/>
    {this.state.isLoggedIn === true ? startButton : null}
    </div>
    </>
  );
}
}
export default Splash;
