import SectionTitle from '../../UI/SectionTitle';
import classes from './About.module.scss';
import { FaCarrot, FaWallet } from 'react-icons/fa';
import { BsTruck } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Subsection from './Subsection';

type Subsection = {
	icon: JSX.Element;
	text: string;
};

const About = () => {
	const subsections: Subsection[] = [
		{ icon: <FaCarrot />, text: 'Świeży i smaczny towar' },
		{ icon: <FaWallet />, text: 'Konkurencyjne ceny' },
		{ icon: <BsTruck />, text: 'Transport do klienta' },
		{ icon: <AiOutlineShoppingCart />, text: 'Szeroka oferta produktów' },
	];

	return (
		<section className={classes.about} id="about">
			<SectionTitle>O nas</SectionTitle>
			<p className={classes.text}>
				Nasza hurtownia owoców i warzyw to profesjonalne miejsce, gdzie
				dostaniesz szeroki wybór świeżych i wysokiej jakości produktów
				spożywczych. Specjalizujemy się w dostarczaniu świeżych produktów o
				doskonałej jakości, aby zapewnić naszym klientom najlepszy towar na
				rynku spożywczym.
			</p>
			<div className={classes.container}>
				{' '}
				{subsections.map((s, i) => (
					<Subsection key={i} index={i} icon={s.icon} text={s.text} />
				))}
			</div>
		</section>
	);
};

export default About;
