import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "./redux/users/action";

function App() {
	const dispatch = useDispatch(); //storeのstateを変えるのに使う
	const selector = useSelector((state) => state); //react-reduxの関数。これを書くことで、Selectorという定数にstoreのstateが保存される。

	console.log(selector.users);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<button
					// 上記で定義したdispatch関数を実行。その中にactionのsignInactionを指定。signInActionは引数にuserState(uidとusernameを保持)を持つとactionで定義したため、それを渡す
					onClick={() =>
						dispatch(signInAction({ uid: "0001", username: "MyName" }))
					}
				>
					Sign In
				</button>
			</header>
		</div>
	);
}

export default App;
