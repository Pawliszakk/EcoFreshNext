import classes from './Card.module.scss';

const Card = ({ image, heading, text, alt, icon }) => {
	return (
		<div className={classes.card}>
			<img src={image} alt={alt} />
			<div className={classes.text}>
				<h2>
					{heading} {icon}
				</h2>
				<p>{text}</p>
			</div>
		</div>
	);
};

export default Card;
