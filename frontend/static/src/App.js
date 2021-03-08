import React, {Component} from 'react';
import TextWindow from './TextWindow';
import CharWindow from './CharWindow';
import GraphicsWindow from './GraphicsWindow';
import Rooms from './Rooms';
import CombatWindow from './CombatWindow'
import moblist from './moblist'
import rooms from './roomlist'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



class App extends Component{
  constructor (props){
    super(props);
    this.state = {
      combatwindow: false,
      combat: false,
      char : {},
      charWeapon: {},
      mob: {},
      charSpell: {},
      charAttackMessage: "",
      mobAttackMessage: "",
      data: [],
    }
this.charDeath = this.charDeath.bind(this);
this.changeToCombatWindow = this.changeToCombatWindow.bind(this);
this.meleeAttack = this.meleeAttack.bind(this);
this.magicAttack = this.magicAttack.bind(this);
this.runAway = this.runAway.bind(this);
this.rando = this.rando.bind(this);
this.resetWindow = this.resetWindow.bind(this);
this.randomMob = this.randomMob.bind(this);
this.healChar = this.healChar.bind(this);
this.charWins = this.charWins.bind(this);
  }

  componentDidMount(){
    const char = {
            charId: 1,
            name: "Wingrave",
            lvl: "1",
            ac: 10,
            hpmax: 8,
            hp: 8,
            spmax: 8,
            sp: 8,
            class: 'ranger',
            weapon: "",
            xp: 0,
          }

    const charWeapon = {
            weaponId: 1,
            name: "longsword",
            damageLow: 2,
            damageHigh: 5,
            damMessage: "slashes",
          }

    const mob = {
            mobId: 1,
            name: "Bob the Dummy",
            damage: 1,
            hp: 10,
            hpmax: 10,
            sp: "null",
            spmax: "null",
            ac: 10,
            weapon: "wooden sword",
            damMessage: "pokes",
    }
    const charSpell = {
            spellId: 1,
            name: "force bolt",
            damageLow: 2,
            damageHigh: 8,
            spCost: 4,
            damMessage: "slams"
    }
          // if (localStorage.getItem('char')){
          //   let loadChar = JSON.parse(localStorage.getItem('char'));
          //   this.setState({char: loadChar});
          // }
          // else{
          //   this.setState({char})
          // }

          this.setState({charWeapon})
          this.setState({mob})
          this.setState({charSpell})


        fetch("/characters/")
      .then(response => response.json())
      .then(response => response[0])
      .then(response => this.setState({char: response}));


      // this.state.data.map((data) => (this.setState({char: data})))

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
  this.setState({playerMessage: `A ${this.state.mob.name} has entered the fight!`})
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
  const damage = this.rando(charWeapon.damageLow, charWeapon.damageHigh)
  mob.hp = mob.hp - damage
  this.setState({charAttackMessage: `${char.name} ${charWeapon.damMessage} the ${mob.name} for ${damage} points of damage!`});
  if (mob.hp <= 0) {
    this.charWins(char, mob)
  }
  else{
    setTimeout(() => {this.setState({mobAttackMessage: `The ${mob.name} hits ${char.name} for ${mob.damage} points of damage!`})}, 1500);
    char.hp = (char.hp - mob.damage)
    this.setState({char});
    if (char.hp <= 0){
      setTimeout(() => {this.charDeath(char)}, 2000);
    }
    setTimeout(() => {this.setState({charAttackMessage: ""})}, 4000);
    setTimeout(() => {this.setState({mobAttackMessage: ""})}, 4000);
  }
}

magicAttack(char, mob, charWeapon){
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
    char.hp = (char.hp - mob.damage)
    this.setState({char});
    setTimeout(() => {this.setState({mobAttackMessage: `The ${mob.name} hits ${char.name} for ${mob.damage} points of damage!`})}, 1500);
    setTimeout(() => {this.setState({charAttackMessage: ""})}, 4000);
    setTimeout(() => {this.setState({mobAttackMessage: ""})}, 4000);
  }
}

charWins(char, mob){
  setTimeout(() => {this.setState({playerMessage: `${char.name} has defeated the ${mob.name}! The fight is over.`})}, 1000);
  setTimeout(() => {this.setState({playerMessage: `${char.name} receives ${mob.xp} points of experience.`})}, 2500);
  this.state.char.xp = this.state.char.xp + this.state.mob.xp
  this.setState({char})
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

healChar(){
  let char = this.state.char
  this.state.char.hp = this.state.char.hpmax;
  this.state.char.sp = this.state.char.spmax;
  this.setState({char})

}




  render(){
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



  return (
    <div className="App">
      <div className="container">
        <div className="row toprow">
          <div className="col-5 box graphicsWindow" style={{padding: "0px"}}>
          <GraphicsWindow />
          </div>
          <div className="col-1 box effectsWindow">
          </div>
        <div className="col-6 box textWindow">
        <p>{charAttackMessage}</p>
        <p>{mobAttackMessage}</p>
        <p>{playerMessage}</p>
        {this.state.combatwindow == false ? <Rooms />
        : <p className="combatButtons">{meleeAttackButton}{magicAttackButton}{runAwayButton}</p>}
        <p className="switchViewsButton">{switchViewsButton}</p>
        {this.state.combat == false & this.state.combatwindow == true ? <p>{getRandomMob}</p> : null}
        </div>
    </div>
      <div className="row bottomrow">
        <div className="col-12 box charWindow">
          <CharWindow healChar={this.healChar} all={this.state}/></div>
        </div>
        </div>
        </div>
  );
}
}
export default App;
