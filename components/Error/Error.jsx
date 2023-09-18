import classes from './Error.module.scss';

const Error = () => {
	return (
		<section className={classes.error}>
			<h1>O nie!</h1>
			<p>Strona której szukasz nie istnieje...</p>
		</section>
	);
};

export default Error;
