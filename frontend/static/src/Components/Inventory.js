
import React, {Component} from 'react';
import '../App.css';

class Inventory extends Component {
  constructor (props){
        super(props);
        this.state = {
        count: []
        }
        this.listCount = this.listCount.bind(this);
      }

listCount(array){
   array.forEach(item => {let i = item.id; this.state.i++; this.setState({i})})
 }

        render(){
const currentWeapon = this.props.all.char.equippedWeapon ? this.props.all.char.equippedWeapon : "none"
const inv = this.props.all.char.inventory
const inventoryEquippedWeapon = <div>
<h4>Equipped Weapon</h4>
<p>Name: {currentWeapon.material} {currentWeapon.name}</p>
<p>Damage: {currentWeapon.damageLow} - {currentWeapon.damageHigh}
{this.props.all.char.equippedWeapon ? <button className="gameButton" onClick={this.props.unequip}>Unequip</button> : null}
</p></div>

// const listItems = inv.reduce((acc, it) => {
//   acc[it.name] = acc[it.name] + 1 || 1;
//   return acc;
// }, {});
//
// const noway = <div>
// <p>{listItems.torch} torches</p>
// </div>

//The above bit works at listing the items and amounts. It's not what I'm looking for, but learn from it.

const torches = inv.filter(item => item.name == 'torch').length

const torchList = <div>
<p>{torches} - Torches <button onClick={this.props.useTorch} className="gameButton">Use</button></p>
</div>

const inventoryList = inv.filter(item => item.isWeapon == false)
.map((item, index) => (
  <div key={index}>
  <p>-{item.name} {item.isUsable == true ? <button onClick={()=>this.props.useItem(item.id)} className="gameButton">Use</button> : null}</p>
</div>));

const weaponList = inv.filter(item => item.isWeapon == true)
.map((item, index) => (
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
