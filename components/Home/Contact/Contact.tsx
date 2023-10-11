import SlideAnimation from '../../UI/Animations/SlideAnimation';
import SectionTitle from '../../UI/SectionTitle';
import classes from './Contact.module.scss';
import Icons from './Icons';

const Contact = () => {
	return (
		<section className={classes.contact} id="contact">
			<SectionTitle>Kontakt</SectionTitle>
			<div className={classes.container}>
				<SlideAnimation className={classes.map}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2529.8084781404127!2d23.368765076568984!3d50.64924797163081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47235fa1a7dd295d%3A0x77a70668ddf08043!2sEco%20Fresh!5e0!3m2!1spl!2spl!4v1695218207726!5m2!1spl!2spl"
						style={{ border: 0 }}
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="Mapa Lokalizacji Hurtowni Eco Fresh"
					></iframe>
				</SlideAnimation>
				<div className={classes.icons}>
					<Icons />
				</div>
			</div>
		</section>
	);
};

export default Contact;
