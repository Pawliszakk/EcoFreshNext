import classes from './CarouselItem.module.scss';
import { motion } from 'framer-motion';
const CarouselItem = ({ image, name }) => {
	return (
		<div className={classes.box}>
			<img src={image} alt={name} />
			<div className={classes.name}>
				<h2>{name}</h2>
				<motion.a whileTap={{ scale: 0.8 }} href="#contact">
					Skontaktuj się!
				</motion.a>
			</div>
		</div>
	);
};

export default CarouselItem;
