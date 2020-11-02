import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import signUpReducer from "../features/auth/signUpSlice";
import profileReducer from "../features/profile/profileSlice";
import userReducer from "../features/user/userSlice";
import joinGroupReducer from "../features/groups/joinGroupSlice";

export default combineReducers({
	auth: authReducer,
	signUp: signUpReducer,
	profile: profileReducer,
	user: userReducer,
	joinGroup: joinGroupReducer,
	// visibilityFilter: visibilityFilterReducer,
});
