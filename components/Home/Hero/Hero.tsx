import classes from './Hero.module.scss';
import { motion } from 'framer-motion';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import SlideAnimation from '../../UI/Animations/SlideAnimation';

const Hero = () => {
	return (
		<header className={classes.hero} id="home">
			<div className={classes.shadow}></div>
			<div className={classes.text}>
				{' '}
				<SlideAnimation left>
					<p>Hurtownia owoców i warzyw</p>
				</SlideAnimation>
				<SlideAnimation>
					<h1>Eco Fresh Łabunie </h1>
				</SlideAnimation>
			</div>

			<motion.a
				className={classes.icon}
				href="#about"
				whileTap={{ scale: 0.8 }}
				whileHover={{ scale: 1.1 }}
				initial={{ opacity: 0, bottom: 0 }}
				animate={{ opacity: 1, bottom: '10vh' }}
				transition={{ delay: 0.5 }}
			>
				<BsFillArrowDownCircleFill />
				<span>Przejdź niżej</span>
			</motion.a>

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
		</header>
	);
};

export default Hero;
