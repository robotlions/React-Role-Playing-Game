import React, {Component} from 'react';
import './App.css';
import gate from './images/gate.jpg'
import castle from './images/castle.jpg'
import street from './images/street.jpg'

class GraphicsWindow extends Component{
  render(){
  return (
    <div>
    <img className="img img-fluid" src={street} alt="gate" />
    </div>
  );
}
}
export default GraphicsWindow;
