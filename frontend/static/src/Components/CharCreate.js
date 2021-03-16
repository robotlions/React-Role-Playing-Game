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
          armor: 10,
          health: 10,
          magic: 10,
        isLoggedIn: !!Cookies.get('Authorization'),
        completed: "",
        }
this.handleInput = this.handleInput.bind(this);
this.handleDropdown = this.handleDropdown.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

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
        name: this.state.name,
        job: this.state.job,
        level: this.state.level,
        ac: this.state.armor,
        hp: this.state.health,
        sp: this.state.magic,
        hpmax: this.state.health,
        spmax: this.state.magic,
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



        render(){

          const charCreateForm = <form onSubmit={this.handleSubmit} className="charCreateForm">
          <label>Character Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleInput} />
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
          <label>Health: </label>
          <input className="createField" type="text" placeholder="Health" name="health" value={this.state.health} onChange={this.handleInput} readOnly/>
          <label>Magic: </label>
          <input className="createField" type="text" placeholder="Magic" name="magic" value={this.state.magic} onChange={this.handleInput} readOnly/>
          <input hidden name="hpmax" value={this.state.health} readOnly/>
          <input hidden name="spmax" value={this.state.magic} readOnly/>
          <input hidden name="xp" value='0' readOnly/>
          <button className="btn btn-success" type="submit">Save this Character</button></form>

const createMessage = `${this.state.completed}`



          return(
            <div>
            {charCreateForm}
            {createMessage}
            </div>


          );
        }
      }

  export default CharCreate
