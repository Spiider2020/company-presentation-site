import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../Data';
import { Button } from './Button';
import { btnResize } from './tools/Button_resize';
import TypeText from './tools/TypeText';
import './HeroSection.scss';

function HeroSection() {
	const default_size = Hero.cta_size;
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

	return (
		<>
			<div className='hero__container'>
				<div className='hero__main__container'>
					<div
						className='hero__main__logo'
						data-aos='flip-right'
						data-aos-duration='800'
						data-aos-easing='ease-in-out'
					>
						<img src={Hero.logoSrc} alt='logo' />
					</div>
					<div
						className='hero__main__content'
						data-aos='fade-up'
						data-aos-duration='800'
						data-aos-easing='ease-in-out'
					>
						<TypeText strings={['<h1>' + Hero.motto + '</h1>']} />
						<Link to={Hero.cta_link}>
							<Button
								buttonStyle={Hero.cta_type}
								buttonSize={buttonSize}
								buttonColor={Hero.cta_color}
							>
								{Hero.cta_text}
							</Button>
						</Link>
					</div>
				</div>
				<div className='hero__info__container'>
					<div className='hero__info'>
						<h2>{Hero.part2_heading}</h2>
						<p
							data-aos='fade-right'
							data-aos-duration='800'
							data-aos-easing='ease-in-out'
							data-aos-offset='250'
							data-aos-once='true'
						>
							{Hero.part2_text}
						</p>
						<Link
							to={Hero.p2_btn_link}
							data-aos='fade-up'
							data-aos-duration='800'
							data-aos-easing='ease-in-out'
							data-aos-offset='200'
							data-aos-once='true'
						>
							<Button
								buttonStyle={Hero.p2_btn_type}
								buttonSize={buttonSize}
								buttonColor={Hero.p2_btn_color}
							>
								{Hero.p2_btn_text}
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default HeroSection;
