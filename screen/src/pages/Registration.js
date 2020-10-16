import React, { useState } from 'react';
import './PageComponents/css/Registration.css';
import { Link } from 'react-router-dom';
import { signInWithGoogle, firestore, auth } from '../firebase';

const Registration = () => {
    const [kind, setKind] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [sex, setSex] = useState("");
    const [month, setMonth] = useState(0);
    async function Registration() {
        signInWithGoogle();
        const User = auth.currentUser;
        setTimeout(() => {
            firestore.collection("UserInfo").doc(User.uid)
            .set({
                AnimalKind : kind,
                name: name,
                DetailKind : detail,
                sex: sex,
                age: month
            })
        }, 1500)
    }
    return (
        <div className="page">
            <div className="top_nav nav_with_title">
                <Link to="/Home" className="nav_left_icon">
                    <img src={require('./PageComponents/icon/left-arrow.svg')} alt="뒤로가기" width="16px"/>
                </Link>
                <span className="nav_center_title">등록하기</span>
                <span className="nav_right_icon nav_empty_space"></span>
            </div>
            <div className="inner_page">
                <div className="select_container">
                    <div className="select_box_container">
                        <span onClick>
                            <div className="select_box"><img className="img_center" src={require('./PageComponents/icon/dog.png')} alt="강아지" width="90px"/></div>
                            <div className="select_text regular_20">강아지</div>
                        </span>
                        <span>
                            <div className="select_box"><img className="img_center" src={require('./PageComponents/icon/cat.png')} alt="고양이" width="90px"/></div>
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
                    <div className="reg_form gender_box_container">
                        <div className="gender_box radius_10">수컷</div>
                        <div className="gender_box radius_10">암컷</div>
                    </div>
                    <input className="reg_form" type="text" placeholder="나이를 입력하세요"/>
                    <button onClick={Registration} className="reg_submit background_orange color_white bold_20">
                        완료
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;