import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
import { fetchUser } from "../user/userSlice";

const updateUserSlice = createSlice({
	name: "updateUser",
	initialState: {
		isLoading: false,
		errMess: null,
	},
	reducers: {
		//signUp reducers

		updateUserRequest: (state, action) => ({
			...state,
			isLoading: true,
		}),
		updateUserSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: "",
		}),
		updateUserFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});

export const {
	updateUserFailed,
	updateUserRequest,
	updateUserSuccess,
} = updateUserSlice.actions;

//action Creators
export const requestUpdateUser = () => ({
	type: updateUserRequest.type,
});
export const receiveUpdateUser = () => ({
	type: updateUserSuccess.type,
});
export const updateUserError = (message) => ({
	type: updateUserFailed.type,
	message,
});

export const updateUser = (user) => (dispatch) => {
	console.log("signUpuseriscalled");
	dispatch(requestUpdateUser());
	const bearer = "Bearer " + localStorage.getItem("token");
	return fetch(baseUrl + `users/profile/${localStorage.getItem("userId")}`, {
		method: "Put",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
		body: JSON.stringify(user),
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error(
						"Error" + response.status + ": " + response.statusText
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => {
			if (response.success) {
				dispatch(receiveUpdateUser());

				dispatch(fetchUser());
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				console.log(error);
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => dispatch(updateUserError(error.message)));
};
export default updateUserSlice.reducer;
