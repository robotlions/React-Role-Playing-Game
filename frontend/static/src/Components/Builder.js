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
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);
    this.roomEdit = this.roomEdit.bind(this);
    this.submitImage = this.submitImage.bind(this);
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

await fetch(`/rooms/${this.props.all.currentRoom.id}/`, options);
}




roomEdit(){
  for( const prop in this.props.all.currentRoom){
    this.state.[prop] = this.props.all.currentRoom.[prop]
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
const editButton = <button className="btn btn-success" onClick={this.roomEdit}>Edit This Room</button>


        return(

        <div className="builderWindow row">
        <div className="digWindow col-4">
        {digForm}
        {editButton}
        {infoWindow}
        </div>
        <div className="digWindow col-4">
        {roomCreateForm}
        </div>
        <div className="digWindow col-4">
        {imageForm}
        </div>
        </div>


        );
      }
    }

export default Builder
