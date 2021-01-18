import React, { Fragment } from 'react';
import OPEN from './Img/문열림.png';
import CLOSE from './Img/문닫힘.png';
import LIGHTON from './Img/조명온.png';
import LIGHTOFF from './Img/조명오프.png';
import VFANON from './Img/환기팬온.png';
import VFANOFF from './Img/환기팬오프.png';
import MWATER from './Img/침수.png';
import HWATER from './Img/침수상태.png';
import FIREOFF from './Img/화재X.png';
import FIRE from './Img/화재.png';
import MTEMP from './Img/온도.png';
import HTEMP from './Img/온도2.png';
import './Home.css';


class Home extends React.Component {
    constructor (props){
        super(props);
    }

    render () {
        return (
        <Fragment>
            <label>
                상황판<br/>
            </label>
            <ul className="ICON">
                <li className="Icon">    
                    현재 개폐기 상황 <br/> {this.doorImg()}
                </li>
                <li className="Icon">
                    현재 조명 상황 <br/> {this.lightImg()}
                </li>
                <li className="Icon">
                    현재 환기팬 상황 <br/> {this.vfanImg()}
                </li>
                <li className="Icon">
                    접속함 내부 온도감지 <br/> {this.TempImg()} {this.props.temp}<br/>
                </li>
                <li className="Icon">
                    집수정 수위 감지 <br/> {this.waterProofImg()} {this.props.waterproof} %
                </li>
                <li className="Icon">
                    화재 감지 <br/> {this.FireImg()}
                </li>
            </ul>
        </Fragment>
        );
    }

    //~~util~~
    //개폐문 이미지 변화
    doorImg () {
        if (this.props.door === 'OPEN') {
            return (
                <Fragment>
                <img src={OPEN} width='150px' height='150px' alt='개폐문 열림'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.door === 'CLOSE') {
            return (
                <Fragment>
                <img src={CLOSE} width='150px' height='150px' alt='개폐문 닫힘'></img><br/>
                </Fragment>
            );
        }
    }
    //조명 이미지 변화
    lightImg () {
        if (this.props.light === 'ON') {
            return (
                <Fragment>
                <img src={LIGHTON} width='150px' height='150px' alt='조명 켜짐'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.light === 'OFF') {
            return (
                <Fragment>
                <img src={LIGHTOFF} width='150px' height='150px' alt='조명 꺼짐'></img><br/>
                </Fragment>
            );
        }
    }
    //환기팬 이미지 변화
    vfanImg () {
        if (this.props.vfan === 'ON') {
            return (
                <Fragment>
                <img src={VFANON} width='150px' height='150px' alt='환기팬 켜짐'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.vfan === 'OFF') {
            return (
                <Fragment>
                <img src={VFANOFF} width='150px' height='150px' alt='환기팬 꺼짐'></img><br/>
                </Fragment>
            );
        }
    }
    //온도 이미지 변화
    TempImg () {
        if (this.props.temp < 100) {
            return (
                <Fragment>
                    <img src={MTEMP} width='150px' height='150px' alt='중간'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.temp >= 100) {
            return (
                <Fragment>
                    <img src={HTEMP} width='150px' height='150px' alt='100도 이상'></img><br/>
                </Fragment>
            );
        }
    }
    //수위 이미지 변화
    waterProofImg () {
       
        if (this.props.waterproof < 50) {
            return (
                <Fragment>
                    <img src={MWATER} width='150px' height='150px' alt='50%미만'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.waterproof >= 50 && this.props.waterproof < 80) {
            return (
                <Fragment>
                    <img src={HWATER} width='150px' height='150px' alt='50%이상 80%미만'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.waterproof >= 80) {
            return (
                <Fragment>
                    <img src={HWATER} width='100px' height='150px' alt='80%이상'></img>
                    <img src={HWATER} width='100px' height='150px' alt='80%이상'></img><br/>
                </Fragment>
            );
        }
    }
    //화재 이미지 변화
    FireImg () {
        if (this.props.fire === '화재X') {
            return (
                <Fragment>
                <img src={FIREOFF} width='150px' height='150px' alt='화재 발생!!'></img><br/>
                </Fragment>
            );
        }
        else if (this.props.fire === '화재 발생!!') {
            return (
                <Fragment>
                <img src={FIRE} width='150px' height='150px' alt='화재 발생!!'></img><br/>
                </Fragment>
            );
        }
    }

} 

  
export default Home;