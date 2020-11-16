import React from "react";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

import { signInAction } from "../redux/users/action";

const Login = () => {
	const dispatch = useDispatch();

	return (
		<div>
			<h2>ログイン</h2>
			{/* push()で()のURLへ飛ぶ */}
			<button
				onClick={() => {
					dispatch(signInAction({ uid: "0001", username: "Myname" }));
					dispatch(push("/"));
				}}
			>
				ログインする
			</button>
		</div>
	);
};

export default Login;
