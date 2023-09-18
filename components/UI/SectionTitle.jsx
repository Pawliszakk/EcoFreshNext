import classes from './SectionTitle.module.scss';

const SectionTitle = ({ children, white }) => {
	return (
		<h2 className={`${classes.title} ${white ? classes.white : null}`}>
			{children}
		</h2>
	);
};

export default SectionTitle;
