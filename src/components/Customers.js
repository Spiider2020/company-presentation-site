import React from 'react';
import { CustomerTitle, CustomerList } from '../Data';
import './Customers.scss';

function Customers() {
	return (
		<>
			<div className='customers__container__main'>
				<div className='customers__container__content'>
					<h2>{CustomerTitle}</h2>
					<div className='customers__container__logos'>
						{CustomerList.map((item, index) => {
							let delay = index * 50 + 50;
							return (
								<a
									className='customers__link'
									href={item.link}
									key={'customer-' + index}
									data-aos='zoom-in'
									data-aos-duration='400'
									data-aos-delay={delay}
									data-aos-easing='ease'
								>
									<img src={item.logo} alt={item.name} />
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export default Customers;
