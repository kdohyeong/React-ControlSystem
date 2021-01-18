import React from 'react';

class Temp extends React.Component {
    constructor (props){
        super(props);
    }

    render () {

        return (
            
          <div>
              <div style = {{
                    fontSize : '85%'
              }}>
              접속함 온도 조절
              </div>
              <form>
                <input className="range"  id="tempChange" type="range" 
                        value={this.props.temp}
                        onChange={this.props.changeTemp}
                        step="0.5" min="0" max="150" defaultValue="50" 
                /><br/> 
              </form>
          </div>
        
        );
    }
} 

  
export default Temp;