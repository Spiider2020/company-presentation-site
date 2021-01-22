import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import './Card.scss';

function Card({ cardImg, imgAlt, cardDescription, cardLink, cardLinkText, delay }) {
	return (
		<>
			<div
				className='card__container__main'
				data-aos='zoom-out-down'
				data-aos-duration='500'
				data-aos-delay={delay}
				data-aos-easing='ease-out-cubic'
			>
				<div className='card__container__img'>
					<img src={cardImg} alt={imgAlt} />
				</div>
				<div className='card__container__content'>
					<div className='card__project_description'>
						<h4>{cardDescription}</h4>
					</div>
					<div className='card__link'>
						<a href={cardLink}>
							<p>{cardLinkText}</p>
							<FaChevronRight />
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
