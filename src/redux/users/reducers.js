import * as Actions from "./action"; //全てのactionsをActionsという名前でとる
import initialState from "../store/initialState";

export const UsersReducer = (state = initialState.users, action) => {
	switch (action.type) {
		case Actions.SIGN_IN:
			return {
				...state, //stateも毎回広げる。それによてaction内容に指定してないstateの内容もちゃんと残される
				...action.payload,
			};
		default:
			return state;
	}
};
