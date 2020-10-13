import React from 'react';
import DoctorCard from './Doctor_Card';

const Reservation_Info = () => {
    return (
        <div id="reserv_info_card" className="grey_border padding_15 radius_10">
            <DoctorCard />
            <div className="reserv_info_text">
                <div>
                    <span className="Regular_16">병원명</span><span className="bold_16">댕케어 동물병원</span>
                </div>
                <div>
                    <span className="Regular_16">예약 날짜</span><span className="bold_16">2020-09-29(화) 16:30</span>
                </div>
                <div>
                    <span className="Regular_16">주소</span><span className="bold_16">서울특별시 종로구 성균관로 25-1 (명륜3가)</span>
                </div>
                <div>
                    <span className="Regular_16">전화번호</span><span className="bold_16">02-123-4567</span>
                </div>
                <div>
                    <span className="Regular_16">AI 진단 결과</span><span className="bold_16 color_blue">H29Q6G</span>
                </div>
                <div>
                    <span className="Regular_16">추가 증상</span><span className="bold_16">배쪽 피부가 많이 올라오고 아파해요.</span>
                </div>
            </div>
        </div>
    );
};

export default Reservation_Info;