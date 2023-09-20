import { FaAward } from 'react-icons/fa';
import { FaPeopleGroup, FaTruckFast } from 'react-icons/fa6';
import SectionTitle from '../../UI/SectionTitle';
import Card from './Card';
import classes from './Work.module.scss';

const Work = () => {
	const workData = [
		{
			image: '/assets/work/quality.jpg',
			alt: 'Owoce podane na drewnianej podstawce',
			text: 'Hurtownia owoców i warzyw Eco Fresh zapewnia niezwykle wysoką jakość swoich produktów. Ściśle przestrzegamy standardów higieny i bezpieczeństwa żywności. Każdy zakupiony przez was produkt jest świeży, soczysty i pełen naturalnego smaku. Nasze warzywa są zawsze pełne składników odżywczych, o intensywnych kolorach i idealnej dojrzałości.',
			heading: 'Jakość usług',
			icon: <FaAward />,
		},
		{
			image: '/assets/work/client.jpg',
			alt: 'Ludzie podający sobie rękę na spotkaniu',
			text: 'Kluczowym elementem sukcesu każdej hurtowni owoców i warzyw jest utrzymanie dobrej relacji z klientem. Hurtownia powinna zapewniać klientom wyjątkowe doświadczenie zakupowe, które obejmuje zarówno wysoką jakość produktów, jak i doskonałą obsługę. Nasza firma oferuje przyjazne i profesjonalne podejście do obsługi klienta co jest fundamentem do budowania długotrwałych i owocnych relacji biznesowych.',
			heading: 'Relacja z klientami',
			icon: <FaPeopleGroup />,
		},
		{
			image: '/assets/work/transport.jpg',
			alt: 'Kierowca prowadzący samochód',
			text: 'Hurtownia Eco Fresh posiada dobrze zorganizowany system logistyczny, który umożliwia skuteczne planowanie i realizację dostaw. Zamówione produkty są szybko pakowane i przygotowywane do wysyłki. Jako firma dbamy również o odpowiednie opakowania i warunki przechowywania podczas transportu, aby produkty utrzymały świeżość i wysoką jakość.',
			heading: 'Szybkie dostawy',
			icon: <FaTruckFast />,
		},
	];

	return (
		<section className={classes.work}>
			<SectionTitle>Jak pracujemy?</SectionTitle>
			<div className={classes.container}>
				{workData.map((w, i) => (
					<Card
						key={i}
						heading={w.heading}
						text={w.text}
						image={w.image}
						alt={w.alt}
						icon={w.icon}
					/>
				))}
			</div>
		</section>
	);
};

export default Work;
