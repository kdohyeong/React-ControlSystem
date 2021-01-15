import React, { Fragment } from 'react';

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

                    <div>운영자 설정 페이지</div>
                    <button className="setButton" onClick={(e) =>{ e.preventDefault(); }}>테스트</button>
                    <button className="setButton" onClick={(e) =>{ e.preventDefault(); }}>테스트2</button>
                    
                </div>       
            </Fragment>
        );
    }
} 

  
export default Setting;