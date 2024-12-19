import React from 'react';
import "../../styles/home.css";

const SimpleCounter = ({first, second, third, fourth, fifth}) => {
	return (
        <div className="timerContainer">
			<div className="timerBox">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="timerBox">{fifth}</div>
			<div className="timerBox">{fourth}</div>
			<div className="timerBox">{third}</div>
			<div className="timerBox">{second}</div>
			<div className="timerBox">{first}</div>
		</div>
    )
}

export default SimpleCounter;