import React from 'react';

class Home extends React.Component {
  
    render () {

        return (

          <div>

              출입문 현재 상태 : {this.props.door} <br/>
              현재 조명 : {this.props.light} <br/>
              현재 온도 : {this.props.temp} <br/>
              화재 감시 : {this.props.fire} <br/>
              침수 감시 : {this.props.waterproof} <br/>

          </div>
        
        );
    }
} 

  
export default Home;