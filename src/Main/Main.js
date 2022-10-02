import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "../components/Nav";
import Home from "home/Home";
import About from "about/About";
import Dashboard from "dashboard/Dashboard";

const routes = [
	{
		exact: true,
		path: "/",
		component: Home,
		name: "home",
	},
	{
		exact: true,
		path: "/about",
		component: About,
		name: "about",
	},
	{
		exact: true,
		path: "/dashboard",
		component: Dashboard,
		name: "dashboard",
	},
];

const Main = () => {
	const someFakeAuthPermissons = {
		dashboard: true,
		about: true,
		home: true,
	};

	const items = Object.entries(someFakeAuthPermissons).reduce(
		(acc, [key, val]) => {
			const matchedRoute = routes.find((item) => item.name === key);
			if (val) {
				return [
					...acc,
					{
						...matchedRoute,
					},
				];
			}
			return [...acc];
		},
		[]
	);

	return (
		<BrowserRouter>
			<>
				<Nav someFakeAuthPermissons={someFakeAuthPermissons} />
				<div className="my-8 flex-1 flex">
					<Routes>
						{!!items.length &&
							items.map((item) => {
								const Comp = item.component;
								return (
									<Route
										key={item.name}
										path={item.path}
										exact={item.exact}
										element={<Comp />}
									/>
								);
							})}
					</Routes>
				</div>
			</>
		</BrowserRouter>
	);
};

export default Main;
