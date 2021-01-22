import React from 'react';
import { NewsTitle, NewsList } from '../../Data';
import Footer from '../Footer';
import './News.scss';

function News() {
	return (
		<div className='news__container__main'>
			<h2>{NewsTitle}</h2>
			<div className='news__container__content'>
				{NewsList.slice(0)
					.reverse()
					.map((item, index) => {
						return (
							<div
								className='news__item__container'
								key={'news-' + index}
								data-aos={index === 0 ? false : 'zoom-in-up'}
								data-aos-duration='600'
								data-aos-easing='ease-in-out'
							>
								<div className='news__item__title'>
									<h3>{item.title}</h3>
									<h5>{item.added}</h5>
								</div>
								<div className='news__item__content'>
									<div className='content__data'>
										<p>{item.content}</p>
									</div>
								</div>
								<div className='news__item__footer'>
									<p>by {item.by}</p>
								</div>
							</div>
						);
					})}
			</div>
			<Footer />
		</div>
	);
}

export default News;
