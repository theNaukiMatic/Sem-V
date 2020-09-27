import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";

export default combineReducers({
	auth: authReducer,
	// visibilityFilter: visibilityFilterReducer,
});
