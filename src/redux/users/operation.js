//dispatchを呼ぶ事でactionを手動で呼ぶ
// getState()を呼ぶ事で、storeに入っている現在のstateの内容を呼び出す()

import { push } from "connected-react-router";
import { signInAction } from "./action";

export const signIn = () => {
	return async (dispatch, getState) => {
		const state = getState();
		const isSignedIn = state.users.isSignedIn;

		if (!isSignedIn) {
			const url = "https://api.github.com/users/deatiger";

			const response = await fetch(url)
				.then((res) => res.json())
				.catch(() => null);

			const username = response.login;
			// 手動でdispatchを呼んでactionを実行
			// どのアクションか指定、返すものも入れる
			dispatch(
				signInAction({
					isSignedIn: true,
					uid: "0001",
					username: username,
				})
			);
			dispatch(push("/"));
		}
	};
};
