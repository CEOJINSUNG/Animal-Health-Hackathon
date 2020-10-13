import React from 'react';
import { Link} from "react-router-dom";
import MedicalBoardCard from './PageComponents/MedicalBoard_Card';
import MedicalBoardRecent from './PageComponents/MedicalBoard_Recent';
import './PageComponents/css/MedicalBoard.css';
const { useState} = React;

const MedicalBoard = () => {
    const [data1] = useState({type : "화상 진단기록", date : "2020/09/15", imgSrc : require('./PageComponents/icon/doctor.svg'),
        text1: "댕케어 동물병원", text2: "김호준 수의사", text3: "간 수치가 높은 편입니다. 지방 많은 음식을 주지 마세요."});
    const [data2] = useState({type : "AI 진단기록", date : "2020/09/02", imgSrc : require('./PageComponents/icon/chatbot.svg'),
    text1: "댕케어 AI", text2: "DangAI 1.0 ver", text3: "간 수치가 높은 편입니다. 지방 많은 음식을 주지 마세요."});

    return (
        <div className="page">
            <div className="top_nav nav_with_title">
                    <Link to="/Home" className="nav_left_icon">
                        <img src={require('./PageComponents/icon/left-arrow.svg')} alt="뒤로가기" width="16px"/>
                    </Link>
                    <span className="nav_center_title">진료현황</span>
                    <span className="nav_right_icon nav_empty_space"></span>
                </div>
            <div className="inner_page">
                <Link to="/ReservationCard">
                    <MedicalBoardCard/>
                </Link>
                <div className="division_line"></div>
                <div id="recent_report">
                    <div className="sub_menu">
                        <span className="bold_20">최근 기록</span>
                        <Link to="/Registration" className="underline regular_12 opacity_06 text_link">진료기록 보기</Link>
                    </div>
                </div>
                <MedicalBoardRecent data={data1}/>
                <MedicalBoardRecent data={data2}/>
            </div>
        </div>
    );
};

export default MedicalBoard;