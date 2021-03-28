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
    <div className="col-sm-auto startButtonColumn">
    <Login all={this.props} gameOn={this.props.gameOn}/>
    {this.state.isLoggedIn === true ? startButton : null}
    </div>
    </>
  );
}
}
export default Splash;
