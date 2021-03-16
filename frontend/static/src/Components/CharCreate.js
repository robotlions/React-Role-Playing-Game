import React, {Component} from 'react';
import Cookies from 'js-cookie';
import JobDropdown from './JobDropdown'
import {useState} from 'react';
import '../App.css';

class CharCreate extends Component {
  constructor (props){
        super(props);
        this.state = {
          name: "",
          job: "",
          level: 1,
          attack: 10,
          armor: 10,
          health: 10,
          magic: 10,
          str: 10,
          int: 10,
          dex: 10,
          con: 10,
          available: 15,

        isLoggedIn: !!Cookies.get('Authorization'),
        completed: "",
        }
this.handleInput = this.handleInput.bind(this);
this.handleDropdown = this.handleDropdown.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.statUp = this.statUp.bind(this);
this.statDown = this.statDown.bind(this);

      }


      handleInput(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleDropdown(event) {
      this.setState({job: event.target.value});
    }



    async handleSubmit(e){
      e.preventDefault();
      const obj = {
        attack: this.state.attack,
        name: this.state.name,
        job: this.state.job,
        level: this.state.level,
        ac: this.state.armor,
        hp: this.state.health,
        sp: this.state.magic,
        hpmax: this.state.health,
        spmax: this.state.magic,
        str: this.state.str,
        int: this.state.int,
        dex: this.state.dex,
        con: this.state.con,
        xp: 0,

      }
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: JSON.stringify(obj),
      };
      const handleError = (err) => console.warn(err);
      const response = await fetch('/characters/create/', options);
      const data = await response.json().catch(handleError);
      if(response.ok){
        this.setState({completed: `Character ${data.name}, a level ${data.level} ${data.job}, created!`})
        this.setState({name: ""})
        this.setState({job: "Choose"})
      }
    }


statUp(stat){
  const tar = stat.target.name
  let newStat = this.state.[tar]
  let avail = this.state.available
  let abil
  if (avail > 0){
    newStat += 1
    avail -= 1
    this.setState({[tar]: newStat})
    this.setState({available: avail})
}
  else {
    alert('No available points')
}
  this.state.attack = (10 + (this.state.str-10))
  this.state.health = (10 + (this.state.con-10))
  this.state.magic = (10 + (this.state.int-10))
  this.state.armor = (10 + (this.state.dex-10))
}

statDown(stat){
  const tar = stat.target.name
  let newStat = this.state.[tar]
  let avail = this.state.available
  if (newStat >= 6){
  newStat -= 1
  avail += 1
  this.setState({[tar]: newStat})
  this.setState({available: avail})
}
else{
  alert('This stat cannot go lower')
}
this.state.attack = (10 + (this.state.str-10))
this.state.health = (10 + (this.state.con-10))
this.state.magic = (10 + (this.state.int-10))
this.state.armor = (10 + (this.state.dex-10))
}



        render(){

          const charCreateForm = <form onSubmit={this.handleSubmit} className="charCreateForm">
          <label>Character Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleInput} /><br/>
            <label>
              Character Class:
              <select value={this.state.job} onChange={this.handleDropdown}>
                <option value="Choose">Choose</option>
                <option value="Warrior">Warrior</option>
                <option value="Magician">Magician</option>
              </select>
            </label>
          <label>Level: </label>
          <input className="createField" type="text" placeholder="Lvl 1" name="level" value={this.state.level} onChange={this.handleInput} readOnly/>
          <label>Armor: </label>
          <input className="createField" type="text" placeholder="Armor" name="armor" value={this.state.armor} onChange={this.handleInput} readOnly/>
          <label>Attack: </label>
          <input className="createField" type="text" placeholder="Attack" name="attack" value={this.state.attack} onChange={this.handleInput} readOnly/>

          <label>Health: </label>
          <input className="createField" type="text" placeholder="Health" name="health" value={this.state.health} onChange={this.handleInput} readOnly/>
          <label>Magic: </label>
          <input className="createField" type="text" placeholder="Magic" name="magic" value={this.state.magic} onChange={this.handleInput} readOnly/>
          <button className="btn btn-success charSubmit" type="submit">Save this Character</button>
          <br/>
          <input hidden name="hpmax" value={this.state.health} readOnly/>
          <input hidden name="spmax" value={this.state.magic} readOnly/>
          <input hidden name="xp" value='0' readOnly/>
          <br/></form>

  const stats = <div>
          <label>Strength: </label>
          <input className="createField" type="text" name="str" value={this.state.str}readOnly/><button name="str" value={this.state.str} onClick={this.statUp}>+</button><button value={this.state.str} name="str" onClick={this.statDown}>-</button>
          <label>Intelligence: </label>
          <input className="createField" type="text" name="int" value={this.state.int}readOnly/><button name="int" value={this.state.int} onClick={this.statUp}>+</button><button name="int" value={this.state.int} onClick={this.statDown}>-</button>
          <label>Dexterity: </label>
          <input className="createField" type="text" name="dex" value={this.state.dex}readOnly/><button name="dex" value={this.state.dex} onClick={this.statUp}>+</button><button name="dex" value={this.state.dex} onClick={this.statDown}>-</button>
          <label>Constitution: </label>
          <input className="createField" type="text" name="con" value={this.state.con}readOnly/><button name="con" value={this.state.con} onClick={this.statUp}>+</button><button name="con" value={this.state.con} onClick={this.statDown}>-</button>
          <label>Available Points</label>
          <input className="createField" type="int" name="available" value={this.state.available} readOnly/>
          </div>

const createMessage = `${this.state.completed}`



          return(
            <div>
            {charCreateForm}
            {stats}
            {createMessage}
            </div>


          );
        }
      }

  export default CharCreate
