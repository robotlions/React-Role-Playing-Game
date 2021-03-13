import React, {Component} from 'react';
import '../App.css';

class Character extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){
const char = this.props.all.char
const charSheet = <div>
<p>Name: {char.name}</p>
<p>Job: {char.job}</p>
<p>Level: {char.level}</p>
<p>Armor: {char.ac}</p>
<p>Hit Points: {char.hp}</p>
<p>Max Hit Points: {char.hpmax}</p>
<p>Spell Points: {char.sp}</p>
<p>Max Spell Points {char.spmax}</p>
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
