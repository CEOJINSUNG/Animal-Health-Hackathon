import React from 'react';
import { Link } from 'react-router-dom';
import './css/Splash.css';

const Splash = () => {
    return (
        <div className="page">
            <div id="splash_box">
            <div id="splash_text">
                <div className="bold_24">당신의 반려동물을 위한</div>
                <div className="bold_24 color_orange">비대면 의료서비스</div>
            </div>
            <Link to="/Home">
                <img  id="splash_img" src={require('./icon/pawprint.svg')} alt="당근케어" width="150px" />
            </Link>
            <div id="splash_title">
                <span className="bold_30">Dang</span>
                <span className="bold_30 color_orange"> Care</span>
            </div>
            </div>
        </div>
    );
};

export default Splash;