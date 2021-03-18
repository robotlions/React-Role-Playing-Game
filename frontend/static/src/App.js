import React, {Component} from 'react';
import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import CharWindow from './Components/CharWindow';
import GraphicsWindow from './Components/GraphicsWindow';
import Rooms from './Components/Rooms';
import CombatWindow from './Components/CombatWindow';
import Nav from './Components/Nav';
import Inventory from './Components/Inventory';
import Character from './Components/Character';
import Login from './Components/Login';
import Cookies from 'js-cookie';
import {Modal, Button} from "react-bootstrap";
import Magic from './Components/Magic';
import CharCreate from './Components/CharCreate';
import moblist from './moblist';
import rooms from './roomlist';
import dungeonWalk from './images/dungeonWalk.gif';
import dungeonStatic from './images/dungeonStatic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import arch from './images/arch.jpg';
import './App.css';
import mobImage from './images/mob.jpg'



class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      combatwindow: false,
      combat: false,
      char : null,
      charWeapon: {},
      mob: {},
      charSpell: {},
      charAttackMessage: "",
      mobAttackMessage: "",
      data: [],
      isLoggedIn: !!Cookies.get('Authorization'),
      image: arch,
      defaultChar: {},
      playerMessage: "",
      currentRoom: rooms[2],
      immWindow: "",
      arg: "",
      builderInput: false,
      gameOn: false,
    }
this.charDeath = this.charDeath.bind(this);
this.changeToCombatWindow = this.changeToCombatWindow.bind(this);
this.meleeAttack = this.meleeAttack.bind(this);
this.magicAttack = this.magicAttack.bind(this);
this.runAway = this.runAway.bind(this);
this.rando = this.rando.bind(this);
this.resetWindow = this.resetWindow.bind(this);
this.randomMob = this.randomMob.bind(this);
this.heal = this.heal.bind(this);
this.charWins = this.charWins.bind(this);
// this.changeRoomImage = this.changeRoomImage.bind(this);
this.handleInput = this.handleInput.bind(this);
this.handleImmInput = this.handleImmInput.bind(this);
this.goto = this.goto.bind(this);
this.travel = this.travel.bind(this);
this.peace = this.peace.bind(this);
this.set = this.set.bind(this);
this.logKey = this.logKey.bind(this);
this.gameOn = this.gameOn.bind(this);
this.startRandomFight = this.startRandomFight.bind(this);
  }

  componentDidMount(){
    const defaultChar = {
            charId: 1,
            name: "Please log in to load your character",
            lvl: null,
            ac: null,
            hpmax: null,
            hp: null,
            spmax: null,
            sp: null,
            class: null,
            weapon: null,
            xp: null,
          }

    const charWeapon = {
            weaponId: 1,
            name: "longsword",
            damageLow: 2,
            damageHigh: 5,
            damMessage: "slashes",
          }

    const charSpell = {
            spellId: 1,
            name: "force bolt",
            damageLow: 2,
            damageHigh: 8,
            spCost: 4,
            damMessage: "slams"
    }

          this.setState({defaultChar});
          this.setState({charWeapon})
          this.setState({charSpell})


        fetch("/characters/")
      .then(response => response.json())
      .then(response => response[0])
      .then(response => this.setState({char: response}))

      document.addEventListener('keydown', this.logKey);

}

logKey(e) {
  console.log(e.code)
  if(e.code === 'MetaRight'){
    this.setState(prevState => ({
      builderInput: !prevState.builderInput
    }));
  }

}


gameOn(){
  this.setState({image: this.state.currentRoom.static})
  this.setState(prevState => ({gameOn: !prevState.gameOn}));
  setTimeout(()=>{window.location.reload()}, 2000);
}

changeToCombatWindow(){
  if (this.state.combatwindow == false) {
  this.setState({combatwindow: true})
}
else {
  this.setState({combatwindow: false})
}
}



rando(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

randomMob(){
  const rand = Math.floor(Math.random() * (moblist.length - 1) ) + 1;
  const mob = moblist[rand]
  this.setState({mob})
  setTimeout(() => {this.setState({playerMessage: `A ${this.state.mob.name} has entered the fight!`})}, 0);
  setTimeout(() => {this.setState({playerMessage: ""})}, 2000);

}

resetWindow(){
  setTimeout(() => {this.setState({combat: false})}, 4000);
  setTimeout(() => {this.setState({combatwindow: false})}, 4000);
  setTimeout(() => {this.setState({charAttackMessage: ""})}, 4000);
  setTimeout(() => {this.setState({mobAttackMessage: ""})}, 4000);
  setTimeout(() => {this.setState({playerMessage: ""})}, 4000);
}

meleeAttack(char, mob, charWeapon) {
  if (this.state.combat == false){
    this.setState({combat:  true});
    mob.hp = mob.hpmax
    char.hp = char.hpmax
  }
  const charAttack = this.rando(1, 20) + char.attack
  const mobEvade = this.rando(1, 20) + mob.ac
  if (charAttack > mobEvade){
    const damage = this.rando(charWeapon.damageLow, charWeapon.damageHigh)
    mob.hp = mob.hp - damage
    this.setState({charAttackMessage: `${char.name} ${charWeapon.damMessage} the ${mob.name} for ${damage} points of damage!`});
  }
  else {
    this.setState({charAttackMessage: `${char.name} misses the ${mob.name}!`})
  }
  if (mob.hp <= 0) {
    this.charWins(char, mob)
  }
  else{
    setTimeout(() => {this.setState({mobAttackMessage: `The ${mob.name} hits ${char.name} for ${mob.damage} points of damage!`})}, 1000);
    char.hp = (char.hp - mob.damage)
    this.setState({char});
    if (char.hp <= 0){
      setTimeout(() => {this.charDeath(char)}, 2000);
    }
    setTimeout(() => {this.setState({charAttackMessage: ""})}, 3000);
    setTimeout(() => {this.setState({mobAttackMessage: ""})}, 3000);
  }
}

magicAttack(char, mob, charWeapon){
  if (this.state.combat == false){
    this.setState({combat:  true});
  }
  let charSpell = this.state.charSpell
  if (char.sp >= charSpell.spCost ){
    char.sp = char.sp - charSpell.spCost
  let charDamage = this.rando(charSpell.damageLow, charSpell.damageHigh)
    this.setState({charAttackMessage: `${char.name}'s ${charSpell.name} ${charSpell.damMessage} into the ${mob.name}, doing ${charDamage} damage!`})
    mob.hp = mob.hp - charDamage
  }
  else {
    this.setState({playerMessage: `You don't have enough spell points to cast that.`})
  }
  if (mob.hp <= 0) {
    this.charWins(char, mob)
  }
  else{
    let mobAttack = this.rando(1, 20) + mob.attack
    let charEvade = this.rando(1, 20) + char.ac
    if (mobAttack > charEvade){
      char.hp = (char.hp - mob.damage)
      this.setState({char});
      setTimeout(() => {this.setState({mobAttackMessage: `The ${mob.name} hits ${char.name} for ${mob.damage} points of damage!`})}, 1500);

    }
    else this.setState({mobAttackMessage: `The ${mob.name} misses ${char.name}!`})
  }
  setTimeout(() => {this.setState({charAttackMessage: ""})}, 3000);
  setTimeout(() => {this.setState({mobAttackMessage: ""})}, 3000);
}

charWins(char, mob){
  setTimeout(() => {this.setState({playerMessage: `${char.name} has defeated the ${mob.name}! The fight is over.`})}, 1000);
  setTimeout(() => {this.setState({playerMessage: `${char.name} receives ${mob.xp} points of experience.`})}, 2500);
  this.state.char.xp = this.state.char.xp + this.state.mob.xp
  this.setState({image: this.state.currentRoom.static});
  this.setState({char});
  this.resetWindow();
}

runAway(){
  this.setState({playerMessage: `You turn and run!`})
  this.resetWindow();
}

charDeath(char){
  this.resetWindow();
  this.setState({playerMessage: "You have been killed. You materialize in the home room."});
  this.state.char.hp = this.state.char.hpmax;
  this.state.char.sp = this.state.char.spmax;
  <Rooms death={()=>this.setState({currentroom: rooms[0]})}/>
}

handleInput(event){
  this.setState({[event.target.name]: event.target.value});
}

travel(dest) {
  this.setState({currentRoom: dest});
  this.setState({image: this.state.currentRoom.walk});
  setTimeout(() => {this.setState({image: this.state.currentRoom.static})}, 750);
  if(this.rando(1, 5) === 1){
    if(this.state.char.hp < this.state.char.hpmax){
      this.state.char.hp = this.state.char.hp +1}
      if(this.state.char.sp < this.state.char.spmax){
        this.state.char.sp = this.state.char.sp +1
      }
    }
  if(this.rando(1, 6) === 1 && this.state.currentRoom.danger === true){
    this.startRandomFight()
  }
  }


startRandomFight(){
  const char = this.state.char
  this.setState({combat: true});
  this.setState({combatwindow: true});
  const rand = Math.floor(Math.random() * (moblist.length - 1) ) + 1;
  const mob = moblist[rand]
  this.setState({mob})
  this.setState({image: mob.image})
  setTimeout(() => {this.setState({playerMessage: `A ${this.state.mob.name} leaps at you!`})}, 0);
  setTimeout(() => {this.setState({playerMessage: ""})}, 1500);
  setTimeout(() => {this.setState({mobAttackMessage: `The ${mob.name} hits ${char.name} for ${mob.damage} points of damage!`})}, 1500);
  char.hp = (char.hp - mob.damage)
  this.setState({char});
  if (char.hp <= 0){
    setTimeout(() => {this.charDeath(char)}, 2000);
  }
  setTimeout(() => {this.setState({charAttackMessage: ""})}, 3000);
  setTimeout(() => {this.setState({mobAttackMessage: ""})}, 3000);
}


//builder commands below


set(arg, arg2){
  this.setState({arg: arg2})
  alert("This doesn't work yet.")
}

handleImmInput(event){
  this.setState({[event.target.name]: event.target.value});
}

heal(){
  let char = this.state.char
  this.state.char.hp = this.state.char.hpmax;
  this.state.char.sp = this.state.char.spmax;
  this.setState({char})
  this.setState({immWindow: ""})

}




goto(arg){
  let dest = rooms.filter(room => room.id == arg)
  dest = dest[0]
  console.log(dest)
  if (dest){
  this.setState({currentRoom: dest, immWindow: "", arg: ""});
  this.resetWindow();
}
else {
  alert("That's not a real room.")
}
}

peace(){
  this.setState({combat: false})
  alert('Combat stopped.')
}



  render(){

    if(this.state.isLoggedIn == true && this.state.char){
      this.state.gameOn = true;
    }
    const char = this.state.char
    const mob = this.state.mob
    const charWeapon = this.state.charWeapon
    const switchViewsButton = <button onClick={this.changeToCombatWindow}>Switch View</button>;
    const getRandomMob = <button onClick={this.randomMob}>Generate Mob</button>;
    const meleeAttackButton = <button onClick={()=> {this.meleeAttack(char, mob, charWeapon)}}>Melee Attack</button>;
    const magicAttackButton = <button onClick={()=> {this.magicAttack(char, mob, charWeapon)}}>Cast Spell</button>
    const runAwayButton = <button onClick={this.runAway}>Run Away!</button>
    const charAttackMessage = this.state.charAttackMessage;
    const mobAttackMessage = this.state.mobAttackMessage;
    const playerMessage = this.state.playerMessage;
    const command = this.state.immWindow
    const arg = this.state.arg
    const combatTitle = <h2>COMBAT!</h2>
    const immWindow = <div>

    <input className="immWindow" type="text" placeholder="input command" name="immWindow" value={this.state.immWindow} onChange={this.handleImmInput}/>
    <input type="text" placeholder="arg" name="arg" value={this.state.arg} onChange={this.handleImmInput}/>
    <button type="submit" onClick={()=>this.[command](arg)}>Go</button>
    </div>


  return (
      <div className="container">
        <div className="row toprow">

          <div className="col-5 box graphicsWindow" style={{padding: "0px"}}>
          <GraphicsWindow all={this.state}/>
          </div>
          <div className="col-1 effectsWindow">
          </div>
        <div className="col-6 box textWindow">
        {this.state.combat == true ? combatTitle : null}
        <p>{charAttackMessage}</p>
        <p>{mobAttackMessage}</p>
        <p>{playerMessage}</p>
        {this.state.combatwindow == false ? <Rooms all={this.state} travel={this.travel} goto={this.goto} currentRoom={this.state.currentRoom} changeRoomImage={this.changeRoomImage}/>
        : <p className="combatButtons">{meleeAttackButton}{magicAttackButton}{runAwayButton}</p>}
        {this.state.gameOn == true ? <p className="switchViewsButton">{switchViewsButton}</p> : null}
        {this.state.combat == false & this.state.combatwindow == true ? <p>{getRandomMob}</p> : null}
        </div>
    </div>

      <div className="row bottomRow">

        <div className="col-sm-12 box charWindow">
        <div className="centerNav"><Nav all={this.state}/></div>
        <React.Fragment>
    <Switch>
      <Route path="/login/" children=<Login gameOn={this.gameOn} all={this.state}/>/>
      <Route path="/character/create/" children=<CharCreate all={this.state} gameOn={this.gameOn}/>/>
      <Route path="/character/" children=<Character all={this.state}/>/>
      <Route path="/inventory/" component={Inventory}/>
      <Route path="/magic/" component={Magic}/>
      <Route path="/" children=<CharWindow heal={this.heal} all={this.state}/>/>
      </Switch>
    </React.Fragment>
    {this.state.builderInput === true ? immWindow : null}
        </div>
        </div>
        </div>

  );
}
}
export default App;
