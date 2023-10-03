import { useState } from 'react';
import classes from './Nav.module.scss';
import NavList from './NavList';
import Hamburger from 'hamburger-react';
const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const navToggleHandler = () => setIsOpen((prev) => !prev);

	return (
		<nav className={classes.nav}>
			<div className={classes.logo}>
				<a href="#home">
					<img src="/assets/logo/logo.png" alt="Logo Hurtowni Eco Fresh" />
				</a>
			</div>
			<NavList isActive={isOpen} onToggle={navToggleHandler} />
			<div className={classes.burger}>
				<Hamburger toggled={isOpen} toggle={navToggleHandler} />
			</div>

			<div className={classes.divider}>
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
						className={classes.shapeFill}
					></path>
				</svg>
			</div>
		</nav>
	);
};

export default Nav;
