
import React, {Component} from 'react';
import '../App.css';

class Inventory extends Component {
  constructor (props){
        super(props);
        this.state = {
        count: []
        }

      }


        render(){
// const char = {...this.props.all.char}
// const inv = char.inventory || {name: "bob", id: "3"}
// const currentWeapon = char.equippedWeapon ? char.equippedWeapon[0] : {material:"none", name:"none", damageLow:"none", damageHigh:"none"}
// const inventoryEquippedWeapon = <div>
// <h4>Equipped Weapon</h4>
// <p>Name: {currentWeapon.material} {currentWeapon.name}</p>
// <p>Damage: {currentWeapon.damageLow} - {currentWeapon.damageHigh}
// {this.props.all.char.equippedWeapon ? <button className="gameButton" onClick={this.props.unequip}>Unequip</button> : null}
// </p></div>



let currentWeapon = this.props.all.char.equippedWeapon[0] ? this.props.all.char.equippedWeapon[0] : {material:"none", name:"none", damageLow:"0", damageHigh:"0"}
const inv = this.props.all.char.inventory
const inventoryEquippedWeapon = <div>
<h4>Equipped Weapon</h4>
<p>Name: {currentWeapon.material} {currentWeapon.name}</p>
<p>Damage: {currentWeapon.damageLow} - {currentWeapon.damageHigh}
{this.props.all.char.equippedWeapon[0] && this.props.all.char.equippedWeapon[0].name != "Bare hands" ? <button className="gameButton" onClick={this.props.unequip}>Unequip</button> : null}
</p></div>


const torches = inv.filter(item => item.name == 'torch').length

const torchList = <div>
<p>{torches} - Torches <button onClick={this.props.useTorch} className="gameButton">Use</button></p>
</div>

// const inventoryList = inv.filter(item => item.isWeapon == false)
// .map((item, index) => (
//   <div key={index}>
//   <p>-{item.name} {item.isUsable == true ? <button onClick={()=>this.props.useItem(item.id)} className="gameButton">Use</button> : null}</p>
// </div>));

const weaponList = inv.filter(item => item.isWeapon == true)
.map((item) => (
  <div key={item.id}>
  {item.material} {item.name}
  <button className="gameButton" onClick={()=>this.props.equip(item.id)}>Equip</button><button className="gameButton" onClick={()=>this.props.drop(item.id)}>Drop</button>
  </div>
));

const silver = this.props.all.char.silver




  return(

    <div className="row inventoryWindow">

    <div className="col-4">
    <h4>Silver: {silver}</h4>
  {inventoryEquippedWeapon}
    </div>
    <div className="col-4">
    <h4>Inventory</h4>
    {torchList}
    </div>
    <div className="col-4">
    <h4>Weapons</h4>
  {weaponList}
    </div>
    </div>

  );
}
}
export default Inventory;
