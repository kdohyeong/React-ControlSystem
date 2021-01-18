import React, { Fragment } from 'react';
import './ControlButton.css';

class Setting extends React.Component {
  
    render () {
        return (
            <Fragment>
                <div className='Setcontainer'
                    style={{
                        width :"100%",
                        height : "95%",
                        backgroundColor : "#333",
                        opacity : "0.2", 
                        position : "fixed",
                        left : "0",
                        top : "4%",
                        zIndex : "10"
                    }}
                >
                </div>

                <div className="Setting" 
                    style={{  position: "fixed",
                        left : "18%",
                        top: "15%",
                        height: "76%",
                        width: "72%",
                        backgroundColor: "white",
                        opacity : "1 !important", 
                        zIndex : "15"
                    }}
                >

                    <div>운영자 설정 페이지
                        운영자 관리<br/>
                        설비 관리<br/>
                        점검 관리<br/>
                        이력 조회<br/>
                        운영자 작업 범위 설정<br/>


                    </div>
                    <div>경보 잠금 해제</div>
                    <button className="ControlButton" onClick = {this.props.alertOff}>경보 잠금</button>
                    <button className="ControlButton" onClick = {this.props.alertOn}>경보 잠금 해제</button><br/>
                    
                    <div>원격소 장치 추가/삭제</div> 
                    <button className="ControlButton" onClick={(e) =>{ e.preventDefault(); }}>추가</button>
                    <button className="ControlButton" onClick={(e) =>{ e.preventDefault(); }}>삭제</button><br/>
                    
                    <div>온도 경보 임계치 설정</div>
                    {this.props.tempRange}
                    <form>
                    <input className="number" type="number" 
                        value={this.props.tempRange}
                        onChange={this.props.changeTempRange}
                        step="0.5" min="0" max="150" defaultValue="50" 
                    /><br/> 
                    </form>
                </div>       
            </Fragment>
        );
    }
} 

  
export default Setting;