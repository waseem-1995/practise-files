import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div style={{ display: "flex", justifyContent: "space-between" }}>
			<div data-cy="navbar-home-link">
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
					width="60px"
					alt="logo"
					style={{ display: "block" }}
				/>
			</div>

			<div>
				{/* Link button to /login page, if the user is not authenticated, else don't show it*/}
				<Link to="/login">
					<button data-cy="navbar-login-button">LOGIN</button>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
