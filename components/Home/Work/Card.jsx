import SlideFromTop from '../../UI/Animations/SlideFromTop';
import classes from './Card.module.scss';

const Card = ({ image, heading, text, alt, icon, index }) => {
	return (
		<SlideFromTop className={classes.card} index={index}>
			<img src={image} alt={alt} />
			<div className={classes.text}>
				<h2>
					{heading} {icon}
				</h2>
				<p>{text}</p>
				<a href="#contact">Skontaktuj się</a>
			</div>
		</SlideFromTop>
	);
};

export default Card;
