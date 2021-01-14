import React from 'react';

class Vfan extends React.Component {
  
    render () {
        return (

            <div>

            <button onClick = {this.props.vfanOn}>환기팬 작동</button>
            <button onClick = {this.props.vfanOff}>환기팬 정지</button>
        
            </div>
        );
    }
} 

  
export default Vfan;