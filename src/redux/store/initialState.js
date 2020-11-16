// Storeの初期状態（アプリを起動した瞬間の状態)を書く
// アプリに必要なState全てを書く

const initialState = {
	// 全てをここに
	products: {},
	text: {},
	users: {
		isSignedIn: false, //アプリ起動したてはfalse
		uid: "", //アプリ起動したては中身なし
		username: "",
	},
};

export default initialState;
