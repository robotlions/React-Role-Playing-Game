import React, {Component} from 'react';
import '../App.css';
import gate from '../images/gate.jpg'
import castle from '../images/castle.jpg'
import street from '../images/street.jpg'
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
    <div className="graphicsParent">
    <img className="graphicsFill" src={this.props.all.image} alt="gate" />
    </div>
  );
}
}
export default GraphicsWindow;
