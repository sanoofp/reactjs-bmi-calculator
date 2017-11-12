import React from 'react';

const BMIResult = (props) => {
    return (
        <div className="bmi-container2" style={{
            backgroundColor: props.backgroundColor, 
            opacity: `${(props.resultBoxShow) ? '1' : '0'}`
        }}>
            <p>{props.condition}</p>
            <h1>{props.bmi}</h1>
        </div>
    );
}

export default BMIResult;