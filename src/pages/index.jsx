import Head from 'next/head';
import About from '../../components/Home/About/About';
import Contact from '../../components/Home/Contact/Contact';
import Decoration from '../../components/Home/Decoration/Decoration';
import Hero from '../../components/Home/Hero/Hero';
import Offer from '../../components/Home/Offer/Offer';
import Work from '../../components/Home/Work/Work';

export default function Home() {
	return (
		<>
			<Head>
				<meta
					name="description"
					content="Eco Fresh Łabunie - Profesjonalna hurtownia owoców i warzyw! Zapewniamy świeże, zdrowe i wysokiej jakości warzywa i owoce. Zapraszamy!"
				/>
				<title>Hurtownia owoców i warzyw Eco Fresh Łabunie</title>
			</Head>
			<Hero />
			<About />
			<Decoration />
			<Offer />
			<Work />
			<Contact />
		</>
	);
}
