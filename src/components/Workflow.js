import React, { useState, useEffect } from 'react';
import { WorkflowTitle, WorkflowPasi } from '../Data';
import Accordion from './Accordion';
import './Workflow.scss';

function Workflow() {
	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		if (window.innerWidth < 767) {
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
			<div className='workflow__container__main'>
				<div className='workflow__container__content'>
					<h2>{WorkflowTitle}</h2>
					<div className='workflow__container__steps'>
						{WorkflowPasi.map((item, index) => {
							const wf_paragraph = () => {
								return <p>{item.text}</p>;
							};
							let delay = index * 100 + 100;
							return (
								<div
									className='workflow__steps__col'
									key={'pas-' + index}
									data-aos='fade-right'
									data-aos-duration='400'
									data-aos-delay={delay}
									data-aos-easing='ease'
								>
									{isMobile ? (
										<Accordion title={item.title} content={wf_paragraph()} />
									) : (
										<>
											<h4>{item.title}</h4>
											{wf_paragraph()}
										</>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Workflow;
