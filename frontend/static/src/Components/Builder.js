import React, {
  Component
} from 'react';
import Cookies from 'js-cookie';
import JobDropdown from './JobDropdown';
import {
  withRouter
} from 'react-router-dom';
import {
  useState
} from 'react';
import '../App.css';

class Builder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomEdit: false,
      mobEdit: false,
      mob: {},
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.roomEdit = this.roomEdit.bind(this);
    this.submitImage = this.submitImage.bind(this);
    this.mobEdit = this.mobEdit.bind(this);
    this.itemEdit = this.itemEdit.bind(this);
    this.handleMobSubmit = this.handleMobSubmit.bind(this);
    this.handleMobUpdate = this.handleMobUpdate.bind(this);
    this.handleItemSubmit = this.handleItemSubmit.bind(this);
    this.handleItemUpdate = this.handleItemUpdate.bind(this);
    this.addData = this.addData.bind(this);
  }


  handleInput(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleImage(e) {
    let file = e.target.files[0]
    this.setState({
      static: file,
    })

    let reader = new FileReader()
    reader.onloadend = () => {
      this.setState({
        preview: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  async handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    const obj = {...this.state}
    delete obj.preview
    delete obj.dir
    delete obj.id
    delete obj.static
    delete obj.roomEdit
    delete obj.mobEdit

    for (const prop in obj) {
      formData.append(prop, obj[prop]);
    };
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(obj),
    };
    const int = this.props.all.currentRoom.id
    const handleError = (err) => console.warn(err);
    const response = await fetch(`/rooms/${int}/`, options);
    const data = await response.json().catch(handleError);
    if (response.ok) {
      alert('Room updated!');
      for (const prop in obj){
        this.setState({[prop]: ""})
      }
      this.props.goto(this.props.all.currentRoom.id)
    }

  }


  async handleMobSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    const obj = {...this.state}
    delete obj.preview
    delete obj.dir
    delete obj.id
    delete obj.static
    delete obj.roomEdit
    delete obj.mobEdit

    for (const prop in obj) {
      formData.append(prop, obj[prop]);
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(obj),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch(`/mobs/`, options);
    const data = await response.json().catch(handleError);
    if (response.ok) {
      alert('Mob added!');
    }

  }


  async handleMobUpdate(e) {
    e.preventDefault();
    let formData = new FormData();
    const obj = {...this.state}
    delete obj.preview
    delete obj.dir
    delete obj.id
    delete obj.static
    delete obj.roomEdit
    delete obj.mobEdit

    for (const prop in obj) {
      formData.append(prop, obj[prop]);
    };
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(obj),
    };
    const int = this.props.all.mob.id
    const handleError = (err) => console.warn(err);
    const response = await fetch(`/mobs/${int}/`, options);
    const data = await response.json().catch(handleError);
    if (response.ok) {
      alert('Mob updated!');
    }

  }



  async handleItemSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    const obj = {...this.state}
    delete obj.preview
    delete obj.dir
    delete obj.id
    delete obj.static
    delete obj.roomEdit
    delete obj.mobEdit
    delete obj.itemEdit

    for (const prop in obj) {
      formData.append(prop, obj[prop]);
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(obj),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch(`/items/`, options);
    const data = await response.json().catch(handleError);
    if (response.ok) {
      alert('Item added!');
    }

  }


  async handleItemUpdate(e) {
    e.preventDefault();
    let formData = new FormData();
    const obj = {...this.state}
    delete obj.preview
    delete obj.dir
    delete obj.id
    delete obj.static
    delete obj.roomEdit
    delete obj.mobEdit
    delete obj.itemEdit

    for (const prop in obj) {
      formData.append(prop, obj[prop]);
    };
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(obj),
    };
    const int = this.props.all.currentItem.id
    const handleError = (err) => console.warn(err);
    const response = await fetch(`/items/${int}/`, options);
    const data = await response.json().catch(handleError);
    if (response.ok) {
      alert('Item updated!');
    }

  }






async dig(dir){
  let exit;
  switch (dir){
    case 'north' || 'n':
    exit = 'south'
    break;
    case 'south' || 's':
    exit = 'north'
    break;
    case 'east' || 'e':
    exit = 'west'
    break;
    case 'west' || 'w':
    exit = 'east'
    break;
  }
    let newroom ={
      [exit]: this.props.all.currentRoom.id,
      area: this.props.all.currentRoom.area,
    }

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(newroom),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rooms/', options);
    const data = await response.json().catch(handleError);
    if (response.ok) {
      alert('Room added!');
    }
    let pk = this.props.all.currentRoom.id
    let cResponse = await fetch('/rooms/')
    let cData = await cResponse.json()
    let t = cData.length
    let newexit = cData[t-1]
    let newExitObj ={
      [dir]: newexit.id
    }
    const exitOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(newExitObj),
    };
    let exitHandleError = (err) => console.warn(err);
    let exitResponse = await fetch(`/rooms/${pk}/`, exitOptions);
    const exitData = await exitResponse.json().catch(exitHandleError);
    if (exitResponse.ok) {
      alert('Exit added!');
      this.props.goto(this.props.all.currentRoom.id)
    }
}


async submitImage(e){
  e.preventDefault();
  let formData = new FormData();
  formData.append('static', this.state.static);


const options = {
  method: 'PUT',
  headers: {
    'X-CSRFToken': Cookies.get('csrftoken'),
  },
  body: formData,
}
let handleError = (err) => console.warn(err);
let response = await fetch(`/rooms/${this.props.all.currentRoom.id}/`, options);
const data = await response.json().catch(handleError);
if(response.ok){
  alert('Image added!')
  this.setState({static: ""})
  setTimeout(()=>{this.props.goto(this.props.all.currentRoom.id)}, 1000);
}
}

mobEdit(){
  this.setState(prevState => ({
  mobEdit: !prevState.mobEdit, roomEdit: false, itemEdit: false
}));
  for( const prop in this.props.all.mob){
    this.state.[prop] = this.props.all.mob.[prop]
}
  }


roomEdit(){

  this.setState(prevState => ({
  roomEdit: !prevState.roomEdit, mobEdit: false, itemEdit: false
}));
  for( const prop in this.props.all.currentRoom){
    this.state.[prop] = this.props.all.currentRoom.[prop]
}
  }

addData(){
  for( const prop in this.props.all.currentRoom){
    this.state.[prop] = this.props.all.currentRoom.[prop]
}
}


itemEdit(){

  this.setState(prevState => ({
  itemEdit: !prevState.itemEdit, mobEdit: false, roomEdit: false
}));
  for( const prop in this.props.all.currentItem){
    this.state.[prop] = this.props.all.currentItem.[prop]
}
  }




render(){

const infoWindow = <div>
<p>Current Room: {this.props.all.currentRoom.id}</p>
<p>Area Name: {this.props.all.currentRoom.area}</p>
<p>North: {this.props.all.currentRoom.north}</p>
<p>South: {this.props.all.currentRoom.south}</p>
<p>East: {this.props.all.currentRoom.east}</p>
<p>West: {this.props.all.currentRoom.west}</p>
<p>Up: {this.props.all.currentRoom.up}</p>
<p>Down: {this.props.all.currentRoom.down}</p>

</div>

const roomCreateForm = <form id="roomForm" onSubmit={this.handleSubmit}>

<input className="builderField" type="text" placeholder="Room Name" name="name" value={this.state.name || ""} onChange={this.handleInput}/><br/>
<textarea className="builderField" type="text" placeholder="Description" name="desc" value={this.state.desc || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="North" name="north" value={this.state.north || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="South" name="south" value={this.state.south || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="East" name="east" value={this.state.east || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="West" name="west" value={this.state.west || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Up" name="up" value={this.state.up || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Down" name="down" value={this.state.down || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Area Name" name="area" value={this.state.area || ""} onChange={this.handleInput}/><br/>
<label htmlFor="lit">Lit?</label>
<input type="checkbox" name="lit" title="Lit?" value="true" onChange={this.handleInput}/>
<label htmlFor="danger">Danger?</label>
<input type="checkbox" name="danger" title="Dangerous?" value="true" onChange={this.handleInput}/><br/>
<button className="btn btn-success charSubmit" type="submit">Update This Room</button>
</form>


const mobCreateForm = <form id="roomForm">

<input className="builderField" type="text" placeholder="ID" name="id" value={this.state.id || ""} readOnly/><br/>
<input className="builderField" type="text" placeholder="Mob Name" name="name" value={this.state.name || ""} onChange={this.handleInput}/><br/>
<textarea className="builderField" type="text" placeholder="Description" name="desc" value={this.state.desc || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Damage" name="damage" value={this.state.damage || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Attack" name="attack" value={this.state.attack || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="hp" name="hp" value={this.state.hp || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="hpmax" name="hpmax" value={this.state.hpmax || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="AC" name="ac" value={this.state.ac || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="DamMessage" name="damMessage" value={this.state.damMessage || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="XP" name="xp" value={this.state.xp || ""} onChange={this.handleInput}/><br/>
<textarea className="builderField" type="text" placeholder="Inventory" name="inventory" value={this.state.inventory || ""} onChange={this.handleInput}/><br/>
<label htmlFor="shopkeeper">Shopkeeper?</label>
<input type="checkbox" name="shopkeeper" title="Shopkeeper?" value="true" onChange={this.handleInput}/>
<button className="btn btn-success charSubmit" type="submit" onClick={this.handleMobSubmit}>Create this Mob</button>
<button className="btn btn-success charSubmit" type="submit" onClick={this.handleMobUpdate}>Update this Mob</button>
</form>


const itemCreateForm = <form id="roomForm">

<input className="builderField" type="text" placeholder="ID" name="id" value={this.state.id || ""} readOnly/><br/>
<input className="builderField" type="text" placeholder="Item Name" name="name" value={this.state.name || ""} onChange={this.handleInput}/><br/>
<textarea className="builderField" type="text" placeholder="Description" name="desc" value={this.state.desc || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Level" name="level" value={this.state.level || ""} onChange={this.handleInput}/><br/>
<label htmlFor="makesLight">Makes Light?</label>
<input type="checkbox" name="makesLight" title="Makes Light?" value="true" onChange={this.handleInput}/>
<label htmlFor="isMoney">Is Money?</label>
<input type="checkbox" name="isMoney" title="Is Money?" value="true" onChange={this.handleInput}/>
<label htmlFor="isWeapon">Is Weapon?</label>
<input type="checkbox" name="isWeapon" title="Is Weapon?" value="true" onChange={this.handleInput}/>
<input className="builderField" type="text" placeholder="Value" name="value" value={this.state.value || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="damageLow" name="damageLow" value={this.state.damageLow || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="damageHigh" name="damageHigh" value={this.state.damageHigh || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Range" name="range" value={this.state.range || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="DamMessage" name="damMessage" value={this.state.damMessage || ""} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Bonus" name="bonus" value={this.state.bonus || ""} onChange={this.handleInput}/><br/>
<label htmlFor="usable">Is Usable?</label>
<input type="checkbox" name="usable" title="Usable" value="true" onChange={this.handleInput}/>
<button className="btn btn-success charSubmit" type="submit" onClick={this.handleItemSubmit}>Create this Item</button>
<button className="btn btn-success charSubmit" type="submit" onClick={this.handleItemUpdate}>Update this Item</button>
</form>







const imageForm = <form id="imageForm" onSubmit={this.submitImage}>
<label htmlFor="static">Static Image</label>
<input type="file" name="static" onChange={this.handleImage}/><br/>
{this.state.static && <img width="200px" src={this.state.preview} alt="preview" />}
<button className="btn btn-success charSubmit" type="submit">Add image</button>
</form>

const dir = this.state.dir
const digForm = <div className="digForm">
<input type="txt" placeholder="Direction to dig new exit" name="dir" value={this.state.dir} onChange={this.handleInput}/>
<button onClick={()=>this.dig(dir)}>Dig</button>
</div>
const roomEditButton = <button className="buildButton btn btn-success" onClick={this.roomEdit}>Room Builder</button>
const mobEditButton = <button className="buildButton btn btn-success" onClick={this.mobEdit}>Mob Builder</button>
const itemEditButton = <button className="buildButton btn btn-success" onClick={this.itemEdit}>Item Builder</button>
const addDataButton = <button className="buildButton btn btn-success" onClick={this.addData}>Edit Room</button>












        return(
        <>
        {this.state.roomEdit === true ?
        <div className="builderWindow row">
        <div className="digWindow col-4">
        {digForm}
        {infoWindow}
        </div>
        <div className="digWindow col-4">
        {roomCreateForm}
        </div>
        <div className="digWindow col-4">
        {imageForm}
        </div>
        </div> : null}

        {this.state.mobEdit === true ?
        <div className="builderWindow row">
        <div className="digWindow col-4">
        </div>
        <div className="digWindow col-4">
        {mobCreateForm}
        </div>
        <div className="digWindow col-4">
        {imageForm}
        </div>
        </div> : null}

        {this.state.itemEdit === true ?
        <div className="builderWindow row">
        <div className="digWindow col-4">
        </div>
        <div className="digWindow col-4">
        {itemCreateForm}
        </div>
        <div className="digWindow col-4">
        </div>
        </div> : null}

        {roomEditButton}{mobEditButton}{itemEditButton}{addDataButton}
        </>

        );
      }
    }

export default Builder
