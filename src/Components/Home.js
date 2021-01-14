import React from 'react';

class Home extends React.Component {
    constructor (props){
        super(props);

    }
    
    
    
    render () {
        return (

          <div>

              출입문 현재 상태 : {this.props.door} <br/>
              현재 조명 : {this.props.light} <br/>
              환기팬 동작 : {this.props.vfan}<br/>
              접속함 내부 온도 : {this.props.temp} <br/>
              화재 감시 : {this.props.fire} <br/>
              수위 감시 : {this.props.waterproof} %<br/>

          </div>
        
        );
    }
} 

  
export default Home;