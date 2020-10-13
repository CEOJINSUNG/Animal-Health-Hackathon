import React from 'react';

const MedicalBoard_Recent = (props) => {
    return (
        <div className="recent_card grey_border padding_15 radius_10">
            <div className="flex_between recent_top">
                <div className="bold_16">{props.data.type}</div>
                <div className="bold_14">{props.data.date}</div>
            </div>
            <div className="recent_contents">
                <img src={props.data.imgSrc} alt="사진" width="83px" />
                <span className="recent_text">
                    <div className="bold_14">{props.data.text1}</div>
                    <div className="regular_14">{props.data.text2}</div>
                    <div className="bold_14">{props.data.text3}</div>
                </span>
            </div>
        </div>
    );
};

export default MedicalBoard_Recent;