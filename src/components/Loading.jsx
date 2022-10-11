import { Col, Spin } from "antd";

const Loading = () => {
	return (
		<Col offset={12}>
			<Spin spinning size="large" />
		</Col>
	);
};

export default Loading;
