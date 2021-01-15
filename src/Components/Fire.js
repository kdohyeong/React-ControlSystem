import React from 'react';

class Fire extends React.Component {
  
    render () {
        return (

          <button onClick = {(e) => {this.props.fireOff(); this.props.vfanOff();}}>화재 진화</button> 
        
        );
    }
} 

  
export default Fire;