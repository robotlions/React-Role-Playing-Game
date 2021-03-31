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
    {this.props.all.mobInRoom.length > 0 ? <p className="mobLink" onClick={()=>this.props.mobName(mobInRoom)}>{mobInRoom.name} is here.</p> : null }</div>

    const mobShopMessage = <div> {this.props.all.mobInRoom.length > 0 && this.props.all.mobInRoom[0].isShopkeeper == true ?
    mobInRoom.inventory.map((item) => (
      <p className="shopMenu" key={item.id}>- {item.material.toUpperCase()} {item.name.toUpperCase()} - Price: {item.value} silver <button className="saveButton" onClick={()=>this.props.buy(item.id)}>BUY</button></p>
    )) : null }</div>



    const nsew = <div className="directionBox">
    {this.props.currentRoom.north ? <img id="nButton" onClick={this.move} title="north" src={nButton}/> : null}
    {this.props.currentRoom.south ? <img id="sButton" title="south" onClick={this.move} src={sButton}/> : null}
    {this.props.currentRoom.east ? <img id="eButton" onClick={this.move} title="east" src={eButton}/> : null}
    {this.props.currentRoom.west ? <img id="wButton" onClick={this.move} title="west" src={wButton}/> : null}
    </div>

    const upDown = <div className="upDownBox">
    {this.props.currentRoom.up ? <p id="uButton" title="up" onClick={this.move}>CLIMB UP</p> : null}
    {this.props.currentRoom.down ? <p id="dButton" title="down" onClick={this.move}>CLIMB DOWN</p> : null}
    </div>

    let moveMsg = this.state.moveMsg
    const welcomeTitle = <div className="welcomeTitle"><h1>B.R.I.D.G.E.</h1><h4>Buildable, Retro-Inspired Digital Game Engine</h4></div>



  return (
    <div className="roomData">
    {this.props.all.travelling != true && this.props.all.gameOn === true ? <h1>{roomname}</h1> : null}
    {this.props.all.gameOn === true ? <p>{desc}</p> : welcomeTitle}
    {this.props.all.gameOn === true ? mobInRoomMessage : null}
    {mobShopMessage}
    {this.props.all.gameOn === true ? <div id="nsew">{nsew}</div> : null}
    {this.props.all.gameOn === true ? <div id="upDown">{upDown}</div> : null}
    </div>
  );
}
}
export default Rooms;
