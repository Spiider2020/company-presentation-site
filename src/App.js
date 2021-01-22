import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
	AOS.init();
	return (
		<Router>
			<ScrollToTop />
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/projects' exact component={ProjectsPage} />
				<Route path='/news' exact component={News} />
				<Route path='/about' exact component={About} />
				<Route path='/contact' exact component={Contact} />
			</Switch>
		</Router>
	);
}

export default App;