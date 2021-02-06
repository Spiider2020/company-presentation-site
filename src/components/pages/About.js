import React from 'react';
// import { AboutTitle, TeamMembers } from '../../Data';
import { AboutTitle, AboutInfo } from '../../Data';
// import TeamCard from '../TeamCard';
import Footer from '../Footer';
import './About.scss';

function About() {
	return (
		<div className='about__container__main'>
			<div className='about__container__content'>
				<h2>{AboutTitle}</h2>
				{AboutInfo.map((item, index) => {
					const contentText = item.text.split('$$');
					return(
						<div className='about__container__info' key={'info-cont-' + index}>
							<h3 className={item.titlePos==='center' ? 'title__pos__center' : 'title__pos__left'}>{item.title}</h3>
							<p>
								{contentText.map((item1 , index1) => {
									if (index1 === 0){
										return item1;
									} else {
										return (
											<>
											<br />
											{item1}
											</>
										)
									}
								})}
							</p>
						</div>
					)
				})}
				{/* <div className='about__cards__container'>
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
				</div> */}
			</div>
			<Footer />
		</div>
	);
}

export default About;
