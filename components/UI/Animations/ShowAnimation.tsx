import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ShowAnimationProps {
	children: ReactNode;
	className?: string;
}

const ShowAnimation: React.FC<ShowAnimationProps> = ({
	children,
	className,
}) => {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
		>
			{children}{' '}
		</motion.div>
	);
};

export default ShowAnimation;
