import React from 'react';

function Servlist({ list }) {
	return (
		<div>
			<ul className='serv__lists--services'>
				{list.map((listItem, index1) => {
					return <li key={'li-' + index1}>{listItem}</li>;
				})}
			</ul>
		</div>
	);
}

export default Servlist;
