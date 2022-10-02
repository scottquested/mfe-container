import { mount } from "dashboard/Dashboard";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
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

export default Dashboard;
