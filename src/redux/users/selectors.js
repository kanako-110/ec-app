import { createSelector } from "reselect";

// storeの(初期設定：initialStateの)usersを参照できるようにしている
const userSelector = (state) => state.users;
export const getUserId = createSelector(
	[userSelector], // 第一引数で、上記で定義したuserSelectorを書くことで、storeのusersを参照する設定
	(state) => state.uid // 第二引数で、その中(state=state.users)のuidを使うことを設定
);
