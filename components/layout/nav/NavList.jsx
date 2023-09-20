import classes from './NavList.module.scss';
import { motion } from 'framer-motion';

const NavList = ({ isActive, onToggle }) => {
	const linksData = [
		{
			text: 'O nas',
			link: '#about',
		},
		{
			text: 'Oferta',
			link: '#offer',
		},
		{
			text: 'Skontaktuj się',
			link: '#contact',
		},
	];

	return (
		<ul className={`${classes.list} ${isActive ? classes.active : null} `}>
			{linksData.map((link, i) => (
				<motion.li key={i} onClick={onToggle}>
					<a href={link.link}>{link.text}</a>
				</motion.li>
			))}
		</ul>
	);
};

export default NavList;
