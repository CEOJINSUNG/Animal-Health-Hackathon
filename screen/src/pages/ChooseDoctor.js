import React from 'react';
import DoctorCard from './PageComponents/Doctor_Card';
import {Link} from 'react-router-dom';
/*css는 ReservationCard랑 합침*/
const ChooseDoctor = () => {
    return (
        <div className="page">
            <div className="top_nav nav_with_title">
                <Link to="/ChooseHospital" className="nav_left_icon">
                    <img src={require('./PageComponents/icon/left-arrow.svg')} alt="뒤로가기" width="16px"/>
                </Link>
                <span className="nav_center_title">의료진 선택</span>
                <span className="nav_right_icon nav_empty_space"></span>
            </div>
            <div className="inner_page">
                <div className="choose_doctor">
                    <div className="doctor_card_container"><DoctorCard /></div>
                    <Link to="/MakeReservation" >
                        <div className="doctor_choose_button color_white bold_14">
                            화상진료 예약하기
                        </div>
                    </Link>
                </div>
                <div className="choose_doctor">                
                    <div className="doctor_card_container"><DoctorCard /></div>
                    <div className="doctor_choose_button color_white bold_14">
                        화상진료 예약하기
                    </div>
                </div>
                <div className="choose_doctor">                
                    <div className="doctor_card_container"><DoctorCard /></div>
                    <div className="doctor_choose_button color_white bold_14">
                        화상진료 예약하기
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseDoctor;