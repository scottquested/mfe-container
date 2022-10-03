import { mount } from "about/About";
import { useRef, useEffect } from "react";

const About = () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref} />;
};

export default About;
