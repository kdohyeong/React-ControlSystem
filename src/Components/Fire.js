import React from 'react';

class Fire extends React.Component {
  
    render () {
        return (

          <button onClick = {this.props.fireOff}>화재 진화</button> 
        
        );
    }
} 

  
export default Fire;