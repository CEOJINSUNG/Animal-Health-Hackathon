import React from 'react';

const Doctor_Card = () => {
    return (
        <div id="doctor_card">
            <img src={require('./icon/doctor.svg')} alt="의사" width="83px" />
            <span className="doctor_card_text">
                <div>
                    <span className="bold_16">김진성</span><span className="regular_16"> 수의사</span>
                </div>
                <div>
                    <span className="regular_16">주요 진료과목</span><span className="bold_16"> 내과/피부</span>
                </div>
                <div>
                    <span className="regular_16">근무경력</span><span className="bold_16"> 2016~</span>
                </div>
            </span>
            <span className="doctor_datail_container">
                <span className="doctor_detail bold_12 color_white">
                    자세히<br />보기
                </span>
            </span>           
        </div>
            
    );
};

export default Doctor_Card;