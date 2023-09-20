import classes from './Icons.module.scss';

import { FaLocationDot } from 'react-icons/fa6';
import { AiFillClockCircle } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMail } from 'react-icons/md';
import SlideFromTop from '../../UI/Animations/SlideFromTop';

const Icons = () => {
	const contactData = [
		{
			icon: <FaLocationDot />,
			heading: 'Adres:',
			text: ['Osiedlowa 8, 22-437 Łabunie'],
		},
		{
			icon: <AiFillClockCircle />,
			heading: 'Godziny otwarcia:',
			text: ['Pon-Pt: 5:00-16:00', 'Sob: 5:00-11:00'],
		},
		{
			icon: <BsFillTelephoneFill />,
			heading: 'Telefon:',
			text: ['84 651 49 80', '571 226 512', '502 544 044'],
		},
		{
			icon: <MdMail />,
			heading: 'Adres e-mail:',
			text: ['ecofreshspj@gmail.com'],
		},
	];
	return (
		<>
			{contactData.map((d, i) => (
				<SlideFromTop key={i} className={classes.box} index={i}>
					<div className={classes.heading}>
						<div className={classes.icon}>{d.icon}</div>
						<h3>{d.heading}</h3>
					</div>
					{d.text.map((text, i) => (
						<p key={i}>{text}</p>
					))}
				</SlideFromTop>
			))}
		</>
	);
};

export default Icons;
