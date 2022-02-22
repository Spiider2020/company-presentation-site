import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Card.scss';

function Card({ cardImg, imgAlt, cardDescription, cardLink, cardLinkText, delay }) {
	return (
		<>
			<div
				className="card__anim__container"
				data-aos="zoom-out-down"
				data-aos-duration="500"
				data-aos-delay={delay}
				data-aos-easing="ease-out"
			>
				<div className="card__container__main">
					<div className="card__container__img">
						<img src={cardImg} alt={imgAlt} />
					</div>
					<div className="card__container__content">
						<div className="card__project_description">
							<h4>{cardDescription}</h4>
						</div>
						<div className="card__link">
							<Link to={cardLink}>
								<p>{cardLinkText}</p>
								<FaChevronRight />
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
