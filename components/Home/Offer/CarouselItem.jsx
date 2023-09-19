import classes from './CarouselItem.module.scss';

const CarouselItem = ({ image, name }) => {
	return (
		<div className={classes.box}>
			<img src={image} alt={name} />
			<h2>{name}</h2>
		</div>
	);
};

export default CarouselItem;
