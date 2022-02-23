import React from 'react';
import { initLang } from './components/LangSelect';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ProjectsPage from './components/pages/ProjectsPage';
import News from './components/pages/News';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ScrollToTop from './components/tools/ScrollToTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	initLang();
	AOS.init();
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' exact element={<ProjectsPage />} />
				<Route path='/news' element={<News />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default App;
