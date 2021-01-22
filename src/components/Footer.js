import React from 'react';
import ContactForm from './ContactForm';
import { ContactTitle, ContactData, SocialData } from '../Data';
import {
	FaPhoneAlt,
	FaEnvelope,
	FaAddressCard,
	FaReact,
	FaNodeJs,
	FaHtml5,
	FaSass,
	FaCss3Alt,
} from 'react-icons/fa';
import './Footer.scss';

function Footer() {
	return (
		<>
			<div className='footer__container__main'>
				<div className='footer__container__content'>
					<h2>{ContactTitle}</h2>
					<div className='footer__info'>
						<div className='footer__info--left'>
							<ContactForm formStyle='footer' />
						</div>
						<div className='footer__info--right'>
							<div className='footer__right__container'>
								<div className='footer__right__details'>
									<div className='right__details__spacer'>
										<h4>
											<span>
												<FaPhoneAlt />
											</span>
											{ContactData.phoneTitle}
											<br />
											{ContactData.phone}
										</h4>
										<h4>
											<span>
												<FaEnvelope />
											</span>
											{ContactData.emailTitle}
											<br />
											{ContactData.email}
										</h4>
										<h4>
											<span>
												<FaAddressCard />
											</span>
											{ContactData.addressTitle}
											<br />
											{ContactData.address}
										</h4>
									</div>
								</div>
								<div className='footer__right__social'>
									<h4>{ContactData.socialTitle}</h4>
									<div className='footer__links__container'>
										{SocialData.map((item, index) => {
											return (
												<a
													href={item.link}
													key={'social-' + index}
													target='_blank'
													rel='noopener noreferrer'
												>
													<img src={item.logo} alt={item.name} />
												</a>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
					<p className='footer__copyright'>
						Copyright &#169;DreamOnIT. <br />
						Powered by
						<span>
							&nbsp;&nbsp; <FaReact />
							&nbsp;&nbsp; <FaNodeJs />
							&nbsp;&nbsp; <FaSass />
							&nbsp;&nbsp; <FaHtml5 />
							&nbsp;&nbsp; <FaCss3Alt />
						</span>
					</p>
				</div>
			</div>
		</>
	);
}

export default Footer;
