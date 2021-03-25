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
      name: "",
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleImage = this.handleImage.bind(this);

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
    // let obj = {
    //   name: this.state.name,
    //   desc: this.state.desc,
    //   north: this.state.north,
    //   south: this.state.south,
    //   east: this.state.east,
    //   west: this.state.west,
    //   up: this.state.up,
    //   down: this.state.down,
    //   area: this.state.area,
    //   lit: this.state.lit,
    //   danger: this.state.danger,
    //   static: this.state.static,
    //   walk: this.state.walk,
    // }
    const obj = {...this.state}
    delete obj.preview

    // formData.append('static', this.state.static);
    for (const prop in obj) {
      formData.append(prop, obj[prop]);
    };
    const options = {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: formData,
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rooms/', options);
    const data = await response.json().catch(handleError);
    if (response.ok) {
      alert('Room added!');
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
<input className="builderField" type="text" placeholder="Room Name" name="name" value={this.state.name} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Description" name="desc" value={this.state.desc} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="North" name="north" value={this.state.north} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="South" name="south" value={this.state.south} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="East" name="east" value={this.state.east} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="West" name="west" value={this.state.west} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Up" name="up" value={this.state.up} onChange={this.handleInput}/><br/>
<input className="builderField" type="text" placeholder="Area Name" name="area" value={this.state.area} onChange={this.handleInput}/><br/>
<label htmlFor="lit">Lit?</label>
<input type="checkbox" name="lit" title="Lit?" value="true" onChange={this.handleInput}/><br/>
<label htmlFor="danger">Danger?</label>
<input type="checkbox" name="danger" title="Dangerous?" value="true" onChange={this.handleInput}/><br/>
<label htmlFor="static">Static Image</label>
<input type="file" name="static" onChange={this.handleImage}/><br/>
{this.state.static && <img width="200" src={this.state.preview} alt="preview" />}
<button className="btn btn-success charSubmit" type="submit">Add this room</button>
</form>



        return(

        <div>
        {roomCreateForm}
        <div className="infoWindow">
        {infoWindow}
        </div>
        </div>

        );
      }
    }

export default Builder
