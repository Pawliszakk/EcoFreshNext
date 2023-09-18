import { useState } from 'react';
import classes from './Nav.module.scss';
import NavList from './NavList';
import Hamburger from 'hamburger-react';
const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className={classes.nav}>
			<div className={classes.logo}>
				<a href="#home">
					<img src="/assets/logo/logo.png" alt="Logo Hurtowni Eco Fresh" />
				</a>
			</div>
			<NavList isActive={isOpen} />
			<div className={classes.burger}>
				<Hamburger toggled={isOpen} toggle={setIsOpen} />
			</div>
		</nav>
	);
};

export default Nav;
