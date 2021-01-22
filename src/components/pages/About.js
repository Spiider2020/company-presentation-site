import React from 'react';
import { AboutTitle, TeamMembers } from '../../Data';
import TeamCard from '../TeamCard';
import Footer from '../Footer';
import './About.scss';

function About() {
	return (
		<div className='about__container__main'>
			<div className='about__container__content'>
				<h2>{AboutTitle}</h2>
				<div className='about__cards__container'>
					{TeamMembers.map((item, index) => {
						let delay = index * 100 + 100;
						return (
							<TeamCard
								name={item.name}
								role={item.role}
								description={item.description}
								email={item.emai}
								image={item.img}
								key={'member-' + index}
								delay={delay}
							/>
						);
					})}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default About;
