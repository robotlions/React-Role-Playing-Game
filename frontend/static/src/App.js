import React, {Component} from 'react';
import { withRouter } from 'react-router';
import {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import CharWindow from './Components/CharWindow';
import GraphicsWindow from './Components/GraphicsWindow';
import Rooms from './Components/Rooms';
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
      mobInRoom: {},
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
      tweetTitle: 'Retro role playing games are fun!',
      lightSpell: false,
    }
this.charDeath = this.charDeath.bind(this);
this.changeToCombatWindow = this.changeToCombatWindow.bind(this);
this.meleeAttack = this.meleeAttack.bind(this);
this.magicAttack = this.magicAttack.bind(this);
this.runAway = this.runAway.bind(this);
this.rando = this.rando.bind(this);
this.resetWindow = this.resetWindow.bind(this);
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
this.conjure = this.conjure.bind(this);
this.drop = this.drop.bind(this);
this.equip = this.equip.bind(this);
this.unequip = this.unequip.bind(this);
this.checkMob = this.checkMob.bind(this);
this.buy = this.buy.bind(this);
this.summon = this.summon.bind(this);
this.newChar = this.newChar.bind(this);
this.useItem = this.useItem.bind(this);
this.useTorch = this.useTorch.bind(this);
this.checkShop = this.checkShop.bind(this);
this.awardTreasure = this.awardTreasure.bind(this);
  }

  componentDidMount(){


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


          this.setState({currentRoom: startRoom});



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

    fetch("/items/")
  .then(response => response.json())
  .then(response => this.setState({itemList: response}))
  const itemList = this.state.itemList

      document.addEventListener('keydown', this.logKey);




      this.timerID = setInterval(
        () => this.timeHeal(),
        10000
      );


      this.setState({image: arch})



}

newChar(){
  fetch("/characters/")
.then(response => response.json())
.then(response => response[0])
.then(response => this.setState({char: response}))
}


logKey(e) {
  if(this.state.char){
  let char = this.state.char
  if(e.code === 'MetaRight' && char.builder===true){
    this.setState(prevState => ({
      builderInput: !prevState.builderInput
    }));
  }
}

}
startGame(){
  const rooms = this.state.roomList
  this.goto(27)
  this.setState({image: arch})
  this.setState({startGame: true});
}

gameOn(){
  const rooms = this.state.roomList
  this.goto(27)
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

// randomMob(){
//   const mobList = [...this.state.mobList]
//   const rand = Math.floor(Math.random() * (mobList.length - 1) ) + 1;
//   const mob = mobList[rand]
//   this.setState({mob})
//   this.props.history.push("/main/");
//   setTimeout(() => {this.setState({playerMessage: `A ${mob.name} has entered the fight!`})}, 0);
//   setTimeout(() => {this.setState({playerMessage: ""})}, 2000);
//
// }

resetNow(){
  this.setState({combat: false,
  combatwindow: false,
  charAttackMessage: "",
  mobAttackMessage: "",
  playerMessage: "",
  magicAttack: false,
  levelUp: false,
  mob: {},
  image: this.state.currentRoom.static,
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
  levelUp: false,
  image: this.state.currentRoom.static,
})}, 4000);
}

meleeAttack(char, mob) {
  const charWeapon = this.state.char.equippedWeapon[0]
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
    const damage = (this.rando(charWeapon.damageLow, charWeapon.damageHigh) + char.strBonus)
    mob.hp = mob.hp - damage
    this.setState({charAttackMessage: `${char.name}'s ${charWeapon.material} ${charWeapon.name} ${charWeapon.damMessage} the ${mob.name} for ${damage} points of damage!`});
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
  this.awardTreasure(char, mob)
  this.checkLevel(char);
}

awardTreasure(char, mob){
  let treasure = this.rando(1, mob.silver)
  setTimeout(()=>{this.setState({playerMessage: `The ${mob.name} was carrying ${treasure} silver! The money goes into ${char.name}'s stash.`})}, 1000)
  char.silver = char.silver + treasure
  this.setState({char})
  this.resetWindow();
}



runAway(){
  this.setState({playerMessage: `You turn and run!`})
  setTimeout(() => {this.setState({combat: false})}, 1000);
  this.resetWindow();
}

charDeath(char){
  const rooms = this.state.roomList
  this.resetWindow();
  this.setState({playerMessage: `${char.name} has been killed.`});
  this.state.char.hp = this.state.char.hpmax;
  this.state.char.sp = this.state.char.spmax;
  this.setState({tweetTitle: `${char.name} has been killed! Avenge this fallen hero's death at BRIDGE RPG.`})
  setTimeout(()=>{this.sendTweet()}, 500);
  this.goto(30);

  // <Rooms death={()=>this.setState({currentroom: rooms[9]})}/>
}

handleInput(event){
  this.setState({[event.target.name]: event.target.value});
}

travel(dest, dir) {
  this.setState({travelling: true});
  this.setState({currentRoom: ""})
  this.setState({playerMessage: `You walk to the ${dir}.`})
  setTimeout(()=>{
  this.setState({travelling: false});
  this.setState({currentRoom: dest});
  this.setState({playerMessage: ""})
  this.checkLight();
  this.checkFight();
  this.checkMob();
}, 700);

}

checkLight(){
    if(this.state.currentRoom.lit == true || this.state.lightSpell == true) {
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

checkMob(){
  let mobList = [...this.state.mobList]
  let mobId = this.state.currentRoom.mobInRoom
  let mobInRoom = mobList.filter(mob => mob.id == mobId)
  this.setState({mobInRoom})
  this.checkShop()
}

  checkShop(){
    if(this.state.mobInRoom.length > 0){
    let char = this.state.char
    let mob = this.state.mobInRoom
    if(mob[0].isShopkeeper === true){
      this.props.history.push("/inventory/")
    }
  }
  }

startRandomFight(){
  this.props.history.push("/main/");
  let mobGen = [...this.state.mobList];
  let rand = this.rando(1, 4) - 1;
  let mob = mobGen[rand]
  if(mob.isShopkeeper != true){
    this.setState({mob});
    this.setState({image: mob.image});
    this.setState({combat: true});
    this.setState({combatwindow: true});
    setTimeout(() => {this.setState({playerMessage: `A bloodthirsty ${mob.name} emerges from the shadows! \n Will you fight or flee?`})}, 500);
  }
  else{
    this.startRandomFight()
  }
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
    this.setState({tweetTitle: `${char.name} has gained level ${level}! Join us at BRIDGE to get in on old-school RPG fun!`})
    setTimeout(()=>{this.sendTweet()}, 500);
  }

useItem(id){
  alert('future use item function')

  }

useTorch(){
  let char = this.state.char
  this.drop(4);
  this.setState({lightSpell: true, playerMessage: `${char.name} lights a torch.`})
  setTimeout(()=>{this.checkLight();}, 100);
  setTimeout(()=>{this.setState({playerMessage: ""})}, 4000);
  setTimeout(()=>{this.setState({lightSpell: false})}, 300000);

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
  if(this.state.isLoggedIn==true){
  fetch("/rooms/")
  .then(response => response.json())
  .then(response => this.setState({roomList: response}))

setTimeout(()=>{
  const rooms = this.state.roomList;
  let dest = rooms.filter(room => room.id == arg);
  dest = dest[0];
  if (dest){
  this.setState({currentRoom: dest, immWindow: "", arg: ""});
  this.resetWindow();
}
else {
  alert("That's not a real room.")
}}, 100);
}
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

buy(id){
  const shop = {...this.state.mobInRoom}
  const char = {...this.state.char}
  let item = shop[0].inventory.filter(i => i.id == id)
  item = item[0]
  const price = item.value
  const wallet = char.silver
  if (wallet > price){
    this.conjure(id)
    char.silver = char.silver - price
    this.setState({char})
  }
  else{
    alert(`You don't have the silver for the ${item.name}.`)
  }
}

conjure(id){
  const char = {...this.state.char}
  const itemList = this.state.itemList
  let i = itemList.filter(item => item.id == id)
  i = i[0]
  char.inventory.push(i);
  this.setState({char})
  this.setState({currentItem: i})
}



summon(id){
  const mobGen = [...this.state.mobList]
  let mob = mobGen.filter(mob => mob.id == id)
  mob=mob[0];
  alert(`A ${mob.name} appears!`);
  this.setState({mob});
  this.setState({mobInRoom: mob});
}


drop(id){
const char = {...this.state.char}
let i = char.inventory.findIndex(item => item.id == id)
char.inventory.splice(i, 1)
this.setState({char})
}


equip(id){
  const char = {...this.state.char}
  const inv = char.inventory
    if(char.equippedWeapon[0] && char.equippedWeapon[0].name != "Bare hands"){
      this.unequip()
    }
    let i = inv.findIndex(item => item.id == id)
    let weapon = inv.filter(item => item.id == id)
    weapon = weapon[0]
    if(weapon.isWeapon == true){
      char.inventory.splice(i, 1)
      char.equippedWeapon[0] = weapon
      this.setState({char})}
      else {
        alert(`That's not a weapon.`)
      }
    }


unequip(){
  const char = {...this.state.char}
  const itemList = this.state.itemList
  let i = char.equippedWeapon[0].id
  let weapon = itemList.filter(item => item.id == i)
  weapon = weapon[0]
  char.equippedWeapon = [{name: "Bare hands", id: "NA"}];
  char.inventory.push(weapon);
  this.setState({char});
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



    const switchViewsButton = <button onClick={this.changeToCombatWindow}>Switch View</button>;
    const getRandomMob = <button onClick={this.randomMob}>Generate Mob</button>;
    const meleeAttackButton = <button onClick={()=> {this.meleeAttack(char, mob, charWeapon)}}>Melee Attack</button>;
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

    const immWindow = <div id="immWindow">
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

          <div className={`col-sm-4 box graphicsWindow`} style={{padding: "0px"}}>
          <GraphicsWindow all={this.state}/>
          </div>
<div className="col-sm-1 fireCol">{this.state.lightSpell === true ? <img className="fireGif" src={flame} alt="fire"/> : null} </div>
        <div className={`col-sm-7 box textWindow`}>
        {this.state.combat == true ? combatTitle : null}
        <p>{charAttackMessage}</p>
        <p>{mobAttackMessage}</p>

        {this.state.combatwindow == false ? <Rooms all={this.state} buy={this.buy} travel={this.travel} goto={this.goto} currentRoom={this.state.currentRoom} changeRoomImage={this.changeRoomImage}/>
        : <p className="combatButtons">{meleeAttackButton}{magicAttackButton}{runAwayButton}</p>}
        {this.state.magicAttack === true ? spellChoice : null}
        {this.state.levelUp === true ? continueButton : null}
        <p>{playerMessage}</p>

        </div>
    </div>
    <div className="row divider"></div>
      <div className="row bottomRow">

        <div className={`col-md box charWindow`}>
        <div className="centerNav"><Nav all={this.state}/></div>
      <React.Fragment>
      <Switch>
      <Route path="/account/" children=<Account gameOn={this.gameOn} all={this.state}/>/>
      <Route path="/character/create/" children=<CharCreate all={this.state} conjure={this.conjure} newChar={this.newChar} gameOn={this.gameOn}/>/>
      <Route path="/character/" children=<Character all={this.state}/>/>
      <Route path="/inventory/" children=<Inventory useTorch={this.useTorch} useItem={this.useItem} drop={this.drop} equip={this.equip} unequip={this.unequip} all={this.state}/>/>
      <Route path="/magic/" children=<Spells light={this.light} showInfo={this.showInfo} all={this.state}/>/>
      <Route path="/build/" children=<Builder goto={this.goto} all={this.state}/>/>
      <Route path="/main/" children=<CharWindow heal={this.heal} all={this.state}/>/>

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
export default withRouter(App);
