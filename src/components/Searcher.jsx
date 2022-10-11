import { Col, Input } from "antd";
import { useDispatch } from "react-redux";

import { setFilter } from "../slices/dataSlice";

const Searcher = () => {
	const dispatch = useDispatch();

	const handleOnChange = (e) => {
		dispatch(setFilter(e.target.value));
	};

	return (
		<Col span={8} offset={8}>
			<Input.Search
				onChange={handleOnChange}
				placeholder="Buscar..."
				style={{ marginBottom: "10px" }}
			/>
		</Col>
	);
};

export default Searcher;
