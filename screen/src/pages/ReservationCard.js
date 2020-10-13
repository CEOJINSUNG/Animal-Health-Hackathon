import React from 'react';
import { Link } from 'react-router-dom';
import './PageComponents/css/ReservationCard.css';
import Petcard from './PageComponents/Petcard';
import ReservationInfo from './PageComponents/Reservation_Info.js'

const ReservationCard = () => {
    return (
        <div className="page">
            <div className="top_nav nav_with_title">
                <Link to="/MedicalBoard" className="nav_left_icon">
                    <img src={require('./PageComponents/icon/left-arrow.svg')} alt="뒤로가기" width="16px"/>
                </Link>
                <span className="nav_center_title">진료 예약카드</span>
                <span className="nav_right_icon nav_empty_space"></span>
            </div>           
            <div className="inner_page">
                <div className="patient_profile">
                    <div className="sub_menu">
                        <span className="bold_20">환자 정보</span>
                    </div>
                    <Petcard />
                </div>
                <div id="reservation_info">
                    <div className="sub_menu">
                        <span className="bold_20">예약 정보</span>
                    </div>
                    <ReservationInfo />
                </div>
            </div>
            <div id="live_start_button" className="background_red color_white bold_20">
                진료 시작
            </div>
        </div>
    );
};

export default ReservationCard;