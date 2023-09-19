import classes from './Carousel.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from './CarouselItem';

const responsive = {
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const CarouselComponent = () => {
	const products = [
		{
			image: '/assets/products/apple.jpg',
			name: 'Jabłka',
		},
		{
			image: '/assets/products/orange.jpg',
			name: 'Pomarańcze',
		},
		{
			image: '/assets/products/potatoes.jpg',
			name: 'Ziemniaki',
		},
		{
			image: '/assets/products/onions.jpg',
			name: 'Cebule',
		},
		{
			image: '/assets/products/beet.jpg',
			name: 'Buraki',
		},
		{
			image: '/assets/products/carrot.jpg',
			name: 'Marchewki',
		},
		{
			image: '/assets/products/lettuce.jpg',
			name: 'Sałata',
		},
		{
			image: '/assets/products/grape.jpg',
			name: 'Winogrono',
		},
		{
			image: '/assets/products/corn.jpg',
			name: 'Kukurydza',
		},
		{
			image: '/assets/products/rucola.jpg',
			name: 'Rukola',
		},
		{
			image: '/assets/products/mushroom.jpg',
			name: 'Pieczarki',
		},
		{
			image: '/assets/products/strawberries.jpg',
			name: 'Truskawki',
		},
		{
			image: '/assets/products/raspberries.jpg',
			name: 'Maliny',
		},
		{
			image: '/assets/products/watermelon.jpg',
			name: 'Arbuzy',
		},
		{
			image: '/assets/products/currant.jpg',
			name: 'Porzeczki',
		},
	];
	return (
		<Carousel responsive={responsive} className={classes.carousel}>
			{products.map((p, i) => (
				<CarouselItem key={i} name={p.name} image={p.image} />
			))}
		</Carousel>
	);
};

export default CarouselComponent;
