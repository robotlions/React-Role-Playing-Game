import React, {Component} from 'react';
import '../App.css';
import gate from '../images/gate.jpg'
import castle from '../images/castle.jpg'
import street from '../images/street.jpg'
import dungeonWalk from '../images/dungeonWalk.gif'
import dungeonWalk1 from '../images/dungeonWalk1.jpg'

class GraphicsWindow extends Component{
  constructor (props){
        super(props);
        this.state = {

        }
      }

  render(){


  return (
    <div>
    <img className="img img-fluid" src={this.props.all.image} alt="gate" />
    </div>
  );
}
}
export default GraphicsWindow;
