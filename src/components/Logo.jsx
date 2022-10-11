import { Col } from "antd";

import logo from "../statics/logo.svg";

const Logo = () => {
	return (
		<Col span={4} offset={10}>
			<img src={logo} alt="Pokedux" className="LogoImg" />
		</Col>
	);
};

export default Logo;
