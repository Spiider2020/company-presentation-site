import React, { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './Accordion.scss';

function Accordion({ title, content }) {
	const [selected, setSelected] = useState(false);

	const toggle = () => {
		setSelected(!selected);
	};

	return (
		<div className='accordion__container'>
			<div className='accordion__title' onClick={toggle}>
				<span>
					{selected ? (
						<FaChevronRight className='accordion__chevr' />
					) : (
						<FaChevronDown className='accordion__chevr' />
					)}
				</span>
				<h4>{title}</h4>
			</div>
			<div className={selected ? 'accordion__content show' : 'accordion__content'}>
				{content}
			</div>
		</div>
	);
}

export default Accordion;
