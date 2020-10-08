import React from 'react';
//import './css/Common.css';
//import './css/Common_font.css';
import './css/Registration.css';
import { Link } from 'react-router-dom';


const Registration = () => {
    return (
        <div className="page">
            <div className="top_nav nav_with_title">
                <Link to="/" className="nav_left_icon">
                    <img src={require('./icon/left-arrow.svg')} alt="뒤로가기" width="16px"/>
                </Link>
                <span className="nav_center_title">등록하기</span>
                <span className="nav_right_icon nav_empty_space"></span>
            </div>
            <div className="inner_page">
                <div className="select_container">
                    <div className="select_box_container">
                        <span>
                            <div className="select_box"><img className="img_center" src={require('./icon/dog.png')} alt="강아지" width="90px"/></div>
                            <div className="select_text regular_20">강아지</div>
                        </span>
                        <span>
                            <div className="select_box"><img className="img_center" src={require('./icon/cat.png')} alt="고양이" width="90px"/></div>
                            <div className="select_text regular_20">고양이</div>
                        </span>
                    </div>
                </div>
                <form>
                    <input className="reg_form" type="text" placeholder="이름을 입력하세요"/>
                    <select className="reg_form">
                        <option value="" disabled selected>품종</option>
	                    <option value="rab">래브라도 리트리버</option>
                        <option value="sit">시츄</option>
                        <option value="fom">포메라니안</option>
                    </select>
                    radio로 할 예정
                    <input className="reg_form" type="text" placeholder="나이를 입력하세요"/>
                </form>
            </div>
        </div>
    );
};

export default Registration;