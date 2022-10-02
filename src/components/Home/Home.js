import { mount } from "home/Home";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
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

export default Home;
