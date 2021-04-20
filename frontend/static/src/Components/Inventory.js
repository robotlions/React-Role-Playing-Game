
import React, {Component} from 'react';
import '../App.css';



class Inventory extends Component {
  constructor (props){
        super(props);
        this.state = {
        count: [],
        invList: [],
        }

      }










        render(){



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



//THIS NUMBERS MULTIPLE INVENTORY ITEMS RATHER THAN LISTING THEM ONE BY ONE. PREVIOUS CODE BELOW.
// const reduced = inv.map(item => item = `${item.material} ${item.name}`)
// let counts = {};
// reduced.map(function(x) { counts[x] = (counts[x] || 0)+1});
// const weaponList = Object.entries(counts).map(([key, value]) => <p key={counts.uniqueID}>{value} - {key} </p>); 


const weaponList = inv.filter(item => item.isWeapon == true)
.map((item, index) =>(
  <ul key={index}>
  <li>
  {item.material} {item.name}
  <button className="gameButton" onClick={()=>this.props.equip(item.id)}>Equip</button><button className="gameButton" onClick={()=>this.props.drop(item.id)}>Drop</button>
  </li>
  </ul>
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
