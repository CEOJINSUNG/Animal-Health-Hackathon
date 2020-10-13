import React from 'react';
import './PageComponents/css/Common.css';
import './PageComponents/css/Common_font.css';
import './PageComponents/css/Home.css';
import { Link } from 'react-router-dom';
import Petcard from './PageComponents/Petcard';

const Home = () => {
    return (
        <div className="page">
            <nav className="top_nav">
                <span className="float_left">
                    <Link to="/Home" className="home nav_left_icon">
                        <img src={require('./PageComponents/icon/pawprint.svg')} alt="홈아이콘"  width="100%"/>
                    </Link>
                </span>
                <span className="title float_left">Dang <span className="color_orange">Care</span></span>
                <span className="float_right">
                    <Link to="/" className="home nav_right_icon">
                        <img src={require('./PageComponents/icon/gear.svg')} alt="설정"  width="100%"/>
                    </Link> 
                </span>
                <span className="float_right">
                    <Link to="/ChooseDoctor" className="nav_right_icon">
                        <img src={require('./PageComponents/icon/notification.svg')} alt="알림"  width="100%"/>
                    </Link> 
                </span>           
            </nav>
            <div className="inner_page">
            <div id="home_my_pet">
                <div className="sub_menu">
                    <span className="bold_20">나의 반려동물</span>
                    <Link to="/Registration" className="underline regular_12 opacity_06 text_link">추가하기</Link>
                </div>
                <Petcard />
            </div>
            <div id="pet_status">
                <span className="status_detail">
                    <img src={require('./PageComponents/icon/good.png')} alt="상태"  width="90px"/>
                    <div className="status_message bold_16">
                        혈압
                    </div>
                </span>
                <span className="status_detail">
                    <img src={require('./PageComponents/icon/good.png')} alt="상태"  width="90px"/>
                    <div className="status_message bold_16">
                        혈당
                    </div>
                </span>
                <span className="status_detail">
                    <img src={require('./PageComponents/icon/good.png')} alt="상태"  width="90px"/>
                    <div className="status_message bold_16">
                        근육량
                    </div>
                </span>
            </div>
            <div id="totay_tip">
                <img src={require('./PageComponents/icon/lightbulb.png')} alt="상태"  width="13px"/>
                <span className="padding_left_8 bold_14">포도류는 강아지에게 치명적입니다.</span>
            </div>
            <div id="diag_service">
                <span className="bold_20">
                    진단 서비스
                </span>
                <div id="diag_start_link" className="bold_20 color_white diag_link">
                    AI 진단 시작하기
                </div>
                <Link to="/MedicalBoard">
                <div id="diag_history_link" className="bold_20 diag_link color_black">
                    진료현황
                </div>
                </Link>
            </div>
            </div>
            <div id="bottom_adv">
                <img src={require('./PageComponents/icon/adv.png')} alt="광고" width="100%" />
                <div id="adv_coating"></div>
            </div>
        </div>
    );
};

export default Home;