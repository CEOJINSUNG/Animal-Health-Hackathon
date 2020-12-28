import React from 'react';
import './PageComponents/css/Registration.css';
import { Link } from 'react-router-dom';


const Registration = () => {
<<<<<<< Updated upstream
=======
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

    const onClickDog = () => {setKind("강아지");}
    const onClickCat = () => {setKind("고양이");}
    const onChangeName= (e) =>{setName(e.target.value);}
    const onChangeMonth =(e) =>{setMonth(e.target.value);}
    const onChangeDetail =(e) =>{setDetail(e.target.value);}
    const onClickMale = () =>{setSex("수컷");}
    const onClickFemale = () =>{setSex("암컷");}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                            <div className="select_box"><img className="img_center" src={require('./PageComponents/icon/dog.png')} alt="강아지" width="90px"/></div>
=======
                            <div 
                                className={kind=="강아지" ? 'regi_button_on select_box': 'select_box'} 
                                onClick={onClickDog}>
                                <img className="img_center" src={require('./PageComponents/icon/dog.png')} alt="강아지" width="90px"/>
                            </div>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
                    <input className="reg_form" type="text" placeholder="나이를 입력하세요"/>
                    <div className="reg_submit background_orange color_white bold_20">
=======
                    <input className="reg_form" type="text" placeholder="나이를 입력하세요" onChange={onChangeMonth}/>
                    <button onClick={Registration} className="reg_submit background_orange color_white bold_20">
>>>>>>> Stashed changes
                        완료
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registration;