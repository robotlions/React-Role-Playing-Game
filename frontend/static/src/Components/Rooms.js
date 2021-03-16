import React, {Component} from 'react';
import '../App.css';
import rooms from '../roomlist';
import dungeonWalk from '../images/dungeonWalk.gif'
import dungeonStatic from '../images/dungeonStatic.jpg'

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
  dest = rooms.filter(room => room.id == this.state.currentroom.north)}
if (dir == "south"){
  dest = rooms.filter(room => room.id == this.state.currentroom.south)}
if (dir == "east"){
  dest = rooms.filter(room => room.id == this.state.currentroom.east)}
if (dir == "west"){
  dest = rooms.filter(room => room.id == this.state.currentroom.west)}
dest = dest[0]
if (dest) {
  this.props.changeRoomImage(dungeonWalk, dungeonStatic)
  this.setState({moveMsg: `You walk to the ${dir}.`})
  this.setState({name: "", desc: ""});
  setTimeout(() => {this.setState({moveMsg: ""})}, 1000);
  setTimeout(() => {this.setState({currentroom: dest})}, 1000);
}
else {
  this.setState({moveMsg: "There's no exit in that direction!"})
}
}


  render(){
    const roomname = this.state.currentroom.name;
    const desc = this.state.currentroom.desc;
    const nsew = <>
    {this.state.currentroom.north ? <span title="north" onClick={this.move}>{`<N>`}</span> : null}
    {this.state.currentroom.south ? <span title="south" onClick={this.move}>{`<S>`}</span> : null}
    {this.state.currentroom.east ? <span title="east" onClick={this.move}>{`<E>`}</span> : null}
    {this.state.currentroom.west ?<span title="west" onClick={this.move}>{`<W>`}</span> : null}
    </>

    let moveMsg = this.state.moveMsg




  return (
    <div>
    <h1>{roomname}</h1>
    <p id="moveMsg">{moveMsg}</p>
    <p>{desc}</p>
    <p id="nsew">{nsew}</p>
    </div>
  );
}
}
export default Rooms;
