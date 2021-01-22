import React from 'react';
import './TeamCard.scss';

function TeamCard({ name, role, description, email, image, key, delay }) {
	const getDelay = () => {
		if (window.innerWidth < 1025) {
			return 0;
		} else {
			return delay;
		}
	};
	return (
		<div
			className='member__container__main'
			key={key}
			data-aos='zoom-in-left'
			data-aos-duration='400'
			data-aos-delay={getDelay()}
			data-aos-easing='ease-in-out'
		>
			<div className='member__container__title'>
				<p>{role}</p>
			</div>
			<div className='member__upper_container'>
				<div className='member__img__container'>
					<img src={image} alt='member' />
				</div>
				<div className='member__info__container'>
					<h4>{name}</h4>
					<p>{email}</p>
				</div>
			</div>
			<div className='member__lower__container'>
				<p className='member_desc'>{description}</p>
			</div>
		</div>
	);
}

export default TeamCard;
