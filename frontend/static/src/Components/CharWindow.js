import React, {Component} from 'react';
import Cookies from 'js-cookie';
import '../App.css';


class CharWindow extends Component{
  constructor (props){
    super(props);
    this.state =  {
      defaultChar: {},
      isLoggedIn: !!Cookies.get('Authorization'),
      userId: !!localStorage.getItem('rpguser'),
    }
this.saveChar = this.saveChar.bind(this);
  }


saveChar(char){
  fetch(`/characters/save/${char.id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify({...char}),
    })
alert('Character saved!')
}






  render(){
    const char = this.props.all.char != undefined ? this.props.all.char : this.props.all.defaultChar
    const charWeapon = this.props.all.charWeapon
    const saveChar = <button className="saveButton" id="charSaveButton" onClick={()=>this.saveChar(char)}>Save Character</button>
    const charWindow = <div>
    <div className="row charbanner">
    <p className="col-2 char">Name</p>
    <p className="col-2 class">Class</p>
    <p className="col-1 lvl">Lvl</p>
    <p className="col-1 ac">AC</p>
    <p className="col-1 hp">HP</p>
    <p className="col-1 sp">SP</p>
    <p className="col-1 xp">XP</p>
    <p className="col-3 weapon">Weapon</p>
    </div>
    <div className="row char1row">
    <p className="col-2 char1">{char.name}</p>
    <p className="col-2 cl1">{char.job}</p>
    <p className="col-1 lvl1">{char.level}</p>
    <p className="col-1 ac1">{char.ac}</p>
    <p className="col-1 hp1">{char.hp}/{char.hpmax}</p>
    <p className="col-1 sp1">{char.sp != null ? `${char.sp}/${char.spmax}` : 'N/A'}</p>
    <p className="col-1 xp1">{char.xp}</p>
    <p className="col-3 weapon">{char.equippedWeapon ? `${char.equippedWeapon[0].material}  ${char.equippedWeapon[0].name}` : null}</p>
    </div></div>

  return (
<div className="saveRow">
    {this.props.all.char ? charWindow : <p>Welcome! Click "CREATE CHARACTER" above.</p>}
    {this.props.all.char && this.props.all.gameOn === true && this.props.all.char.name != "Percival the Demonstrative" ? saveChar : null}
    </div>
  );
}
}
export default CharWindow;
