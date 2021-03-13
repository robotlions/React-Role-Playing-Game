import React, {Component} from 'react';
import '../App.css';


class TextWindow extends Component{



    render(){

  return (
    <div className="App">
    <h2 className="roomHead">Room Name</h2>
    <p>You are facing north.</p>
    <p>The imposing stone towers of The Keep stand in the distance. A
    wide flagstone road leads north, toward the Keep.</p>
    <br/>
    <br/>
    <br/>
    <div>
    [N]north
    [S]outh
    [E]ast
    [W]est
    <input className="direction"></input></div>

    </div>
  );
}
}



function Room(north, south, east, west){
  this.name = "";
  this.north = north;
  this.south = south;
  this.east = east;
  this.west = west;
  this.roomid = "";

}

function Player(name, location){
  this.name = name;
  this.location = "";
  this.level = "";
  this.ac = "";
  this.maxhp = "";
  this.currenthp = "";
  this.maxsp = "";
  this.currentsp = "";
  this.job = "";
  this.items = [];
  this.weapons = [];
  this.armor = [];
}


function map(){
  console.log("Future map function");
}

function n(player, room){
  const msg = "You walk to the north";
  const loc = player.location;
  goto(player, room);

}

function goto(player, room){
  console.log(player, room);

}

const player1 = new Player("player1", 1);
const room1 = new Room(2);

// n(player1, room1);


export default TextWindow;
