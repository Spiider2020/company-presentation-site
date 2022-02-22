import React from 'react';
import { BitrixLogo, BitrixDescription, BitrixSlideImages } from '../../../Data';
import Carousel from '../../Carousel';
import Footer from '../../Footer';
import './Bitrix24.scss';

function Bitrix24() {
	const slideImages = BitrixSlideImages.map((item) => {
		return item.large;
	});

	return (
		<div className="bitrix__container__main">
			<div className="bitrix__container__content">
				<h2>
					<img src={BitrixLogo} alt="bitrix24 logo" />
				</h2>
				<div className="yt__container">
					<iframe
						className="yt__bitrix24__clip"
						src="https://www.youtube.com/embed/4V3WGmMh3Qs"
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
					></iframe>
				</div>
				<p>{BitrixDescription}</p>
				<Carousel images={slideImages} />
			</div>
			<Footer />
		</div>
	);
}

export default Bitrix24;
