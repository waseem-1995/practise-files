import React from "react";

const SingleShoe = ({ data }) => {
	return (
		<div>
			<h2>{data.name}</h2>
			<div>
				<img src={data.image} alt="Cover Pic" />
			</div>
			<div>
				<div>{data.category}</div>
			</div>
		</div>
	);
};

export default SingleShoe;
