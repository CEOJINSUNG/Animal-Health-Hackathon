import React from 'react';
import {Link} from 'react-router-dom';
import './PageComponents/css/Hospital.css';
import HospitalCard from './PageComponents/Hospital_Card';

const ChooseHospital = () => {
    return (
        <div className="page">
            <div className="top_nav nav_with_title">
                <Link to="/Home" className="nav_left_icon">
                    <img src={require('./PageComponents/icon/left-arrow.svg')} alt="뒤로가기" width="16px"/>
                </Link>
                <span className="nav_center_title">주변 병원찾기</span>
                <span className="nav_right_icon nav_empty_space"></span>
            </div>
            <div className="inner_page">
                <div id="near_hospital">
                    <div className="bold_20 ">우리동네 동물병원</div>
                    <HospitalCard />
                    <HospitalCard />
                    <HospitalCard />
                    <HospitalCard />
                    <HospitalCard />
                </div>
            </div>
        </div>
    );
};

export default ChooseHospital;