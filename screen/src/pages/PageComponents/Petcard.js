import React, { useEffect, useState } from 'react';
import { firestore } from "../../firebase";

const Home_Petcard = () => {
    const [kind, setKind] = useState("");
    const [name, setName] = useState("");
    const [detail, setDetail] = useState("");
    const [sex, setSex] = useState("");
    const [month, setMonth] = useState(0);
    const [age, setAge] = useState(0);

    useEffect(() => {
        firestore.collection("UserInfo").doc("sample").get().then(doc => {
                setKind(doc.data().AnimalKind);
                setName(doc.data().name);
                setDetail(doc.data().DetailKind);
                setSex(doc.data().sex);
                setMonth(doc.data().age);
                var year = Math.round((doc.data().age/12));
                setAge(year);
            })
    }, [])

    return (
        <div id="temp_card" className="color_white background_orange">
            <span id="card_image">
                <img src={require('./icon/dog.png')} width="104px" alt="사진"/>
            </span>
            <span id="card_text">
                <div>
                    <span className="regular_16">이름</span>
                    <span className="bold_16">{name}</span>
                </div>
                <div>
                    <span className="regular_16">품종</span>
                    <span className="bold_16">{detail}</span>
                </div>
                <div>
                    <span className="regular_16">성별</span>
                    <span className="bold_16">{sex}</span>
                </div>
                <div>
                    <span className="regular_16">나이</span>
                    <span className="bold_16">{age}세({month}개월)</span>
                </div>
            </span>
        </div>
    );
};

export default Home_Petcard;