import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import Petcard from './PageComponents/Petcard';
import './PageComponents/css/AI_diag.css';
import { useEffect, useState } from 'react';
import { firestore } from "../firebase"


const AI_Diagnosis = () => {
    const history = useHistory()
    const [buttonValue, setButtonValue] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) //19개, 0~18
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [fecesTime, setFecesTime] = useState(0); //배변주기
    const [fecesStatus, setFecesStatus] = useState(""); //배변 상태

    const onClickDiag = (e) => {
        setButtonValue(
            buttonValue.map((item, index) => {
                if (index == e.target.value) {
                    return !item;
                } else {
                    return item;
                }
            }
            ));
        console.log({ buttonValue });
    }

    async function Diagnosis() {
        await firestore.collection("UserInfo").doc("sample").update({
            height: height,
            weight: weight,
            fecesTime: fecesTime,
            fecesStatus: fecesStatus,
            status: buttonValue,
        })
        history.push("/ChooseHospital")
    }

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
                <div id="home_my_pet">
                    <div className="sub_menu">
                        <span className="bold_20">나의 반려동물</span>
                    </div>
                    <Petcard />
                </div>
                <div>
                    <ul id="AI_diag_list">
                        <li><span>건강정보 입력하기</span></li>
                        <form>
                            <label className="diag_label">신장</label>
                            <input type="number" className="diag_input" onChange={({ target: { value } }) => setHeight(value)}></input>cm
                            <br/>
                            <label className="diag_label">체중</label>
                            <input type="number" className="diag_input" onChange ={({ target: { value } }) => setWeight(value)}></input>kg
                        </form>
                        <li><span>배변 활동</span></li>
                        <form>
                        <label className="diag_label">배변 주기</label>
                        <input type="number" className="diag_input" onChange={({ target: { value } }) => setFecesTime(value)}></input>시간
                        <br />
                        <label className="diag_label">배변 상태</label>
                        <select name="feces_status" onChange={({ target: { value } }) => setFecesStatus(value)}>
                            <option value="1">정상</option>
                            <option value="2">묽은 변</option>
                            <option value="3">혈변</option>
                            <option value="4">녹색 변</option>
                        </select>
                        </form>
                        <li><span>추가 증상(선택)</span></li>
                        <div id="AI_diag_button_container">
                            <button value ="0" onClick={onClickDiag} className={buttonValue[0] ? 'diag_button_on': 'diag_button_off'}>구토</button>
                            <button value ="1" onClick={onClickDiag} className={buttonValue[1] ? 'diag_button_on': 'diag_button_off'}>경련</button>
                            <button value ="2" onClick={onClickDiag} className={buttonValue[2] ? 'diag_button_on': 'diag_button_off'}>마비</button>
                            <button value ="3" onClick={onClickDiag} className={buttonValue[3] ? 'diag_button_on': 'diag_button_off'}>복부팽창</button>
                            <button value ="4" onClick={onClickDiag} className={buttonValue[4] ? 'diag_button_on': 'diag_button_off'}>체중 감소</button>
                            <button value ="5" onClick={onClickDiag} className={buttonValue[5] ? 'diag_button_on': 'diag_button_off'}>식욕 감퇴</button>
                            <button value ="6" onClick={onClickDiag} className={buttonValue[6] ? 'diag_button_on': 'diag_button_off'}>심하게 긁음</button>
                            <button value ="7" onClick={onClickDiag} className={buttonValue[7] ? 'diag_button_on': 'diag_button_off'}>비듬</button>
                            <button value ="8" onClick={onClickDiag} className={buttonValue[8] ? 'diag_button_on': 'diag_button_off'}>기침</button>
                            <button value ="9" onClick={onClickDiag} className={buttonValue[9] ? 'diag_button_on': 'diag_button_off'}>혈뇨</button>
                            <button value ="10" onClick={onClickDiag} className={buttonValue[10] ? 'diag_button_on': 'diag_button_off'}>혈변</button>
                            <button value ="11" onClick={onClickDiag} className={buttonValue[11] ? 'diag_button_on': 'diag_button_off'}>구강출혈</button>
                            <button value ="12" onClick={onClickDiag} className={buttonValue[12] ? 'diag_button_on': 'diag_button_off'}>발열</button>
                            <button value ="13" onClick={onClickDiag} className={buttonValue[13] ? 'diag_button_on': 'diag_button_off'}>호흡곤란</button>
                            <button value ="14" onClick={onClickDiag} className={buttonValue[14] ? 'diag_button_on': 'diag_button_off'}>뒷다리 힘빠짐</button>
                            <button value ="15" onClick={onClickDiag} className={buttonValue[15] ? 'diag_button_on': 'diag_button_off'}>결막염</button>
                            <button value ="16" onClick={onClickDiag} className={buttonValue[16] ? 'diag_button_on': 'diag_button_off'}>무기력증</button>
                            <button value ="17" onClick={onClickDiag} className={buttonValue[17] ? 'diag_button_on': 'diag_button_off'}>잦은 콧물</button>
                            <button value ="18" onClick={onClickDiag} className={buttonValue[18] ? 'diag_button_on': 'diag_button_off'}>헐떡거림</button>
                        </div>
                    </ul>
                </div>
                
            </div>
            <button onClick={() => Diagnosis()} className="button_bottom background_orange bold_20">
                분석하기
            </button>
        </div>
    );
};

export default AI_Diagnosis;