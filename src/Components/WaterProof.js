import React from 'react';

class WaterProof extends React.Component {
  
    render () {
        return (
        
        <div>

          <div>수위 현황</div>
          <form>
          <input className="range"  id="tempChange" type="range" 
                 value={this.props.water}
                 onChange={this.props.changeWater}
                 step="0.5" min="0" max="100" defaultValue="0" 
         /><br/> 
         </form>
        
        </div>

            
        );
    }
} 

  
export default WaterProof;