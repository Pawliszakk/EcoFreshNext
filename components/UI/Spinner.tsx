import { useEffect, useState } from 'react';
import classes from './Spinner.module.scss';
import { motion, AnimatePresence } from 'framer-motion';
const Spinner = () => {
	const [isSpinner, setIsSpinner] = useState(true);

	useEffect(() => {
		const deleteSpinner = setTimeout(() => setIsSpinner(false), 1500);
		return () => clearTimeout(deleteSpinner);
	}, []);

	return (
		<>
			<AnimatePresence>
				{isSpinner && (
					<motion.div
						className={classes.background}
						initial={{ opacity: 1 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<div className={classes.spinner}></div>
						<p>Ładowanie strony...</p>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Spinner;
