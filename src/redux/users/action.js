// actionsは絶対プレーンであること！

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState) => {
	// プレーン！
	return {
		type: "SIGN_IN",
		payload: {
			isSignedIn: true,
			uid: userState.uid,
			username: userState.username,
		},
	};
};

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = () => {
	return {
		type: "SIGN_OUT",
		payload: {
			isSignedIn: false,
			uid: "",
			username: "",
		},
	};
};
