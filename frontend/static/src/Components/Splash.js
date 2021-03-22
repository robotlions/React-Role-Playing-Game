import React, {Component} from 'react';
import '../App.css';
import Cookies from 'js-cookie'
import dungeonWalk from '../images/dungeonWalk.gif'
import dungeonStatic from '../images/dungeonStatic.jpg'
import archWall from '../images/archWall2.png'
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
    <img className="splashPage" src={archWall}/>
    <div className="row">
    <div className="col-4"></div>
    <div className="col-4"></div>
    <div className="col-4 startButtonColumn">
    <Login all={this.props} gameOn={this.props.gameOn}/>
    {this.state.isLoggedIn === true ? startButton : null}
    </div>
    </div>
    </>
  );
}
}
export default Splash;
