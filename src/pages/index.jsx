import About from '../../components/Home/About/About';
import Contact from '../../components/Home/Contact/Contact';
import Decoration from '../../components/Home/Decoration/Decoration';
import Hero from '../../components/Home/Hero/Hero';
import Offer from '../../components/Home/Offer/Offer';
import Work from '../../components/Home/Work/Work';

export default function Home() {
	return (
		<>
			<Hero />
			<About />
			<Decoration />
			<Offer />
			<Work />
			<Contact />
		</>
	);
}
