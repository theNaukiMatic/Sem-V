import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import signUpReducer from "../features/auth/signUpSlice";
import profileReducer from "../features/profile/profileSlice";
import userReducer from "../features/user/userSlice";
import updateReducer from "../features/user/updateUserSlice";
import joinGroupReducer from "../features/groups/joinGroupSlice";
import groupPostReducer from "../features/groups/groupPostsSlice";
import groupReducer from "../features/groups/groupSlice";
import searchReducer from "./search";

export default combineReducers({
	auth: authReducer,
	signUp: signUpReducer,
	profile: profileReducer,
	user: userReducer,
	joinGroup: joinGroupReducer,
	search: searchReducer,
	updateUser: updateReducer,
	groupPost: groupPostReducer,
	group: groupReducer,
	// visibilityFilter: visibilityFilterReducer,
});
