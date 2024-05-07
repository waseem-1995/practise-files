import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess, loginFailure } from "../Redux/AuthReducer/action";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();

		if (email && password) {
			axios
				.post("https://reqres.in/api/login", { email, password })
				.then((res) => dispatch(loginSuccess(res.data)))
				.then((res) => {
					if (res.type === "LOGIN_SUCCESS") {
						navigate("/");
					}
				})
				.catch((error) => dispatch(loginFailure()));
		}
	};

	return (
		<div>
			<h2>LOGIN</h2>
			<form onSubmit={handleLogin}>
				<div>
					<label>User Email</label>
					<br />
					<input
						data-cy="login-email"
						placeholder="engter email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label>User Password</label>
					<br />
					<input
						data-cy="login-password"
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit" data-cy="login-submit">
					Login
				</button>
			</form>
		</div>
	);
};

export default Login;
