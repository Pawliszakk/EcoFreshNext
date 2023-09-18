import Link from 'next/link';
import classes from './Error.module.scss';

const Error = () => {
	return (
		<section className={classes.error}>
			<h1>Ups... błąd 404</h1>
			<p>Strona której szukasz nie istnieje...</p>
			<Link href="/">Wróć do strony głównej</Link>
		</section>
	);
};

export default Error;
