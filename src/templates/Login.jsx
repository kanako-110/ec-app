import React from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/users/operation";

const Login = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<h2>ログイン</h2>
			{/* push()で()のURLへ飛ぶ */}
			<button onClick={() => dispatch(signIn())}>ログインする</button>
		</div>
	);
};

export default Login;
