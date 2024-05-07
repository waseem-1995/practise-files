import React from "react";

//Get the shoe card data from props.
const ShoeCard = ({ shoeId, data }) => {
	return (
		<div data-cy={`shoe-card-wrapper-${shoeId}`}>
			<div>
				<img
					data-cy="shoe-card-image"
					src={data.image}
					alt={data.id}
					width="300px"
					height="300px"
				/>
			</div>
			<div>
				<div data-cy="shoe-name">{data.name}</div>
				<div data-cy="shoe-category">{data.category}</div>
			</div>
		</div>
	);
};

export default ShoeCard;
