import React from "react";
import { useSelector } from "react-redux";
import { getUserId } from "../redux/users/selectors";

const Home = () => {
	const selector = useSelector((state) => state); // redux全体のstateが参照できるようになった。それをselectorという名前で定義
	const uid = getUserId(selector);
	return (
		<div>
			<h1>Home</h1>
			<p>uid:{uid}</p>
			{/* <p>{username}</p> */}
		</div>
	);
};

export default Home;
