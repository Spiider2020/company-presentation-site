import React, { useState, useEffect } from 'react';
import { btnResize } from './tools/Button_resize';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ProjectsTitle, ProjectList, ProjectsBtn, ProjectsLinkText } from '../Data';
import Card from './Card';
import './Projects.scss';

function Projects() {
	const default_size = ProjectsBtn.size;
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
			<div className='h__projects__container__main'>
				<div className='h__projects__container__content'>
					<h2>{ProjectsTitle}</h2>
					<div className='h__projects__cards'>
						{ProjectList.map((item, index) => {
							if (index < 6) {
								let delay = index * 50 + 50;
								return (
									<Card
										key={'card-' + index}
										cardImg={item.img}
										imgAlt={item.alt}
										cardDescription={item.description}
										cardLink={item.link}
										cardLinkText={ProjectsLinkText}
										delay={delay}
									/>
								);
							} else {
								return null;
							}
						})}
					</div>
					<div className='h__projects__button'>
						<Link to={ProjectsBtn.link}>
							<Button
								buttonStyle={ProjectsBtn.type}
								buttonSize={buttonSize}
								buttonColor={ProjectsBtn.color}
							>
								{ProjectsBtn.text}
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

export default Projects;
