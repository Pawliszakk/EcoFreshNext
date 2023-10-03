import SlideFromTop from '../../UI/Animations/SlideFromTop';
import classes from './Subsection.module.scss';

interface SubsectionProps {
	icon: JSX.Element;
	text: string;
	index: number;
}

const Subsection: React.FC<SubsectionProps> = ({ icon, text, index }) => {
	return (
		<SlideFromTop className={classes.box} index={index}>
			{' '}
			{icon}
			<p>{text}</p>
		</SlideFromTop>
	);
};

export default Subsection;
