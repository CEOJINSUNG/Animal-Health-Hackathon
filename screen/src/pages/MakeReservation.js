import React from 'react';
import {Link} from 'react-router-dom';
import PetCard from './PageComponents/Petcard';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const MakeReservation = () => {
    const MONTHS = [
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
      ];
      const WEEKDAYS_LONG = [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일',
      ];
      const WEEKDAYS_SHORT = ['일', '월', '화', '수', '목', '금', '토'];

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
                <DayPicker 
                    months={MONTHS}
                    weekdaysLong={WEEKDAYS_LONG}
                    weekdaysShort={WEEKDAYS_SHORT}
                />
            </div>
        </div>
    );
};

export default MakeReservation;