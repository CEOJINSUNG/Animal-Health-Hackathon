import React from 'react';
import './PageComponents/css/Registration.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { signInWithGoogle, firestore, auth } from '../firebase';



const Registration = () => {
    const [kind, setKind] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [sex, setSex] = useState("");
    const [month, setMonth] = useState(0);
    async function Registration() {
        await firestore.collection("UserInfo").doc("sample").update({
                AnimalKind: kind,
                name: name,
                DetailKind: detail,
                sex: sex,
                age: month,
            })
    }

    const onClickDog = () => { setKind("강아지"); }
    const onClickCat = () => { setKind("고양이"); }
    const onChangeName = (e) => { setName(e.target.value); }
    const onChangeMonth = (e) => { setMonth(e.target.value); }
    const onChangeDetail = (e) => { setDetail(e.target.value); }
    const onClickMale = () => { setSex("수컷"); }
    const onClickFemale = () => { setSex("암컷"); }
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
                        <span>
                            <div 
                                className={kind=="강아지" ? 'regi_button_on select_box': 'select_box'} 
                                onClick={onClickDog}>
                                <img className="img_center" src={require('./PageComponents/icon/dog.png')} alt="강아지" width="90px"/>
                            </div>
                            <div className="select_text regular_20">강아지</div>
                        </span>
                        <span>
                            <div 
                                className={kind=="고양이" ? 'regi_button_on select_box': 'select_box'} 
                                onClick={onClickCat}>
                                <img className="img_center" src={require('./PageComponents/icon/cat.png')} alt="고양이" width="90px"/>
                            </div>
                            <div className="select_text regular_20">고양이</div>
                        </span>
                    </div>
                </div>
                <form>
                    <input className="reg_form" type="text" placeholder="이름을 입력하세요" onChange={onChangeName}/>
                    <select className="reg_form" onChange={onChangeDetail}>
                        <option value="" disabled selected>품종</option>
	                    <option value="rab">래브라도 리트리버</option>
                        <option value="sit">시츄</option>
                        <option value="fom">포메라니안</option>
                    </select>
                    <div className="reg_form gender_box_container">
                        <div className={sex=="수컷" ? 'gender_box_male gender_box': 'gender_box color_blue'} onClick={onClickMale}>수컷</div>
                        <div className={sex=="암컷" ? 'gender_box_female gender_box': 'gender_box color_pink'} onClick={onClickFemale}>암컷</div>
                    </div>
                    <input className="reg_form" type="text" placeholder="나이를 입력하세요" onChange={onChangeMonth}/>
                    <button onClick={Registration} className="reg_submit background_orange color_white bold_20">
                        완료
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Registration;