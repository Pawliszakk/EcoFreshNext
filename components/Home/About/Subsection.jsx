import classes from './Subsection.module.scss';

const Subsection = ({ icon, text }) => {
	return (
		<div className={classes.box}>
			{icon}
			<p>{text}</p>
		</div>
	);
};

export default Subsection;
