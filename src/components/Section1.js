import React from 'react';
import { CircuitsSrc } from '../Data';
import './Section1.scss';

function Section1() {
	return (
		<>
			<div className='section1__container'>
				<img
					data-aos='animate_fadeIn animate__pulse'
					data-aos-duration='700'
					data-aos-easing='ease-in-out'
					data-aos-once='true'
					src={CircuitsSrc}
					alt='circuits'
				/>
			</div>
		</>
	);
}

export default Section1;
