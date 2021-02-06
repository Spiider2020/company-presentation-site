import React from 'react';
import HeroSection from '../HeroSection';
import Section1 from '../Section1';
import Services from '../Services';
import Projects from '../Projects';
import './Home.scss';
// import Workflow from '../Workflow';
import Customers from '../Customers';
import Footer from '../Footer';

function Home() {
	return (
		<>
			<HeroSection />
			<Section1 />
			<Services />
			<Projects />
			{/* <Workflow /> */}
			<Customers />
			<Footer />
		</>
	);
}

export default Home;
