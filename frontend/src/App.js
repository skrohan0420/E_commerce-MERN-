import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Login from './Pages/Onboarding/Login';
import SignUp from './Pages/Onboarding/SignUp';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import {
	createBrowserRouter,
	Navigate,
	Outlet,
	RouterProvider,
} from "react-router-dom";
import { DarkModeContextProvider } from './Context/darkModeContext';

function App() {
	let currentUser = localStorage.getItem('authToken')
	const ProtectedRoute = ({ children }) => {
		if (currentUser) {
			return children
		}
		return <Navigate to="/log-in" />
	}
	const Layout = () => {
		return (
			<>
				<Navbar />
				<Outlet />
				<Footer />
			</>
		)
	}


	const router = createBrowserRouter([
		{
			path: "/",
			element:
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>,
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: '/product/:id',
					element: <SingleProduct />
				}
			]
		},
		{
			path: "/log-in",
			element: <Login />,
		},
		{
			path: "/sign-up",
			element: <SignUp />,
		},
	]);

	return (
		<DarkModeContextProvider>
			<RouterProvider router={router} />
		</DarkModeContextProvider>
	);
}

export default App;
