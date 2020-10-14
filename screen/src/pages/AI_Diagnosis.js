import React from 'react';
import {Link} from 'react-router-dom';

const AI_Diagnosis = () => {
    return (
        <div className="page">
            <div className="top_nav nav_with_title">
                <Link to="/Home" className="nav_left_icon">
                    <img src={require('./PageComponents/icon/left-arrow.svg')} alt="뒤로가기" width="16px"/>
                </Link>
                <span className="nav_center_title">AI 진단</span>
                <span className="nav_right_icon nav_empty_space"></span>
            </div>
            <div className="inner_page">
                
            </div>
        </div>
    );
};

export default AI_Diagnosis;