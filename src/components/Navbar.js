import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.scss';
import { NavItems, NavLogo } from '../Data';
import LangSelect from './LangSelect';

function Navbar() {
	const [click, SetClick] = useState(false);

	const handleClick = () => {
		SetClick(!click);
		document.body.classList.toggle('no-scroll');
	};
	const closeMobileMenu = () => {
		SetClick(false);
		document.body.classList.remove('no-scroll');
	};

	return (
		<>
			<div className='navbar__container'>
				<div className='navbar container'>
					<Link to='/' className='navbar-logo'>
						<img src={NavLogo} alt='logo' className='nav-logo' />
						<p>DreamOnIT</p>
					</Link>
					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className='nav__menu__lang--mobile'>
							<LangSelect />
						</li>
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
						<li className='nav__menu__lang'>
							<LangSelect />
						</li>
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
