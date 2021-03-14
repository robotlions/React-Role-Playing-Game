import React, {Component} from 'react';
import {useState} from 'react';
import '../App.css';

class Character extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){
const char = this.props.all.char
const charSheet = <div className="charSheet">
<p>Name: {char.name}</p>
<p>Class: {char.job}</p>
<p>Level: {char.level}</p>
<p>Armor: {char.ac}</p>
<p>Health: {char.hp}</p>
<p>Max Health: {char.hpmax}</p>
<p>Magic: {char.sp}</p>
<p>Max Magic: {char.spmax}</p>
<p>Experience: {char.xp}</p>
</div>


  return(

    <div >
    {charSheet}
    </div>

  );
}
}
export default Character;
