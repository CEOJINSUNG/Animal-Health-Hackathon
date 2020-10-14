import React from 'react';
import {Link} from 'react-router-dom';
import PetCard from './PageComponents/Petcard';

const MakeReservation = () => {
    return (
        <div className="page">
            <div className="top_nav nav_with_title">
                    <Link to="/ChooseDoctor" className="nav_left_icon">
                        <img src={require('./PageComponents/icon/left-arrow.svg')} alt="뒤로가기" width="16px"/>
                    </Link>
                <span className="nav_center_title">화상진료 예약</span>
                <span className="nav_right_icon nav_empty_space"></span>
            </div>
            <div className="inner_page">
                <div className="sub_menu bold_20 margin_top_16">나의 반려동물</div>
                <PetCard />
                <div className="sub_menu bold_24 margin_top_16">예약 일시</div>
            </div>
        </div>
    );
};

export default MakeReservation;