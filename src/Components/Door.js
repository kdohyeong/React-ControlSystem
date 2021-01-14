import React from 'react';

class Door extends React.Component {
  
    render () {
        return (

          <div>

              <button onClick = {this.props.doorOpen}>출입문 열기</button>
              <button onClick = {this.props.doorClose}>출입문 닫기</button>
          
          </div>
        
        );
    }
} 

  
export default Door;