import React from 'react';
import './ControlButton.css';

class Fire extends React.Component {
  
    render () {
        return (

          <button className="ControlButton" onClick = {(e) => {this.props.fireOff(); this.props.vfanOff();}}>화재 진화</button> 
        
        );
    }
} 

  
export default Fire;