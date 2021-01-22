import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { btnResize } from './tools/Button_resize';
import {
	FormData,
	MaxFooterMessage,
	MaxContactMessage,
	CheckboxAgreementText,
} from '../Data';
import './ContactForm.scss';

function ContactForm({ formStyle }) {
	const agreeText = CheckboxAgreementText.split('$$');

	const getAgreeText = () => {
		return (
			<>
				{agreeText.map((item, index) => {
					if (index === 0) {
						return item;
					} else {
						return (
							<>
								<br />
								{item}
							</>
						);
					}
				})}
			</>
		);
	};
	const default_size = FormData.btnSize;
	const [buttonSize, setButton] = useState(btnResize(default_size));

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
				<form className='footer__form' spellCheck='false' action=''>
					<input
						className='footer__form--half'
						type='text'
						name='name'
						patter='[a-zA-Z]'
						minLength='4'
						placeholder={FormData.defName}
						required
					/>
					<input
						className='footer__form--half'
						type='email'
						name='email'
						placeholder={FormData.defEmail}
						required
					/>
					<input
						className='footer__form--half'
						type='tel'
						name='phone'
						pattern='[0-9]{9,10}'
						placeholder={FormData.defPhone}
						required
					/>
					<input
						className='footer__form--half'
						type='text'
						name='company'
						placeholder={FormData.defCompany}
					/>
					<input
						className='footer__form--full'
						type='text'
						name='message'
						placeholder={
							FormData.defMessage + ' (max ' + MaxFooterMessage + ' chars)'
						}
						maxLength={MaxFooterMessage}
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
			</div>
		);
	} else if (formStyle === 'main') {
		formDisplay = (
			<div className='contact__form__main__container'>
				<div className='contact__form__container'>
					<form className='contact__form' spellCheck='false' action=''>
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
							required
						/>
						<label htmlFor='email'>{FormData.defEmail}</label>
						<br />
						<input
							className='contact__form__input'
							type='email'
							name='email'
							id='email'
							placeholder=' '
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
							required
						/>
						<label htmlFor='company'>{FormData.defCompany}</label>
						<br />
						<input
							className='contact__form__input'
							type='text'
							name='company'
							id='company'
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
				</div>
			</div>
		);
	} else {
		formDisplay = <h1>no style selected</h1>;
	}

	return <>{formDisplay}</>;
}

export default ContactForm;
