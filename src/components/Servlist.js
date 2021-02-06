import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';

function Servlist({ list }) {
	return (
		<div>
			<ul className='serv__lists--services'>
				{list.map((listItem, index1) => {
					return (
						<li key={'li-' + index1}>
							<span>
								<FaRegCheckCircle className='services--checklist' />
							</span>
							<p>{listItem}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Servlist;
