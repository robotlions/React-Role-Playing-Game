
import React, {Component} from 'react';
import '../App.css';

class Inventory extends Component {
  constructor (props){
        super(props);
        this.state = {

        }
      }
        render(){
const currentWeapon = this.props.all.char.equippedWeapon
const inv = this.props.all.char.inventory
const inventoryEquippedWeapon = <div>
<h4>Equipped Weapon</h4>
<p>{`Name: ${currentWeapon.material} ${currentWeapon.name}`}</p>
<p>Damage: {currentWeapon.damageLow} - {currentWeapon.damageHigh}</p>
</div>

const inventoryList = inv.filter(item => item.isWeapon == false)
.map((item) => (
  <div>
  <p>- {item.name}</p>
</div>));

const weaponList = inv.filter(item => item.isWeapon == true)
.map((item) => (
  <div>
  <p>- {item.name}</p>
  </div>
));


// const coinTest = inv.filter(item => item.id == 1)

// const coinList = inv.filter(item => item.id == 1)
// .map((item) =>(
//   <div>
//   <p>{coinTest.length} {item.name}</p>
//   </div>
// ))







  return(

    <div className="row inventoryWindow">
    <div className="col-4">
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
