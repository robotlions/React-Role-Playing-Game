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
const char = this.props.all.char != undefined ? this.props.all.char : this.props.all.defaultChar
const charSheet1 = <div className="charSheet">
<p>Name: {char.name}</p>
<p>Class: {char.job}</p>
<p>Level: {char.level}</p>
</div>
const charSheet2 = <div className="charSheet">
<p>Strength: {char.str} (+{char.strBonus})</p>
<p>Intelligence: {char.int} (+{char.intBonus})</p>
<p>Dexterity: {char.dex} (+{char.dexBonus})</p>
<p>Constitution: {char.con} (+{char.conBonus})</p>
</div>
const charSheet3 = <div className="charSheet">
<p>Armor: {char.ac}</p>
<p>Health: {char.hp}</p>
<p>Max Health: {char.hpmax}</p>
<p>Attack: {char.attack}</p>
</div>
const charSheet4 = <div className="charSheet">
<p>Magic: {char.sp}</p>
<p>Max Magic: {char.spmax}</p>
<p>Experience: {char.xp}</p>
</div>

  return(
this.state.isLoggedIn ? <section>
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
    <div className="col">
    {charSheet4}</div></div></section>
   : null

  );
}
}
export default Character;
