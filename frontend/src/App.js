import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Onboarding/Login';
import SignUp from './Pages/Onboarding/SignUp';

import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/log-in' element={<Login />} />
				<Route exact path='/sign-up' element={<SignUp />} />
			</Routes>
		</Router>

	);
}

export default App;
