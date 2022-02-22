import React, { Component } from 'react';
import Slider from 'react-slick';
import './Carousel.scss';

class Carousel extends Component {
	render() {
		const images = this.props.images;
		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: 'linear',
		};
		return (
			<div className="slider__main">
				<Slider {...settings}>
					{images.map((item, index) => {
						return (
							<div className="carousel__image__container" key={'carousel-' + index}>
								<img src={item} alt="presentation" key={'carousel-' + index} />
							</div>
						);
					})}
				</Slider>
			</div>
		);
	}
}

export default Carousel;
