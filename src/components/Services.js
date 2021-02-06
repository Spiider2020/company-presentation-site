import React, { useState, useEffect } from 'react';
import { btnResize } from './tools/Button_resize';
import { ServQuote, ServTitle, ServList, ServBtn, ServImg } from '../Data';
import { Button } from './Button';
import Servlist from './Servlist';
import './Services.scss';
import Accordion from './Accordion';

function Services() {
	const default_size = ServBtn.size;
	const [buttonSize, setButton] = useState(btnResize(default_size));
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		setButton(btnResize(default_size));
		if (window.innerWidth < 573) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<>
			<div className='serv__container__main'>
				<div className='serv__container__content'>
					<div className='serv__container__content__position'>
						<div
							className='serv__title'
							data-aos='fade'
							data-aos-duration='700'
							data-aos-easing='ease-in-out'
							data-aos-offset='200'
						>
							<h2>&quot;{ServQuote}&quot;</h2>
							<h3>{ServTitle}</h3>
						</div>
						<div className='serv__lists'>
							{ServList.map((item, index) => {
								let delay = index * 100 + 100;
								return (
									<div
										className='serv__lists__col'
										data-aos='fade-up-right'
										data-aos-duration='400'
										data-aos-delay={delay}
										data-aos-easing='ease'
										key={'col' + index}
									>
										{isMobile ? (
											<Accordion
												title={item.title}
												content={<Servlist list={item.serv} />}
											/>
										) : (
											<>
												<h4>{item.title}</h4>
												<Servlist list={item.serv} />
											</>
										)}
									</div>
								);
							})}
						</div>
						<div
							className='serv__download'
							data-aos='flip-up'
							data-aos-duration='600'
							data-aos-delay='50'
							data-aos-easing='ease'
						>
							<a href={ServBtn.link} download>
								<Button
									buttonStyle={ServBtn.type}
									buttonSize={buttonSize}
									buttonColor={ServBtn.color}
								>
									{ServBtn.text}
								</Button>
							</a>
						</div>
					</div>
				</div>
				<div className='serv__container__image'>
					<div className='serv__container__image__position'>
						<img src={ServImg} alt='services' />
					</div>
				</div>
			</div>
		</>
	);
}

export default Services;
