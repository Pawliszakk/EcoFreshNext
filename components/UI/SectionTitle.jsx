import classes from './SectionTitle.module.scss';

const SectionTitle = ({ children }) => {
	return <h2 className={classes.title}>{children}</h2>;
};

export default SectionTitle;
