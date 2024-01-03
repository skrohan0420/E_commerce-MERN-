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
import { AuthContextProvider } from './Context/authContext';
import { DarkModeContextProvider } from './Context/darkModeContext';

function App() {
	let currentUser = true;
	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			return <Navigate to="/log-in" />
		}
		return children
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
		<AuthContextProvider>
			<DarkModeContextProvider>
				<RouterProvider router={router} />
			</DarkModeContextProvider>
		</AuthContextProvider>
	);
}

export default App;
