import React from 'react';
import ContactForm from '../ContactForm';
import Footer from '../Footer';
import './Contact.scss';

function Contact() {
	return (
		<div className='contact__container'>
			<ContactForm formStyle='main' />
			<Footer />
		</div>
	);
}

export default Contact;
