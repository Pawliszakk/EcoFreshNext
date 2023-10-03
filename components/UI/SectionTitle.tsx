import { ReactNode } from 'react';
import classes from './SectionTitle.module.scss';

interface SectionTitleProps {
	children: ReactNode;
	white?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, white }) => {
	return (
		<h2 className={`${classes.title} ${white ? classes.white : null}`}>
			{children}
		</h2>
	);
};

export default SectionTitle;
