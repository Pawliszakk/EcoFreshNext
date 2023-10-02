import Spinner from '../UI/Spinner';
import Footer from './footer/footer';
import Nav from './nav/Nav';

const Layout = ({ children }) => {
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
