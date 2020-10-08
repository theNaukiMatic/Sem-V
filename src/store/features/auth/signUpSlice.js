import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
import { loginUser } from "./authSlice";

const signUpSlice = createSlice({
	name: "signUp",
	initialState: {
		isLoading: false,
		user: {
			id: null,
			firstName: null,
			lastName: null,
			email: null,
		},
		errMess: null,
	},
	reducers: {
		//signUp reducers

		signUpRequest: (state, action) => ({
			...state,
			isLoading: true,
			user: action.creds,
		}),
		signUpSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: "",
			user: action.user,
		}),
		signUpFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});

export const {
	signUpFailed,
	signUpRequest,
	signUpSuccess,
} = signUpSlice.actions;

//action Creators
export const requestSignUp = (creds) => ({
	type: signUpRequest.type,
	creds,
});
export const receiveSignup = (response) => ({
	type: signUpSuccess.type,
	user: response,
});
export const signUpError = (message) => ({
	type: signUpFailed.type,
	message,
});

export const signUpUser = (creds) => (dispatch) => {
	console.log("signUpuseriscalled");
	dispatch(requestSignUp(creds));
	return fetch(baseUrl + "users/signup", {
		method: "Post",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(creds),
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
				//signup was success
				dispatch(receiveSignup(response));
				//maybe add login part
				const loginCreds = {
					username: creds.username,
					password: creds.password,
				};
				dispatch(loginUser(loginCreds));
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				console.log(error);
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => dispatch(signUpError(error.message)));
};
export default signUpSlice.reducer;
