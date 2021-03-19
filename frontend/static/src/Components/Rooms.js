import React, {Component} from 'react';
import '../App.css';
import rooms from '../roomlist';
import nButton from '../images/nButton.png'
import sButton from '../images/sButton.png'
import eButton from '../images/eButton.png'
import wButton from '../images/wButton.png'


class Rooms extends Component{
  constructor (props){
    super(props);
    this.state = {
      moveMsg: "",
      currentroom: rooms[0],
      dir: {},
            }

this.move = this.move.bind(this);

}



move(e){
let dir = e.target.title
let dest;
if (dir == "north"){
  dest = rooms.filter(room => room.id == this.props.currentRoom.north)}
if (dir == "south"){
  dest = rooms.filter(room => room.id == this.props.currentRoom.south)}
if (dir == "east"){
  dest = rooms.filter(room => room.id == this.props.currentRoom.east)}
if (dir == "west"){
  dest = rooms.filter(room => room.id == this.props.currentRoom.west)}
dest = dest[0]
if (dest) {
  // this.props.changeRoomImage(this.props.currentRoom.walk, this.props.currentRoom.static)
  this.setState({moveMsg: `You walk to the ${dir}.`})
  this.setState({name: "", desc: ""});
  setTimeout(() => {this.setState({moveMsg: ""})}, 1000);
  this.props.travel(dest)
  // setTimeout(() => {this.setState({currentRoom: dest})}, 1000);
}
else {
  this.setState({moveMsg: "There's no exit in that direction!"})
}
}




  render(){
    const roomname = this.props.currentRoom.name;
    const desc = this.props.currentRoom.desc;
    const nsew = <div className="directionBox">
    {this.props.currentRoom.north ? <div id="nButton" title="north" onClick={this.move}><img title="north" src={nButton}/></div> : null}
    {this.props.currentRoom.south ? <div id="sButton" title="south" onClick={this.move}><img title="south" src={sButton}/></div> : null}
    {this.props.currentRoom.east ? <div id="eButton" title="east" onClick={this.move}><img title="east" src={eButton}/></div> : null}
    {this.props.currentRoom.west ? <div id="wButton" title="west" onClick={this.move}><img title="west" src={wButton}/></div> : null}
    </div>

    let moveMsg = this.state.moveMsg
    const welcomeTitle = <div className="welcomeTitle"><h1>B.R.I.D.G.E.</h1><h4>Buildable, Retro-Inspired Database and Game Engine</h4></div>



  return (
    <div>
    {this.props.all.gameOn === true ? <h1>{roomname}</h1> : welcomeTitle}
    <p id="moveMsg">{moveMsg}</p>
    {this.props.all.gameOn === true ? <p>{desc}</p> : null}
    {this.props.all.gameOn === true ? <section id="nsew">{nsew}</section> : null}
    </div>
  );
}
}
export default Rooms;
