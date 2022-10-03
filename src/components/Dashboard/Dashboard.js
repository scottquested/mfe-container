import { mount } from "dashboard/Dashboard";
import { useRef, useEffect } from "react";

const Dashboard = () => {
	const ref = useRef(null);

	useEffect(() => {
		mount(ref.current);
	}, []);

	return <div ref={ref} />;
};

export default Dashboard;
