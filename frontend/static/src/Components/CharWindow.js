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
}



  render(){
    const char = this.props.all.char != undefined ? this.props.all.char : this.props.all.defaultChar
    const charWeapon = this.props.all.charWeapon
    const saveChar = <button className="saveButton" id="charSaveButton" onClick={()=>this.saveChar(char)}>Save Character</button>
    const charWindow = <div>
    <div className="row charbanner">
    <div className="col-3 char">Name</div>
    <div className="col-2 class">Class</div>
    <div className="col-1 lvl">Lvl</div>
    <div className="col-1 ac">AC</div>
    <div className="col-1 hp">HP</div>
    <div className="col-1 sp">SP</div>
    <div className="col-1 xp">XP</div>
    <div className="col-1 weapon">Weapon</div>
    </div>
    <div className="row charSpace"></div>
    <div className="row char1row">
    <p className="col-3 char1">{char.name}</p>
    <p className="col-2 cl1">{char.job}</p>
    <p className="col-1 lvl1">{char.level}</p>
    <p className="col-1 ac1">{char.ac}</p>
    <p className="col-1 hp1">{char.hp}/{char.hpmax}</p>
    <p className="col-1 sp1">{char.sp != null ? `${char.sp}/${char.spmax}` : 'N/A'}</p>
    <p className="col-1 xp1">{char.xp}</p>
    <p className="col-1 weapon">{char.equippedWeapon ? char.equippedWeapon.name : null}</p>
    </div></div>

  return (
<div>
    {this.props.all.char ? charWindow : <p>Please log in to load your character or feel free to play our demo.</p>}
    {this.props.all.char && this.props.all.gameOn === true ? saveChar : null}
    </div>
  );
}
}
export default CharWindow;
