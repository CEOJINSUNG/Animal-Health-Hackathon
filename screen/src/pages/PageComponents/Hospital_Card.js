import React from 'react';
import {Link} from 'react-router-dom';

const Hospital_Card = () => {
    return (
        <div className="hospital_card">
            <img src={require('./icon/hospital.svg')} alt="병원" width="85px"/>
            <div className="hospital_card_text">
                <div className="bold_16">댕케어 동물병원</div>
                <div className="bold_16 color_orange">평점 4.3 / 5</div>
                <div className="regular_16">02-123-4556</div>
            </div>
            <Link to="/ChooseDoctor">
            <div className="hospital_card_button background_orange color_white bold_16">
                예약하기
            </div>
            </Link>
        </div>
    );
};

export default Hospital_Card;