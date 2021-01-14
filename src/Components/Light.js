import React from 'react';

class Light extends React.Component {
  
    render () {
        return (

        <div>

            <button onClick = {this.props.lightOn}>조명 켜기</button>
            <button onClick = {this.props.lightOff}>조명 끄기</button>
        
        </div>
        
        );
    }
} 

  
export default Light;