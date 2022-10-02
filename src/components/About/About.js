import { mount } from "about/About";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
	const ref = useRef(null);
	const history = useNavigate();

	useEffect(() => {
		if (mount) {
			const { onParentNavigate } = mount(ref.current);
			history.listen(onParentNavigate);
		}
	}, []);

	return <div ref={ref} />;
};

export default About;
