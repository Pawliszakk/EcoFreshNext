import SlideFromTop from '../../UI/Animations/SlideFromTop';
import classes from './Subsection.module.scss';
import { motion } from 'framer-motion';
const Subsection = ({ icon, text, index }) => {
	return (
		<SlideFromTop className={classes.box} index={index}>
			{' '}
			{icon}
			<p>{text}</p>
		</SlideFromTop>
	);
};

export default Subsection;
