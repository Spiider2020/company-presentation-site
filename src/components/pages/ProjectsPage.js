import React from 'react';
import { ProjectsTitle, ProjectList, ProjectsLinkText } from '../../Data';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import Footer from '../Footer';
import './ProjectsPage.scss';

function Projects() {
	const checkIndexValContainer = (index) => {
		if (index === 0) {
			return false;
		} else if (index % 2 === 0) {
			return 'fade-left';
		} else {
			return 'fade-right';
		}
	};

	const checkIndexValImg = (index) => {
		if (index === 0) {
			return false;
		} else if (index % 2 === 0) {
			return 'fade-down-right';
		} else {
			return 'fade-down-left';
		}
	};

	return (
		<div className='projects__container__main'>
			<div className='projects__container__content'>
				<h2>{ProjectsTitle}</h2>
				<div className='projects__container__cards'>
					{ProjectList.map((item, index) => {
						return (
							<div
								className={index % 2 === 0 ? 'projects__card projects__bg--light' : 'projects__card projects__bg--dark'}
								key={'proj-' + index}
								data-aos={checkIndexValContainer(index)}
								data-aos-duration='400'
								data-aos-easing='ease-in-out'
							>
								<div className='projects__card__content__container'>
									<div className={index % 2 === 0 ? 'projects__card__img--left' : 'projects__card__img--right'}>
										<img
											src={item.img2}
											alt={item.alt}
											data-aos={checkIndexValImg(index)}
											data-aos-duration='400'
											data-aos-delay='200'
											data-aos-easing='ease-in-out'
										/>
									</div>
									<div className='projects__card__content'>
										<div className='card__content__info'>
											<h3>{item.name}</h3>
											<p>{item.description}</p>
										</div>
									</div>
								</div>

								<div className='projects__card__link'>
									<Link to={item.link}>
										<span>
											<p>{ProjectsLinkText}</p> <FaChevronRight />
										</span>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Projects;
