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

    <img className="graphicsFill" src={this.props.all.image}/>
  );
}
}
export default GraphicsWindow;
