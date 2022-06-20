import { useState,useEffect } from "react";
import axios from "axios";
import { Link,Navigate } from "react-router-dom";
import styles from "./styles.module.css";
import React from "react";

const Login = () => {
    
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");
	const [user, setUser] = useState()

	

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/api/v1/login";
			const res  = await axios.post(url, data);
			console.log(res.data,"data is");
			localStorage.setItem("user", JSON.stringify(res.data));
			
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
	if (user) {
		return <div>{user.name} is loggged in</div>;
	  }

	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				<div className={styles.right}>
					<h1>New Here ?</h1>
					<Link to="/register">
						<button type="button" className={styles.white_btn}>
							Sing Up
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;