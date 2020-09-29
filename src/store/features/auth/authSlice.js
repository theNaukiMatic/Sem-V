import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoading: false,
		isAuthenticated: localStorage.getItem("token") ? true : false,
		token: localStorage.getItem("token"),
		user: {
			id: null,
			firstName: null,
			lastName: null,
			email: null,
		},
		errMess: null,
	},
	reducers: {
		//login reducers
		loginRequest: (state, action) =>
			(state = {
				...state,
				isLoading: true,
				isAuthenticated: false,
				user: action.creds,
			}),
		loginSuccess: (state, action) =>
			(state = {
				...state,
				isLoading: false,
				isAuthenticated: true,
				errMess: "",
				token: action.token,
				user: action.user,
			}),
		loginFailed: (state, action) => {
			state = {
				...state,
				isLoading: false,
				isAuthenticated: false,
				errMess: action.message,
			};
			return state;
		},

		//logout reducers
		logoutRequest(state, action) {
			return (state = {
				isLoading: true,
				isAuthenticated: true,
			});
		},
		logoutSuccess(state, action) {
			return (state = {
				isLoading: false,
				isAuthenticated: false,
				token: "",
				user: null,
			});
		},
	},
});

export const {
	loginRequest,
	loginFailed,
	loginSuccess,
	logoutRequest,
	logoutSuccess,
} = authSlice.actions;

//actionCreators

//authentication process
export const requestLogin = (creds) => {
	return {
		type: loginRequest.type,
		creds,
	};
};

export const receiveLogin = (response) => {
	return {
		type: loginSuccess.type,
		token: response.token,
		user: response,
	};
};

export const loginError = (message) => {
	return {
		type: loginFailed.type,
		message,
	};
};

export const loginUser = (creds) => (dispatch) => {
	// We dispatch requestLogin to kickoff the call to the API
	dispatch(requestLogin(creds));

	//temp api simulation code//////////////////
	// const response = {
	// 	isAuth: true,
	// 	token: "thisfjadklfkj3489dafj",
	// 	id: "5f6febd2aa8b2c0a5b78587b",
	// 	email: "nik564@gmail.com",
	// };
	// localStorage.setItem("token", response.token);
	// dispatch(receiveLogin(response));
	//temp code ends////////////////////////////////

	return fetch(baseUrl + "user", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		// body: JSON.stringify(creds),
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
				// If login was successful, set the token in local storage
				localStorage.setItem("token", response.token);
				// Dispatch the success action
				// dispatch(fetchFavorites());
				dispatch(receiveLogin(response));
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				alert(error);
				throw error;
			}
		})
		.catch((error) => dispatch(loginError(error.message)));
};

export const requestLogout = () => {
	return {
		type: logoutRequest.type,
	};
};

export const receiveLogout = () => {
	return {
		type: logoutSuccess.type,
	};
};

// Logs the user out
export const logoutUser = () => (dispatch) => {
	dispatch(requestLogout());
	localStorage.removeItem("token");
	localStorage.removeItem("creds");
	// dispatch(favoritesFailed("Error 401: Unauthorized"));
	dispatch(receiveLogout());
};

export default authSlice.reducer;
