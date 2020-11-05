import { combineReducers } from "redux";
import searchUserReducer from "../features/search/searchUserSlice";

export default combineReducers({
	searchUser: searchUserReducer,
	// visibilityFilter: visibilityFilterReducer,
});
