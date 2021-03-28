
import React, {Component} from 'react';
import '../App.css';

class Inventory extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }




        render(){
const currentWeapon = this.props.all.char.equippedWeapon ? this.props.all.char.equippedWeapon : "none"
const inv = this.props.all.char.inventory
const inventoryEquippedWeapon = <div>
<h4>Equipped Weapon</h4>
<p>Name: {currentWeapon.material} {currentWeapon.name}</p>
<p>Damage: {currentWeapon.damageLow} - {currentWeapon.damageHigh}
{this.props.all.char.equippedWeapon ? <button className="saveButton" onClick={this.props.unequip}>Unequip</button> : null}
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

// const testList = inv.filter(item => item.isWeapon == false)
// .reduce((a, item) => [item.name = item.name + 1])
// .map((item) => (
//   <div key={item.id}>
//   <p>- {item.name} {item.isUsable == true ? <button onClick={()=>this.props.useItem(item.id)} className="saveButton">Use</button> : null}</p>
// </div>));
// console.log(testList)


const inventoryList = inv.filter(item => item.isWeapon == false)
.map((item, index) => (
  <div key={index}>
  <p>- {item.name} {item.isUsable == true ? <button onClick={()=>this.props.useItem(item.id)} className="saveButton">Use</button> : null}</p>
</div>));

const weaponList = inv.filter(item => item.isWeapon == true)
.map((item, index) => (
  <div key={item.id}>
  {item.material} {item.name}
  <button className="saveButton" onClick={()=>this.props.equip(item.id)}>Equip</button><button className="saveButton" onClick={()=>this.props.drop(item.id)}>Drop</button>
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
    {inventoryList}
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
