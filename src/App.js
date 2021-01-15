import React, {Component, Fragment} from 'react';
import Home from './Components/Home.js';
import Fire from './Components/Fire.js';
import Door from './Components/Door.js';
import Light from './Components/Light.js';
import Temp from './Components/Temp.js';
import WaterProof from './Components/WaterProof.js';
import Vfan from './Components/Vfan.js';
import Setting from './Components/Setting.js';
import Button from '@material-ui/core/Button';
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
      waterproof : 0,
      test2 : '0' 
    };
  }
  
  componentDidUpdate(){
    //온도 경보
    if (this.state.temp >= 100) {
      alert('접속함 내부 온도가 넘 높습니다!!');
    }
    //집수정 침수 경보!!
    if (this.state.waterproof === '50') {
      alert('집수정 수위가 50%를 넘었습니다!!');
    }
    if (this.state.waterproof === '80') {
      alert('집수정 수위가 80%를 넘었습니다!!');
    }  
  }

  render() {
    return (
      <Fragment>
        <div className="Container">
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
          </div>

          <div className="Control">제어기능 표시판<br/>
          { this.handleChangeView() }<br/>
          </div>

          <div className="Menu">
            <ul className="ButtonList">

              <li>
                <Button onClick={() => this.handleChangeMode('Door') } variant="contained" color="primary">출입문 제어</Button>
              </li>
              <li>
                <Button onClick={() => this.handleChangeMode('Light')} variant="contained" color="primary">조명 제어</Button>
              </li>
              <li>
                <Button onClick={() => this.handleChangeMode('Vfan')} variant="contained" color="primary">환기팬 제어</Button>
              </li>
              <li>
                <Button onClick={() => this.handleChangeMode('Temp')} variant="contained" color="primary">접속함<br/>온도조절</Button>
              </li>
              <li>
                <Button onClick={() => this.handleChangeMode('Waterproof')} variant="contained" color="primary">집수정<br/>수위 조절</Button>
              </li>
              <li>
                <Button onClick={() => { this.handleChangeMode('Fire'); this.handleFireOn('화재 발생'); this.handleVfanOn(); }} variant="contained" color="primary">화재 상황<br/>발생</Button>
              </li>
              <li>
                <Button onClick={() => {this.state.mode !== 'Setting' ? this.handleChangeMode('Setting') : this.handleChangeMode('Home')}} variant="contained" color="primary">운영자 설정</Button>
              </li>
              
            </ul>
          </div>

        </div>
      </Fragment>
    );
  }
  
  
  //~~ util ~~
  //화면 전환
  handleChangeView() {
  
    if (this.state.mode === 'Door') { 
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
                  vfanOff = {this.handleVfanOff}
            /> 
    }
    else if (this.state.mode === 'Waterproof') { 
      return <WaterProof 
                  waterproof = {this.state.waterproof}
                  changeWater = {this.handleChangeWater} 
            /> }
    else if (this.state.mode === 'Setting') { return <Setting Off= {this.state.mode} /> }
  };

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

  //~~ util ~~
}
export default App;
