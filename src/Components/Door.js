import React from 'react';
import './ControlButton.css';

class Door extends React.Component {
  
    render () {
        return (

          <div>

              <button className="ControlButton" onClick = {this.props.doorOpen}>출입문 열기</button>
              <button className="ControlButton" onClick = {this.props.doorClose}>출입문 닫기</button>
          
          </div>
        
        );
    }
} 

  
export default Door;