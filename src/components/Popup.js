import React from 'react';
import './Popup.scss';

const Popup = (props) => {
	return (
		<div className='popup-box'>
			<div className='box'>
				<span className='close-icon' onClick={props.handleClose}>
					x
				</span>
				<h3>{props.title}</h3>
				<p>{props.content}</p>
			</div>
		</div>
	);
};

export default Popup;
