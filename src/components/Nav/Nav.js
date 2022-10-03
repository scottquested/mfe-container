import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = ({ someFakeAuthPermissons }) => {
	const order = ["home", "dashboard", "about"];

	function sortFunc(a, b) {
		return order.indexOf(a) - order.indexOf(b);
	}

	const items = Object.entries(someFakeAuthPermissons)
		.reduce((acc, [key, val]) => {
			if (val) {
				return [...acc, key];
			}
			return [...acc];
		}, [])
		.sort(sortFunc);

	return (
		<ul className="nav">
			{!!items.length &&
				items.map((item) => (
					<li key={item}>
						<Link to={item === "home" ? "/" : `/${item}`}>{item}</Link>
					</li>
				))}
		</ul>
	);
};

export default Nav;
