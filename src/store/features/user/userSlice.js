import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";

const userSlice = createSlice({
	name: "user",
	initialState: {
		isLoading: false,
		errMess: null,
		success: null,
		user: {
			id: null,
			firstName: null,
			lastName: null,
			email: null,
		},
	},
	reducers: {
		userRequest: (state, action) => ({
			...state,
			isLoading: true,
			userId: action.userId,
		}),
		userSuccess: (state, action) => ({
			...state,
			isLoading: false,
			user: action.user,
			errMess: null,
		}),
		userFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});
export const { userRequest, userFailed, userSuccess } = userSlice.actions;

//action creators

export const requestUser = (userId) => ({
	type: userRequest.type,
	userId,
});
export const recieveUser = (response) => ({
	type: userSuccess.type,
	user: response,
});
export const userError = (message) => ({
	type: userFailed.type,
	message,
});

export const fetchUser = () => (dispatch) => {
	const userId = localStorage.getItem("userId");
	dispatch(requestUser(userId));
	const bearer = "Bearer " + localStorage.getItem("token");
	return fetch(baseUrl + `users/profile/${userId}`, {
		method: "Get",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error(
						"Error " + response.status + ": " + response.statusText
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
				dispatch(recieveUser(response));
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				// alert(error.message);
				throw error;
			}
		})
		.catch((error) => dispatch(userError(error.message)));
};

export default userSlice.reducer;
