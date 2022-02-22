import React from 'react';
import { initLang } from './components/LangSelect';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import ProjectsPage from './components/pages/ProjectsPage';
// import News from './components/pages/News';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ScrollToTop from './components/tools/ScrollToTop';
import Bitrix24 from './components/pages/projects/Bitrix24';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
	initLang();
	AOS.init();
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/projects' exact component={ProjectsPage} />
				{/* <Route path='/news' exact component={News} /> */}
				<Route path='/about' exact component={About} />
				<Route path='/contact' exact component={Contact} />
				<Route path='/projects/bitrix24' component={Bitrix24} />
			</Switch>
		</Router>
	);
}

export default App;
