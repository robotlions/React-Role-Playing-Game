import React, {Component} from 'react';
import Cookies from 'js-cookie';
import {useState} from 'react';
import '../App.css';

class Character extends Component {
  constructor (props){
        super(props);
        this.state = {
        isLoggedIn: !!Cookies.get('Authorization'),
        }
      }
        render(){
const char = this.state.isLoggedIn ? this.props.all.char : this.props.all.defaultChar
const charSheet1 = <div className="charSheet">
<p>Name: {char.name}</p>
<p>Class: {char.job}</p>
<p>Level: {char.level}</p>
</div>
const charSheet2 = <div className="charSheet">
<p>Armor: {char.ac}</p>
<p>Health: {char.hp}</p>
<p>Max Health: {char.hpmax}</p>
</div>
const charSheet3 = <div className="charSheet">
<p>Magic: {char.sp}</p>
<p>Max Magic: {char.spmax}</p>
<p>Experience: {char.xp}</p>
</div>


  return(

    <div className="row">
    <div className="col">
    {charSheet1}
    </div>
    <div className="col">
    {charSheet2}
    </div>
    <div className="col">
    {charSheet3}
    </div>
    </div>

  );
}
}
export default Character;
