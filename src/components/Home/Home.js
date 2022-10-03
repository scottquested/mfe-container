import { mount } from "home/Home";
import { useRef, useEffect } from "react";

const Home = () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref} />;
};

export default Home;
