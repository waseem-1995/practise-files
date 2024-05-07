import axios from "axios";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Filter from "../Components/Filter";
import {
	getShoesFailure,
	getShoesRequest,
	getShoesSuccess,
} from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";

const Shoes = () => {
	const shoes = useSelector((state) => state.AppReducer.shoes);

	const dispatch = useDispatch();

	const getData = () => {
		dispatch(getShoesRequest());
		axios
			.get("http://localhost:8080/shoes")
			.then((res) => dispatch(getShoesSuccess(res.data)))
			.catch((error) => dispatch(getShoesFailure()));
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div style={{ display: "flex" }}>
			<Filter />
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "auto auto auto auto",
					gap: "2rem",
					padding: "2rem",
				}}
			>
				{/* Map through the shoes list here using ShoeCard Component */}
				{shoes?.map((item) => (
					<ShoeCard data={item} />
				))}
			</div>
		</div>
	);
};

export default Shoes;
