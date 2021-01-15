import React, { Fragment } from 'react';
import OPEN from './Img/문 열림.png';
import CLOSE from './Img/문 닫힘.png';
import LIGHTON from './Img/조명온.png';
import LIGHTOFF from './Img/조명오프.png';
import VFANON from './Img/환기팬온.png';
import VFANOFF from './Img/환기팬오프.png';
import MWATER from './Img/중침수.png';
import HWATER from './Img/대침수.png';



class Home extends React.Component {
    constructor (props){
        super(props);

    }

    render () {
        return (

            <div>
                상황판<br/>
                출입문 현재 상태 : {this.doorImg()} <br/>
                현재 조명 : {this.lightImg()} <br/>
                환기팬 동작 : {this.vfanImg()}<br/>
                접속함 내부 온도 : {this.props.temp}<br/>
                집수정 수위 감시 : {this.props.waterproof} %{this.waterProofImg()}<br/>
                화재 감시 : {this.props.fire} <br/>
            </div>
        
        );
    }

    //~~util~~
    doorImg () {
        if (this.props.door === 'OPEN') {
            return (
                <Fragment>
                <img src={OPEN} width='100px' height='100px' alt='열림'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.door === 'CLOSE') {
            return (
                <Fragment>
                <img src={CLOSE} width='100px' height='100px' alt='닫힘'></img><br/>
                </Fragment>
            );
        }
    }

    lightImg () {
        if (this.props.light === 'ON') {
            // console.log('들어가나?');
            return (
                <Fragment>
                <img src={LIGHTON} width='100px' height='100px' alt='조명켜짐'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.light === 'OFF') {
            return (
                <Fragment>
                <img src={LIGHTOFF} width='150px' height='100px' alt='조명꺼짐'></img><br/>
                </Fragment>
            );
        }
    }

    vfanImg () {
        if (this.props.vfan === 'ON') {
            // console.log('들어가나?');
            return (
                <Fragment>
                <img src={VFANON} width='100px' height='100px' alt='조명켜짐'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.vfan === 'OFF') {
            return (
                <Fragment>
                <img src={VFANOFF} width='150px' height='100px' alt='조명꺼짐'></img><br/>
                </Fragment>
            );
        }
    }

    waterProofImg () {
        if (this.props.waterproof < 50) {
            return (
                <Fragment>
                    {/* <img src={MWATER} width='100px' height='100px' alt=''></img><br/> */}
                    <br/>
                    <div>이미지 없음</div>
                </Fragment>
            );
        }
        else if (this.props.waterproof < 80) {
            return (
                <Fragment>
                    <img src={MWATER} width='100px' height='100px' alt='중간'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.waterproof >= 80) {
            return (
                <Fragment>
                    <img src={HWATER} width='150px' height='100px' alt='80%이상'></img><br/>
                </Fragment>
            );
        }
    }

} 

  
export default Home;