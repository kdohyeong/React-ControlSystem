import React, {Component, Fragment} from 'react';
import Home from './Components/Home.js';
import Fire from './Components/Fire.js';
import Door from './Components/Door.js';
import Light from './Components/Light.js';
import Temp from './Components/Temp.js';
import WaterProof from './Components/WaterProof.js';
import Vfan from './Components/Vfan.js';
import Setting from './Components/Setting.js';
import './App.css';


class App extends Component {
  constructor (props){
    super(props);

    //사용할 state 목록 정의
    this.state = {
      mode : 'Door',

      door : 'CLOSE',
      light : 'OFF',
      vfan : 'OFF',
      temp : 50,
      fire : '화재X',
      waterproof : 10,
      test2 : '0' 

    };
  }

  //~~ util ~~
  //출입문 OPEN/CLOSE
  handleChangeOpen = async () => {
    this.setState({ door : 'OPEN' });
    await alert('출입문이 개방되었습니다!!');
    
  };

  handleChangeClose = () => {
    this.setState({ door : 'CLOSE' })
  };

  //조명 ON/OFF
  handleLightOn = () => {
    this.setState({ light : 'ON' })
  };
  handleLightOff = () => {
    this.setState({ light : 'OFF' })
  };

  //환기팬 ON/OFF
  handleVfanOn = () => {
    this.setState({ vfan : 'ON' })
  };
  handleVfanOff = () => {
    this.setState({ vfan : 'OFF' })
  };

  //온도 조절
  handleChangeTemp = (e) => {
    this.setState({ temp : e.target.value })
  };
  
  //화면의 전환을 위한 핸들러
  handleChangeMode = (mode) => {
    this.setState({ mode : mode });
  };

  //화재 핸들러
  handleFireOn = (e) => { 
    this.setState({ fire : '화재 발생!!' })
  }
  handleFireOff = (e) => { 
    this.setState({ fire : '화재X' })
  }

  //침수 핸들러
  handleChangeWater = (e) => {
    this.setState({ waterproof : e.target.value })
  };

  //화면 전환
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
                  lightOn = {this.handleLightOn}
                  lightOff = {this.handleLightOff}
            /> 
    }
    
    else if (this.state.mode === 'Vfan') {
      return <Vfan 
                  vfan = {this.state.vfan}
                  vfanOn = {this.handleVfanOn}
                  vfanOff = {this.handleVfanOff}
            /> 
    }

    else if (this.state.mode === 'Temp') { 
      return <Temp 
                  temp = {this.state.temp}
                  changeTemp = {this.handleChangeTemp}
            /> 
    }

    else if (this.state.mode === 'Fire') {
      return <Fire 
                  fire = {this.state.fire}
                  fireOff = {this.handleFireOff}
            /> 
    }

    else if (this.state.mode === 'Waterproof') { 
      return <WaterProof 
                  waterproof = {this.state.waterproof}
                  changeWater = {this.handleChangeWater} 
            /> }

    else if (this.state.mode === 'Setting') { return <Setting /> }

  };
  //~~ util ~~
  
  componentDidUpdate(){

    //온도 경보
    if (this.state.temp >= 100) {
      alert('접속함 내부 온도가 넘 높습니다!!');
    }
    //화재 발생 시 환기팬 동작
    if (this.state.fire === '화재 발생!!' && this.state.vfan === 'OFF'){
      this.setState({ vfan : 'ON'});
    }
    if (this.state.waterproof >= 20) {
      alert('침수 발생!!');
    } 

  }

  render() {

    return (

      <Fragment>

        <label className="title">전력구 원격 감시 제어 시스템</label>
        <br/><br/>

        <div className="View">
          <Home 
                  door = {this.state.door} 
                  light = {this.state.light}
                  vfan = {this.state.vfan}
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
              <button onClick={() => this.handleChangeMode('Vfan')}>환기팬</button>
            </li>
            <li>
              <button onClick={() => this.handleChangeMode('Temp')}>접속함 온도</button>
            </li>
            <li>
              <button onClick={() => { this.handleChangeMode('Fire'); this.handleFireOn('화재 발생') }}>화재 상황</button>
            </li>
            <li>
              <button onClick={() => this.handleChangeMode('Waterproof')}>침수 현황</button>
            </li>
            <li>
              <button onClick={() => this.handleChangeMode('Setting')}>운영자 설정</button>
            </li>
            
          </ul>
        </div>
        
      </Fragment>

    );
  
  } 
}
export default App;
