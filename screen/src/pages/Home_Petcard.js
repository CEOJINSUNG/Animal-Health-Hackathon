import React from 'react';

const Home_Petcard = () => {
    return (
        <div id="temp_card" className="color_white background_orange">
            <span id="card_image">
                <img src={require('./icon/dog.png')} width="104px" alt="사진"/>
            </span>
            <span id="card_text">
                <div className="bold_16">
                    장군
                </div>
                <div className="bold_16">
                    3세(35개월)
                </div>
                <div className="bold_16">
                    래브라도 리트리버
                </div>
                <div className="bold_16">
                    다음 진료: 2020/09/39
                </div>
            </span>
        </div>
    );
};

export default Home_Petcard;