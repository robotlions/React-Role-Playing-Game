
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

const inventoryList = inv.filter(item => item.isWeapon == false)
.map((item) => (
  <div key={item.id}>
  <p>- {item.name}</p>
</div>));

const weaponList = inv.filter(item => item.isWeapon == true)
.map((item) => (
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
