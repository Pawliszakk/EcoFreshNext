import Footer from './footer/footer';
import Nav from './nav/Nav';

const Layout = ({ children }) => {
	return (
		<>
			<Nav />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default Layout;
