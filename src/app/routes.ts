import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [
			{ index: true, Component: Home },
			{ path: "about", Component: About },
			{ path: "products", Component: Products },
			{ path: "contact", Component: Contact },
			{ path: "*", Component: NotFound },
		],
	},
]);
