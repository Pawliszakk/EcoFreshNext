import SectionTitle from '../../UI/SectionTitle';
import classes from './About.module.scss';

const About = () => {
	return (
		<section className={classes.about} id="about">
			<SectionTitle white>O nas</SectionTitle>
		</section>
	);
};

export default About;
