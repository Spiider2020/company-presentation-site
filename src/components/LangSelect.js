import React, { useState } from 'react';
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

	return (
		<div
			className='navbar__lang__container'
			onClick={toggleDrop}
			onBlur={toggleDrop}
			tabIndex='0'
		>
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
				<div onClick={handleLangSelectRo}>
					<img src={RoFlag} alt='romanian flag' />
					<p>Romana</p>
				</div>
				<div onClick={handleLangSelectEn}>
					<img src={EnFlag} alt='british flag' />
					<p>English</p>
				</div>
			</div>
		</div>
	);
}

export default LangSelect;
