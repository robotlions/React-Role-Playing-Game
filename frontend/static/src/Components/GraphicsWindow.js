import React, {Component} from 'react';
import '../App.css';
import dungeonWalk from '../images/dungeonWalk.gif'
import dungeonStatic from '../images/dungeonStatic.jpg'

class GraphicsWindow extends Component{
  constructor (props){
        super(props);
        this.state = {

        }
      }

  render(){


  return (
    <div>
    {this.props.all.currentRoom.lit === true || this.props.all.lightSpell === true ? <img className="graphicsFill" src={this.props.all.image}/> : null}
    </div>
    );
}
}
export default GraphicsWindow;
