import React, {Component} from 'react';
import './App.css';


class CharWindow extends Component{
  constructor (props){
    super(props);
    this.state =  {
      charId: "",
      name: "",
      lvl: "",
      ac: "",
      hpmax: "",
      hp: "",
      spmax: "",
      sp: "",
      class: "",
      weapon: "",
    }
this.saveChar = this.saveChar.bind(this);
  }

saveChar(char){
  localStorage.setItem('char', JSON.stringify(char))
}


  componentDidMount(){
          // this.setState(this.props.char)
}

  render(){
    const char = this.props.all.char
    const charWeapon = this.props.all.charWeapon
    const saveChar = <button onClick={()=>this.saveChar(char)}>Save Character</button>
    const healChar = <button onClick={this.props.healChar}>Heal Character</button>

  return (
    <div className="App">
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
    <p className="col-1 weapon">{charWeapon.name}</p>
    </div>
    <div className="row char2row">
    <p className="col-3 char2"></p>
    <p className="col-2 lvl2"></p>
    <p className="col-2 ac2"></p>
    <p className="col-2 hp2"></p>
    <p className="col-2 sp2"></p>
    <p className="col-1 cl2"></p>
    </div>
    <div className="row char3row">
    <p className="col-3 char3"></p>
    <p className="col-2 lvl3"></p>
    <p className="col-2 ac3"></p>
    <p className="col-2 hp3"></p>
    <p className="col-2 sp3"></p>
    <p className="col-1 cl3"></p>
    </div>
    {saveChar}
    {healChar}
    </div>
  );
}
}
export default CharWindow;
