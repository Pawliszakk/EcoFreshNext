import { ReactNode } from 'react';
import Spinner from '../UI/Spinner';
import Footer from './footer/footer';
import Nav from './nav/Nav';

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Spinner />
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
