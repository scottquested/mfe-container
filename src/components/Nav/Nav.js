import { Link } from "react-router-dom";

import "./Nav.scss";

const Nav = ({ someFakeAuthPermissons }) => {
	const items = Object.entries(someFakeAuthPermissons).reduce(
		(acc, [key, val]) => {
			if (val) {
				return [...acc, key];
			}
			return [...acc];
		},
		[]
	);

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
