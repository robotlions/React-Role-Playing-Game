import React, {Component} from 'react';
import '../App.css';
import nButton from '../images/nButton.png'
import sButton from '../images/sButton.png'
import eButton from '../images/eButton.png'
import wButton from '../images/wButton.png'


class Rooms extends Component{
  constructor (props){
    super(props);
    this.state = {
      moveMsg: "",
      dir: {},
            }

this.move = this.move.bind(this);

}



move(e){
const rooms = this.props.all.roomList
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
if (dir == "up"){
  dest = rooms.filter(room => room.id == this.props.currentRoom.up)}
if (dir == "down"){
  dest = rooms.filter(room => room.id == this.props.currentRoom.down)}
dest = dest[0]
if (dest) {
  this.setState({name: "", desc: ""});
  this.props.travel(dest, dir)
}
else {
  this.setState({moveMsg: "There's no exit in that direction!"})
}
}











  render(){
    const mobInRoom = {...this.props.all.mobInRoom[0]}
    const roomname = this.props.currentRoom.lit === true || this.props.all.lightSpell === true ? this.props.currentRoom.name : "DARKNESS";
    const desc = this.props.currentRoom.lit === true || this.props.all.lightSpell === true ? this.props.currentRoom.desc : null;

    const mobInRoomMessage = <div>
    {this.props.all.mobInRoom.length > 0 ? <p>{mobInRoom.name} is here.</p> : null}</div>

    const mobShopMessage = <div> {this.props.all.mobInRoom.length > 0 ?
    mobInRoom.inventory.map((item) => (
      <p key={item.id}>- {item.material.toUpperCase()} {item.name.toUpperCase()} - Price: ${item.value} <button className="saveButton" onClick={()=>this.props.buy(item.id)}>BUY</button></p>
    )) : null }</div>



    const nsew = <div><div className="directionBox">
    {this.props.currentRoom.north ? <div id="nButton" title="north" onClick={this.move}><img title="north" src={nButton}/></div> : null}
    {this.props.currentRoom.south ? <div id="sButton" title="south" onClick={this.move}><img title="south" src={sButton}/></div> : null}
    {this.props.currentRoom.east ? <div id="eButton" title="east" onClick={this.move}><img title="east" src={eButton}/></div> : null}
    {this.props.currentRoom.west ? <div id="wButton" title="west" onClick={this.move}><img title="west" src={wButton}/></div> : null}
    </div>
    <div className="upDownBox">
    {this.props.currentRoom.up ? <div id="uButton" title="up" onClick={this.move}>UP</div> : null}
    {this.props.currentRoom.down ? <div id="dButton" title="down" onClick={this.move}>DOWN</div> : null}
    </div>
    </div>

    let moveMsg = this.state.moveMsg
    const welcomeTitle = <div className="welcomeTitle"><h1>B.R.I.D.G.E.</h1><h4>Buildable, Retro-Inspired Database and Game Engine</h4></div>



  return (
    <div>
    {this.props.all.travelling != true ? <h1>{roomname}</h1> : null}
    <p id="moveMsg">{moveMsg}</p>
    {this.props.all.gameOn === true ? <p>{desc}</p> : null}
    {this.props.all.gameOn === true ? mobInRoomMessage : null}
    {mobShopMessage}
    {this.props.all.gameOn === true ? <section id="nsew">{nsew}</section> : null}
    </div>
  );
}
}
export default Rooms;
