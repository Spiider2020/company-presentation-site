import React, { useState, useEffect } from 'react';
import { RoFlag, EnFlag } from '../Data';
import './LangSelect.scss';

export function initLang() {
	if (localStorage.getItem('lang') === null) {
		localStorage.setItem('lang', 'ro');
	}
}

function LangSelect() {
	const [language, SetLanguage] = useState(localStorage.getItem('lang'));
	const [langDrop, setLangDrop] = useState(false);
	const dDown = React.createRef();

	const refreshPage = () => {
		window.location.reload();
	};

	const toggleDrop = () => {
		setLangDrop(!langDrop);
	};

	const closeDrop = () => {
		setLangDrop(false);
	};

	const handleLangSelectRo = () => {
		if (language !== 'ro') {
			SetLanguage('ro');
			closeDrop();
			localStorage.setItem('lang', 'ro');
			refreshPage();
		} else {
			closeDrop();
		}
	};

	const handleLangSelectEn = () => {
		if (language !== 'en') {
			SetLanguage('en');
			closeDrop();
			localStorage.setItem('lang', 'en');
			refreshPage();
		} else {
			closeDrop();
		}
	};

	const handleClickOutside = (e) => {
		if (dDown.current && !dDown.current.contains(e.target)) {
			closeDrop();
		}
	};

	useEffect(() => {
		window.addEventListener('mousedown', handleClickOutside);
		return () => {
			window.removeEventListener('mousedown', handleClickOutside);
		};
	});

	return (
		<div className='navbar__lang__container' onClick={toggleDrop} ref={dDown}>
			<div className='lang__content'>
				<img src={language === 'ro' ? RoFlag : EnFlag} alt='flag' />
				<p>{language}</p>
			</div>
			<div
				className={
					langDrop
						? 'lang__selector__container dispaly__selector'
						: 'lang__selector__container'
				}
			>
				<div className='lang__ro' onClick={handleLangSelectRo}>
					<img src={RoFlag} alt='romanian flag' />
					<p>Romana</p>
				</div>
				<div className='lang__en' onClick={handleLangSelectEn}>
					<img src={EnFlag} alt='british flag' />
					<p>English</p>
				</div>
			</div>
		</div>
	);
}

export default LangSelect;
