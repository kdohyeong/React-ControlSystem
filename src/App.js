import React, {Component, Fragment} from 'react';
import Home from './Components/Home.js';
import Fire from './Components/Fire.js';
import Door from './Components/Door.js';
import Light from './Components/Light.js';
import Temp from './Components/Temp.js';
import WaterProof from './Components/WaterProof.js';
import Test1 from './Components/Test1.js';
import Test2 from './Components/Test2.js';



class App extends Component {
  constructor (props){
    super(props);

    //사용할 state 목록 정의
    this.state = {
      mode : 'Door',

      door : 'OPEN',
      light : 'ON',
      temp : 50,
      waterproof : '침수X',
      fire : '화재X',
      test1 : '0',
      test2 : '0' 

    };
  }

  //출입문 OPEN/CLOSE
  handleChangeOpen = () => {
    this.setState({ door : 'OPEN' })
  };

  handleChangeClose = () => {
    this.setState({ door : 'CLOSE' })
  };

  //조명 ON/OFF
  handleChangeOn = () => {
    this.setState({ light : 'ON' })
  };
  handleChangeOff = () => {
    this.setState({ light : 'OFF' })
  };
  
  //화면의 전환을 위한 핸들러
  handleChangeMode = (mode) => {
    this.setState({ mode : mode });
  };

  handleChangeView() {
    if (this.state.mode === 'Home') {  
      return <Home 
                  door = {this.state.door} 
                  light = {this.state.light}
                  temp = {this.state.temp}
                  waterproof = {this.state.waterproof}
                  fire = {this.state.fire}
            />
    }
    
    else if (this.state.mode === 'Door') { 
      return <Door 
                  door = {this.state.door}
                  doorClose = {this.handleChangeClose}
                  doorOpen = {this.handleChangeOpen}
            />           
    }

    else if (this.state.mode === 'Light') {
      return <Light 
                  light = {this.state.light}
                  lightOn = {this.handleChangeOn}
                  lightOff = {this.handleChangeOff}
            /> 
    }

    else if (this.state.mode === 'Temp') { 
      return <Temp 
                  temp = {this.state.temp} /> 
    }

    else if (this.state.mode === 'Waterproof') { return <WaterProof waterproof = {this.state.waterproof} /> }
    else if (this.state.mode === 'Fire') { return <Fire fire = {this.state.fire} /> }
    else if (this.state.mode === 'Test1') { return <Test1 /> }
    else if (this.state.mode === 'Test2') { return <Test2 /> }

  };


  render() {

    return (

      <Fragment>
        
        <div className="View">
          <Home 
                  door = {this.state.door} 
                  light = {this.state.light}
                  temp = {this.state.temp}
                  waterproof = {this.state.waterproof}
                  fire = {this.state.fire}
          /><br/>
          <div>제어기능 표시판</div>
          { this.handleChangeView() }<br/>

          <ul className="ButtonList">

            <li>
              <button onClick={() => this.handleChangeMode('Door')}>출입문</button>
            </li>
            <li>
              <button onClick={() => this.handleChangeMode('Light')}>조명</button>
            </li>
            <li>
              <button onClick={() => this.handleChangeMode('Temp')}>접속함 온도</button>
            </li>
            <li>
              <button onClick={() => this.handleChangeMode('Fire')}>화재</button>
            </li>
            <li>
              <button onClick={() => this.handleChangeMode('Waterproof')}>침수</button>
            </li>
            <li>
              <button onClick={() => this.handleChangeMode('Test1')}>테스트1</button>
            </li>
            <li>
              <button onClick={() => this.handleChangeMode('Test2')}>테스트2</button>
            </li>
            
          </ul>
        </div>
        
      </Fragment>

    );
  
  } 
}
export default App;
