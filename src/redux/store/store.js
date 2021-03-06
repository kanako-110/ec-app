import {
	createStore as reduxCreateStore,
	combineReducers,
	applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

import { UsersReducer } from "../users/reducers";

export default function createStore(history) {
	return reduxCreateStore(
		combineReducers({
			router: connectRouter(history), // connectRouterにhistoryを入れる事で、reduxでhistory情報が使えるようになった。それをstoreのrouterにセットしている。
			users: UsersReducer,
		}),
		applyMiddleware(routerMiddleware(history), thunk)
	);
}
