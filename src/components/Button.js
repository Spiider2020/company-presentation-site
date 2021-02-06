import React from 'react';
import './Button.scss';

const STYLES = ['btn--primary', 'btn--primary--color', 'btn--outline', 'btn--pill'];

const SIZES = ['btn--large', 'btn--small', 'btn--mobile', 'btn--wide'];

const COLOR = [
	'primary',
	'white',
	'blue',
	'yellow',
	'dark',
	'orange',
	'bg--white',
	'bg--blue',
	'bg--yellow',
	'bg--dark',
	'bg--orange',
];

export const Button = ({
	children,
	type,
	onClick,
	buttonStyle,
	buttonSize,
	buttonColor,
}) => {
	const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
	const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
	const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

	return (
		<button
			className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};
