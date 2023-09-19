import { AiOutlineMail } from 'react-icons/ai';
import SectionTitle from '../../UI/SectionTitle';
import classes from './Offer.module.scss';

import CarouselComponent from './Carousel';

const Offer = () => {
	return (
		<section className={classes.offer} id="offer">
			<SectionTitle>Oferta</SectionTitle>
			<p>
				Nasza hurtownia owoców i warzyw oferuje szeroki wybór świeżych i
				wysokiej jakości produktów spożywczych. W naszej ofercie znajdziesz
				bogaty wybór popularnych owoców i warzyw. Dostarczamy różnorodne
				gatunki, począwszy od tradycyjnych po egzotyczne, aby zaspokoić Twoje
				potrzeby zarówno w biznesie, jak i w domu.
			</p>

			<CarouselComponent />

			<p>
				Przedstawiona oferta jest jedynie częścią naszych produktów. Po więcej
				informacji prosimy przejść do sekcji{' '}
				<a href="#contact">
					kontakt <AiOutlineMail />
				</a>
			</p>
		</section>
	);
};

export default Offer;
