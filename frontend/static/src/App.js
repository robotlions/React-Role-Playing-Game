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
import Splash from './Components/Splash';
import Account from './Components/Account';
import Oauth from 'oauth';
import Spells from './Components/Spells';
import Builder from './Components/Builder';
import dungeonWalk from './images/dungeonWalk.gif';
import dungeonStatic from './images/dungeonStatic.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import arch from './images/arch.jpg';
import './App.css';
import victory from './images/victory.png'
import archWall from './images/archWall2.png'
import flame from './images/flame.gif'



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
      mobList: [],
      data: [],
      isLoggedIn: !!Cookies.get('Authorization'),
      image: "",
      defaultChar: {},
      playerMessage: "",
      currentRoom: {},
      immWindow: "",
      arg: "",
      builderInput: false,
      gameOn: false,
      startGame: false,
      combatClass : "",
      spells: [],
      magicAttack: false,
      tweetTitle: 'Here Be Dragons is a fun, retro RPG!',
      lightSpell: false,
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
this.handleInput = this.handleInput.bind(this);
this.handleImmInput = this.handleImmInput.bind(this);
this.goto = this.goto.bind(this);
this.travel = this.travel.bind(this);
this.peace = this.peace.bind(this);
this.set = this.set.bind(this);
this.logKey = this.logKey.bind(this);
this.gameOn = this.gameOn.bind(this);
this.startRandomFight = this.startRandomFight.bind(this);
this.timeHeal = this.timeHeal.bind(this);
this.startGame = this.startGame.bind(this);
this.startMagicAttack = this.startMagicAttack.bind(this);
this.handleSpellChange = this.handleSpellChange.bind(this);
this.handleSpellSubmit = this.handleSpellSubmit.bind(this);
this.sendTweet = this.sendTweet.bind(this);
this.checkLevel = this.checkLevel.bind(this);
this.levelUp = this.levelUp.bind(this);
this.resetNow = this.resetNow.bind(this);
this.showInfo = this.showInfo.bind(this);
this.mobAttack = this.mobAttack.bind(this);
this.light = this.light.bind(this);
this.checkLight = this.checkLight.bind(this);
this.checkFight = this.checkFight.bind(this);
  }

  componentDidMount(){

    // const charWeapon = {
    //         weaponId: 1,
    //         name: "longsword",
    //         damageLow: 2,
    //         damageHigh: 5,
    //         damMessage: "slashes",
    //       }


    const charSpell = {
            spellId: 1,
            name: "force bolt",
            damageLow: 2,
            damageHigh: 8,
            spCost: 4,
            damMessage: "slams"
    }

    const startRoom = {
          name: "Launch Room",
          static: arch,
          desc: "The default room on load",
          north: 11,
          lit: true,
          danger: false,
    }

          // this.setState({charWeapon})
          this.setState({currentRoom: startRoom});
          // this.setState({spells});


      fetch("/characters/")
    .then(response => response.json())
    .then(response => response[0])
    .then(response => this.setState({char: response}))

      fetch("/mobs/")
    .then(response => response.json())
    .then(response => this.setState({mobList: response}))

      fetch("/rooms/")
    .then(response => response.json())
    .then(response => this.setState({roomList: response}))
    const roomList = this.state.roomList

      fetch("/spells/")
    .then(response => response.json())
    .then(response => this.setState({spells: response}))
    const spells = this.state.spells

      document.addEventListener('keydown', this.logKey);



      this.timerID = setInterval(
        () => this.timeHeal(),
        10000
      );


      this.setState({image: arch})



}

logKey(e) {
  if(e.code === 'MetaRight'){
    this.setState(prevState => ({
      builderInput: !prevState.builderInput
    }));
  }

}
startGame(){
  const rooms = this.state.roomList
  this.goto(27)
  // this.setState({currentRoom: rooms[9]})
  this.setState({image: arch})
  this.setState({startGame: true});
}

gameOn(){
  const rooms = this.state.roomList
  this.setState({currentRoom: rooms[9]})
  this.setState({image: this.state.currentRoom.static})
  this.setState({gameOn: true});
}

changeToCombatWindow(){
  if (this.state.combatwindow == false) {
  this.setState({combatwindow: true})
}
else {
  this.setState({combatwindow: false})
}
}

handleSpellChange(event) {
  const spells = this.state.spells
  this.setState({charSpell: spells[event.target.value]});
}
handleSpellSubmit(event) {
  event.preventDefault();
}


rando(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

randomMob(){
  const mobList = this.state.mobList
  const rand = Math.floor(Math.random() * (mobList.length - 1) ) + 1;
  const mob = mobList[rand]
  this.setState({mob})
  setTimeout(() => {this.setState({playerMessage: `A ${this.state.mob.name} has entered the fight!`})}, 0);
  setTimeout(() => {this.setState({playerMessage: ""})}, 2000);

}

resetNow(){
  this.setState({combat: false,
  combatwindow: false,
  charAttackMessage: "",
  mobAttackMessage: "",
  playerMessage: "",
  magicAttack: false,
  levelUp: false,
  mob: {},
})
}

resetWindow(){
  setTimeout(() => {this.setState({combat: false,
  combatwindow: false,
  charAttackMessage: "",
  mobAttackMessage: "",
  playerMessage: "",
  magicAttack: false,
  mob: {},
  levelUp: false}
)}, 4000);
}

meleeAttack(char, mob, charWeapon) {
  this.setState({playerMessage: ""});
  this.setState({magicAttack: false})
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
    this.charWins(char, mob);
  }
  else{
    this.mobAttack(char, mob);
  }
}

magicAttack(char, mob, charWeapon){
  let charSpell = this.state.charSpell
  if(charSpell == null){
    this.setState({playerMessage: "Please choose a spell"});
    setTimeout(()=>{this.setState({playerMessage: ""})}, 1200);
    return;
  }

  else {
    this.setState({magicAttack: false})
    this.setState({playerMessage: ""})
    if (this.state.combat == false){
      this.setState({combat:  true});
    }

    if (char.sp >= charSpell.spCost ){
      char.sp = char.sp - charSpell.spCost
      let charDamage = this.rando(charSpell.damageLow, charSpell.damageHigh)
      setTimeout(() => {this.setState({charAttackMessage: `${char.name}'s ${charSpell.name} ${charSpell.damMessage} into the ${mob.name}, doing ${charDamage} damage!`})}, 100);
      mob.hp = mob.hp - charDamage
      this.setState({charSpell: null})
      if (mob.hp <= 0) {
        this.charWins(char, mob)
      }
      else{
        this.mobAttack(char, mob);
      }
    }
    else {
      if (char.sp < charSpell.spCost){
        this.setState({playerMessage: `You don't have enough spell points to cast that.`});
        setTimeout(() => {this.setState({playerMessage: ""})}, 1200);
        this.setState({charSpell: null})
      }
    }
  }
}

mobAttack(char, mob){
    let mobAttack = this.rando(1, 20) + mob.attack
    let charEvade = this.rando(1, 20) + char.ac
    if (mobAttack > charEvade){
      char.hp = (char.hp - mob.damage)
      this.setState({char});
      setTimeout(() => {this.setState({mobAttackMessage: `The ${mob.name} hits ${char.name} for ${mob.damage} points of damage!`})}, 1500);
      if (char.hp <= 0){
        setTimeout(() => {this.charDeath(char)}, 2000);
      }
    }
    else{
      setTimeout(()=>{this.setState({mobAttackMessage: `The ${mob.name} misses ${char.name}!`})}, 1000);
    }
    setTimeout(() => {this.setState({charAttackMessage: ""})}, 2500);
    setTimeout(() => {this.setState({mobAttackMessage: ""})}, 2500);
  }







charWins(char, mob){
  setTimeout(() => {this.setState({playerMessage: `${char.name} has defeated the ${mob.name}! The fight is over.`})}, 1000);
  setTimeout(() => {this.setState({playerMessage: `${char.name} receives ${mob.xp} points of experience.`})}, 2000);
  this.state.char.xp = this.state.char.xp + this.state.mob.xp
  this.setState({combat: false});
  setTimeout(() => {this.setState({image: victory})}, 1000);
  setTimeout(()=>{this.setState({image: this.state.currentRoom.static})}, 4000);
  // this.setState({tweetTitle: `${char.name} has defeated the ${mob.name}!`})
  // setTimeout(()=>{this.sendTweet()}, 500);
  this.setState({char});
  if(this.state.currentRoom.lit == true || this.state.lightSpell == true) {
    this.setState({image: this.state.currentRoom.static})
  }
  else{
    this.setState({image: ""})
  }
  this.checkLevel(char);
}

runAway(){
  this.setState({playerMessage: `You turn and run!`})
  setTimeout(() => {this.setState({combat: false})}, 1000);
  this.resetWindow();
}

charDeath(char){
  const rooms = this.state.roomList
  this.resetWindow();
  this.setState({playerMessage: "You have been killed. You materialize in the home room."});
  this.state.char.hp = this.state.char.hpmax;
  this.state.char.sp = this.state.char.spmax;
  <Rooms death={()=>this.setState({currentroom: rooms[9]})}/>
}

handleInput(event){
  this.setState({[event.target.name]: event.target.value});
}

travel(dest, dir) {
  this.setState({travelling: true});
  this.setState({currentRoom: ""})
  // this.setState({currentRoom: dest});
  this.setState({playerMessage: `You walk to the ${dir}.`})
  setTimeout(()=>{
  this.setState({travelling: false});
  this.setState({currentRoom: dest});
  this.setState({playerMessage: ""})
  this.checkLight();
  this.checkFight();
}, 700);

}

checkLight(){
    if(this.state.currentRoom.lit == true || this.state.lightSpell == true) {
      // if(this.state.currentRoom.walk){
      //   this.setState({image: this.state.currentRoom.walk})
      // }
      this.setState({image: this.state.currentRoom.static})
    }
    else{
      this.setState({image: ""})
    }
}

checkFight(){
  if(this.rando(1, 5) === 1 && this.state.currentRoom.danger === true){
    setTimeout(()=>{this.startRandomFight()}, 1200);
  }
}



startRandomFight(){
  const char = this.state.char
  this.setState({combat: true});
  this.setState({combatwindow: true});
  const mobList = this.state.mobList;
  const rand = Math.floor(Math.random() * (mobList.length - 1) ) + 1;
  const mob = mobList[rand]
  this.setState({mob})
  this.setState({image: mob.image})
  setTimeout(() => {this.setState({playerMessage: `A bloodthirsty ${this.state.mob.name} emerges from the shadows! \n Will you fight or flee?`})}, 500);
}

timeHeal() {
  if(this.state.char){
    const char = this.state.char;
    if(this.state.combat === false){
      if(this.state.char.hp < this.state.char.hpmax){
        this.state.char.hp = this.state.char.hp +1}
        this.setState({char});
        if(this.state.char.sp < this.state.char.spmax){
          this.state.char.sp = this.state.char.sp +1
          this.setState({char});
    }
}
}
}

startMagicAttack(char, mob, charWeapon){
  this.setState({magicAttack: true});
}

checkLevel(char){
const xp = char.xp
const level = char.level
if (xp >= 500 && level < 2){
  this.levelUp(char, 2)
  return;
}
if (xp >= 2000 && level < 3){
  this.levelUp(char, 3)
  return;
}
if (xp >= 8000 && level < 4) {
  this.levelUp(char, 4)
  return;
}
else {
  this.resetWindow();
}
}

async levelUp(char, level){
  this.setState({charAttackMessage: "", mobAttackMessage: ""});
  setTimeout(()=>{this.setState({playerMessage: `${char.name} raises to level ${level}!`})}, 5000);
  const hpmax = char.hpmax + 7 + Math.ceil(char.con/4);
  const spmax = char.spmax + 7 + Math.ceil(char.int/4);
  const attack = char.attack + 1;
  const ac = char.ac + 1;
  this.state.char.hpmax = hpmax;
  this.state.char.spmax = spmax;
  this.state.char.attack = attack;
  this.state.char.ac = ac;
  this.state.char.hp = hpmax;
  this.state.char.sp = spmax;
  this.state.char.level = level;
  setTimeout(()=>{this.setState({levelUp: true,
    playerMessage: `${char.name} gains power! Hit Points: ${hpmax}. Spell Points: ${spmax}. Attack: ${attack}. Armor Class: ${ac}. Congrats! Don't forget to save ${char.name}.`})}, 7000);
    this.setState({tweetTitle: `${char.name} has gained level ${level}! Join us at <url> to get in on old-school RPG fun!`})
    setTimeout(()=>{this.sendTweet()}, 500);
  }




//builder commands below

light(){
  let char = this.state.char
  this.setState({lightSpell: true})
  this.setState({playerMessage: `${char.name} casts Light! A hovering flame appears in the air, illuminating the area.`})
  setTimeout(()=>{this.checkLight();}, 100);
  setTimeout(()=>{this.setState({playerMessage: ""})}, 3000);

  setTimeout(()=>{this.setState({lightSpell: false})}, 300000)
}

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

slay(){
  this.state.mob.hp = 0;
}


goto(arg){
  fetch("/rooms/")
  .then(response => response.json())
  .then(response => this.setState({roomList: response}))

setTimeout(()=>{
  const rooms = this.state.roomList;
  let dest = rooms.filter(room => room.id == arg);
  dest = dest[0];
  console.log(dest);
  if (dest){
  this.setState({currentRoom: dest, immWindow: "", arg: ""});
  this.resetWindow();
}
else {
  alert("That's not a real room.")
}}, 100);
}


peace(){
  this.setState({combat: false})
  this.setState({image: this.state.currentRoom.static})
  this.setState({mob: null});
  this.setState({combatWindow: false});
  this.resetNow();
}


sendTweet() {
  const tweet = {
    title: this.state.tweetTitle,
    // content: this.state.tweetContent,
  }
    fetch(`/posts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(tweet),
      })
  }


showInfo(){
  alert('this will show spell, weapon and mob info when you click on them')
}









  render(){
    if(this.state.combat == true){
      this.state.combatClass = "AppCombat"}
    else {
      this.state.combatClass = "App"
    }

    if(this.state.isLoggedIn == true && this.state.char){
      this.state.gameOn = true;
    }
    if(this.state.combat == true){
      this.state.image = this.state.mob.image
    }

    const char = this.state.char ? this.state.char : {name: "filler", level: 5};
    const mob = this.state.mob;
    const charWeapon = char.equippedWeapon;
    const spells = this.state.spells;
    const spellChoice =
      <div className="spell-dropdown" value={this.state.charSpell}>
      <label>
        Pick your spell:
        <select onChange={this.handleSpellChange}>
        <option value={null}>Choose</option>
        {spells
          .filter(spell => spell.combat === true)
          .filter(spell => spell.level <= char.level)
          .map((spell, index) => (
          <option key={spell.id} value={index}>{spell.name}-{spell.spCost}sp</option>))}
        </select>
      </label>
      <input className="saveButton" type="submit" onClick={()=>this.magicAttack(char, mob, charWeapon)} value="Cast!" />
    </div>



    // console.log(this.state.mobList)
    const switchViewsButton = <button onClick={this.changeToCombatWindow}>Switch View</button>;
    const getRandomMob = <button onClick={this.randomMob}>Generate Mob</button>;
    const meleeAttackButton = <button onClick={()=> {this.meleeAttack(char, mob, charWeapon)}}>Melee Attack</button>;
    // const magicAttackButton = <button onClick={()=> {this.magicAttack(char, mob, charWeapon)}}>Cast Spell</button>
    const magicAttackButton = <button onClick={()=> {this.startMagicAttack(char, mob, charWeapon)}}>Cast Spell</button>
    const runAwayButton = <button onClick={this.runAway}>Run Away!</button>
    const charAttackMessage = this.state.charAttackMessage;
    const mobAttackMessage = this.state.mobAttackMessage;
    const playerMessage = this.state.playerMessage;
    const command = this.state.immWindow
    const combatStatus = this.state.combatClass
    const arg = this.state.arg
    const combatTitle = <h2>COMBAT!</h2>
    const startButton = <button id="startButton" className="saveButton" Click={this.gameOn}>Start Game</button>

    const immWindow = <div>
    <input className="immWindow" type="text" placeholder="input command" name="immWindow" value={this.state.immWindow} onChange={this.handleImmInput}/>
    <input type="text" placeholder="arg" name="arg" value={this.state.arg} onChange={this.handleImmInput}/>
    <button type="submit" onClick={()=>this.[command](arg)}>Go</button>
    </div>

    const spellMenu = this.state.spells.map((spell) =>(
      <section key={spell.id}>
    <p>Name: {spell.name}</p>
    <p>Element {spell.element}</p>
  </section>));


    const continueButton = <button className="saveButton" onClick={this.resetNow}>Continue</button>


  return (
    <div className={`${combatStatus}`}>
   {this.state.startGame == false ? <Splash gameOn={this.gameOn} all={this.state} startGame={this.startGame}/> :
      <div className="container-fluid">
        <div className="row topRow">

          <div className={`col-md-4 box graphicsWindow`} style={{padding: "0px"}}>
          <GraphicsWindow all={this.state}/>
          </div>
<div className="col-1 fireCol">{this.state.lightSpell === true ? <img className="fireGif" src={flame} alt="fire"/> : null} </div>
        <div className={`col-md-7 box textWindow`}>
        {this.state.combat == true ? combatTitle : null}
        <p>{charAttackMessage}</p>
        <p>{mobAttackMessage}</p>
        <p>{playerMessage}</p>
        {this.state.combatwindow == false ? <Rooms all={this.state} travel={this.travel} goto={this.goto} currentRoom={this.state.currentRoom} changeRoomImage={this.changeRoomImage}/>
        : <p className="combatButtons">{meleeAttackButton}{magicAttackButton}{runAwayButton}</p>}
        {this.state.magicAttack === true ? spellChoice : null}
        {this.state.levelUp === true ? continueButton : null}

        </div>
    </div>
    <div className="row divider"></div>
    <div className="centerNav"><Nav all={this.state}/></div>
      <div className="row bottomRow">

        <div className={`col-sm-12 box charWindow`}>
      <React.Fragment>
      <Switch>
      <Route path="/account/" children=<Account gameOn={this.gameOn} all={this.state}/>/>
      <Route path="/character/create/" children=<CharCreate all={this.state} gameOn={this.gameOn}/>/>
      <Route path="/character/" children=<Character all={this.state}/>/>
      <Route path="/inventory/" component={Inventory}/>
      <Route path="/magic/" children=<Spells light={this.light} showInfo={this.showInfo} all={this.state}/>/>
      <Route path="/build/" children=<Builder goto={this.goto} all={this.state}/>/>
      <Route path="/" children=<CharWindow heal={this.heal} all={this.state}/>/>
      </Switch>
    </React.Fragment>
    {this.state.builderInput === true ? immWindow : null}
        </div>
        </div>
        </div>}
</div>
  );
}
}
export default App;
