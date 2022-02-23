import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import Popup from './Popup';
import { btnResize } from './tools/Button_resize';
import {
	FormData,
	MaxFooterMessage,
	MaxContactMessage,
	CheckboxAgreementText,
	PopUpSending,
	PopUpMessage,
	PopUpErrMessage,
} from '../Data';
import './ContactForm.scss';

function ContactForm({ formStyle }) {
	const agreeText = CheckboxAgreementText.split('$$');
	const default_size = FormData.btnSize;
	const serverLocation = process.env.REACT_APP_API_HOST + '/send';
	const initialFormContent = {
		name: '',
		email: '',
		phone: '',
		company: '-- not filled in --',
		message: '-- not filled in --',
	};

	const [buttonSize, setButton] = useState(btnResize(default_size));
	const [isOpen, setIsOpen] = useState(false);
	const [popUpTitle, setPopUpTitle] = useState('');
	const [popUpContent, setPopUpContent] = useState('');
	const [formContent, setFormContent] = useState(initialFormContent);

	const handleInputChange = (e) => {
		setFormContent({ ...formContent, [e.target.name]: e.target.value });
	};

	const getAgreeText = () => {
		return (
			<>
				{agreeText.map((item, index) => {
					if (index === 0) {
						return <span key={'txt-' + index}>{item}</span>;
					} else {
						return (
							<span key={'txt-' + index}>
								<br />
								{item}
							</span>
						);
					}
				})}
			</>
		);
	};

	const togglePopup = () => {
		setIsOpen(!isOpen);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		e.target.reset();
		setPopUpTitle(PopUpSending);
		togglePopup();
		fetch(serverLocation, {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(formContent),
		})
			.then((respose) => respose.json())
			.then((responseMessage) => {
				if (responseMessage === 'success') {
					setPopUpTitle('Succes!');
					setPopUpContent(PopUpMessage);
				} else {
					setPopUpTitle('Ceva nu a mers!');
					setPopUpContent(PopUpErrMessage);
				}
			});
	};

	const handleChangeButton = () => {
		setButton(btnResize(default_size));
	};

	useEffect(() => {
		handleChangeButton();
		window.addEventListener('resize', handleChangeButton);
		return () => {
			window.removeEventListener('resize', handleChangeButton);
		};
	});

	let formDisplay;

	if (formStyle === 'footer') {
		formDisplay = (
			<div className='footer__form__container'>
				<form className='footer__form' spellCheck='false' onSubmit={handleSubmit}>
					<input
						className='footer__form--half'
						type='text'
						name='name'
						patter='[a-zA-Z]'
						minLength='4'
						placeholder={FormData.defName}
						onChange={handleInputChange}
						required
					/>
					<input
						className='footer__form--half'
						type='email'
						name='email'
						pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
						placeholder={FormData.defEmail}
						onChange={handleInputChange}
						required
					/>
					<input
						className='footer__form--half'
						type='tel'
						name='phone'
						pattern='[0-9]{9,10}'
						placeholder={FormData.defPhone}
						onChange={handleInputChange}
						required
					/>
					<input
						className='footer__form--half'
						type='text'
						name='company'
						placeholder={FormData.defCompany}
						onChange={handleInputChange}
					/>
					<input
						className='footer__form--full'
						type='text'
						name='message'
						placeholder={FormData.defMessage + ' (max ' + MaxFooterMessage + ' chars)'}
						maxLength={MaxFooterMessage}
						onChange={handleInputChange}
					/>
					<div className='footer__form--full footer__form__agree'>
						<label htmlFor='agreement'>{getAgreeText()}</label>
						<input
							type='checkbox'
							id='agreement'
							name='agreement'
							value='agree'
							className='footer__form__checkbox'
							required
						/>
					</div>
					<div className='footer__form--btn'>
						<Button
							buttonStyle={FormData.btnType}
							buttonSize={buttonSize}
							buttonColor={FormData.btnColor}
							type='submit'
						>
							{FormData.btnText}
						</Button>
					</div>
				</form>
				{isOpen && <Popup title={popUpTitle} content={popUpContent} handleClose={togglePopup} />}
			</div>
		);
	} else if (formStyle === 'main') {
		formDisplay = (
			<div className='contact__form__main__container'>
				<div className='contact__form__container'>
					<form className='contact__form' spellCheck='false' onSubmit={handleSubmit}>
						<label htmlFor='name'>{FormData.defName}</label>
						<br />
						<input
							className='contact__form__input'
							type='text'
							name='name'
							id='name'
							patter='[a-zA-Z]'
							minLength='4'
							placeholder=' '
							onChange={handleInputChange}
							required
						/>
						<label htmlFor='email'>{FormData.defEmail}</label>
						<br />
						<input
							className='contact__form__input'
							type='email'
							name='email'
							id='email'
							pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
							placeholder=' '
							onChange={handleInputChange}
							required
						/>
						<label htmlFor='phone'>{FormData.defPhone}</label>
						<br />
						<input
							className='contact__form__input'
							type='tel'
							name='phone'
							id='phone'
							pattern='[0-9]{9,10}'
							placeholder=' '
							onChange={handleInputChange}
							required
						/>
						<label htmlFor='company'>{FormData.defCompany}</label>
						<br />
						<input
							className='contact__form__input'
							type='text'
							name='company'
							id='company'
							onChange={handleInputChange}
							placeholder=' '
						/>
						<label htmlFor='message'>
							{FormData.defMessage + ' (max ' + MaxContactMessage + ' chars)'}
						</label>
						<br />
						<textarea
							className='contact__form__input'
							type='text'
							name='message'
							id='message'
							placeholder=' '
							rows='5'
							maxLength={MaxContactMessage}
							onChange={handleInputChange}
						/>
						<div className='contact__form__agree'>
							<label htmlFor='agreement1'>{getAgreeText()}</label>
							<input
								type='checkbox'
								id='agreement1'
								name='agreement1'
								value='agree'
								className='contact__form__checkbox'
								required
							/>
						</div>
						<div className='contact__form__btn'>
							<Button
								buttonStyle={FormData.btnType}
								buttonSize={buttonSize}
								buttonColor={FormData.btnColor}
								type='submit'
							>
								{FormData.btnText}
							</Button>
						</div>
					</form>
					{isOpen && <Popup title={popUpTitle} content={popUpContent} handleClose={togglePopup} />}
				</div>
			</div>
		);
	} else {
		formDisplay = <h1>no style selected</h1>;
	}

	return <>{formDisplay}</>;
}

export default ContactForm;
