import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import { NavItems, NavLogo } from '../Data';

function Navbar() {
	const [click, SetClick] = useState(false);

	const handleClick = () => SetClick(!click);
	const closeMobileMenu = () => SetClick(false);

	return (
		<>
			<div className='navbar__container'>
				<div className='navbar container'>
					<Link to='/' className='navbar-logo'>
						<img src={NavLogo} alt='logo' className='nav-logo' />
						<p>DreamOnIT</p>
					</Link>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						{NavItems.map((item, index) => {
							return (
								<li className='nav-item' key={'nav-' + index}>
									<Link
										to={item.url}
										className={item.cName}
										onClick={closeMobileMenu}
									>
										<p>{item.title}</p>
									</Link>
								</li>
							);
						})}
					</ul>
					<div className='menu-icon' onClick={handleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar;
