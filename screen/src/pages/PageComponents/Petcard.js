import React from 'react';

const Home_Petcard = () => {
    return (
        <div id="temp_card" className="color_white background_orange">
            <span id="card_image">
                <img src={require('./icon/dog.png')} width="104px" alt="사진"/>
            </span>
            <span id="card_text">
                <div>
                    <span className="regular_16">이름</span>
                    <span className="bold_16">장군</span>
                </div>
                <div>
                    <span className="regular_16">품종</span>
                    <span className="bold_16">래브라도 리트리버</span>
                </div>
                <div>
                    <span className="regular_16">성별</span>
                    <span className="bold_16">수컷</span>
                </div>
                <div>
                    <span className="regular_16">나이</span>
                    <span className="bold_16">3세(35개월)</span>
                </div>
            </span>
        </div>
    );
};

export default Home_Petcard;