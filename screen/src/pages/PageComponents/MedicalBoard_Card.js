import React from 'react';

const MedicalBoard_Card = () => {
    return (
        <div id="Medical_Board_Card">
            <div className="background_orange color_white bold_12 med_card_title">
                진료예약카드
            </div>
            <div className="med_card grey_border padding_15">
                <img className="float_right padding_left_8" src={require('./icon/phone-call.svg')} alt="전화" width="20px"/>
                <img className="float_right" src={require('./icon/pin.svg')} alt="지도" width="20px"/>
                <div className="margin_bottom_8">
                    <span className="regular_14 med_left">이름</span>
                    <span className="bold_14 med_right">장군</span>
                </div>
                <div className="margin_bottom_8">
                    <span className="regular_14 med_left">병원명</span>
                    <span className="bold_14 med_right">댕케어 동물병원</span>
                </div>
                <div className="margin_bottom_8">
                    <span className="regular_14 med_left">담당 수의사</span>
                    <span className="bold_14 med_right">김진성 <span class="regular_14">수의사</span></span>
                </div>
                <div className="margin_bottom_8">
                    <span className="regular_14 med_left">예약 날짜</span>
                    <span className="bold_14 med_right color_red">2020-09-29(화) 16:30</span>
                </div>
            </div>
        </div>
    );
};

export default MedicalBoard_Card;