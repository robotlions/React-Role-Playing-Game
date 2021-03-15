import React, {Component} from 'react';
import Cookies from 'js-cookie';
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
        }
this.handleInput = this.handleInput.bind(this);
this.handleChange = this.handleChange.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);

      }


      handleInput(event){
    this.setState({[event.target.name]: event.target.value});
  }

  handleChange(event) {
      this.setState({value: event.target.value});
    }




    async handleSubmit(e, obj){
      e.preventDefault();

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

    }



        render(){

          const charCreateForm = <form onSubmit={this.handleSubmit} className="charCreateForm">
          <input type="text" placeholder="Character name" name="name" value={this.state.name} onChange={this.handleInput} />
          <section className="dropdown">
                        <label >
                          Class
                          <select className="btn-sm btn-secondary dropdown-toggle" value={this.state.job} onChange={this.handleChange}>
                            <option value="warrior">Warrior</option>
                            <option value="magician">Magician</option>
                          </select>
                        </label>
                        </section>
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

          return(
            <div>
            {charCreateForm}</div>


          );
        }
      }

  export default CharCreate
