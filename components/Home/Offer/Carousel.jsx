import CarouselItem from './CarouselItem';
import useEmblaCarousel from 'embla-carousel-react';
import classes from './Carousel.module.scss';
import Autoplay from 'embla-carousel-autoplay';

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

const CarouselComponent = () => {
	const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
	return (
		<>
			<div className={classes.embla} ref={emblaRef}>
				<div className={classes.container}>
					{products.map((p, i) => (
						<CarouselItem key={i} name={p.name} image={p.image} />
					))}
				</div>
			</div>
		</>
	);
};

export default CarouselComponent;
