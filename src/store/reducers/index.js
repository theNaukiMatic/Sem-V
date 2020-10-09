import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import signUpReducer from "../features/auth/signUpSlice";

export default combineReducers({
	auth: authReducer,
	signUp : signUpReducer,
	// visibilityFilter: visibilityFilterReducer,
});
