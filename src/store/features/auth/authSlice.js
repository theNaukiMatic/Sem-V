import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		isLoading: false,
		isAuthenticated: false, //////////remember to check token here !!!!!!!!!!!!!

		token: localStorage.getItem("token"),
		user: null,
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
			state.push({
				isLoading: true,
				isAuthenticated: true,
			});
		},
		logoutSuccess(state, action) {
			state.push({
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
	console.log("login user is called");
	dispatch(requestLogin(creds));

	//temp api simulation code//////////////////
	const response = {
		isAuth: true,
		token: "thisfjadklfkj3489dafj",
		id: "5f6febd2aa8b2c0a5b78587b",
		email: "nik564@gmail.com",
	};
	localStorage.setItem("token", response.token);
	dispatch(receiveLogin(response));
	//temp code ends////////////////////////////////

	// return fetch(baseUrl + "user/login", {
	// 	method: "POST",
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 	},
	// 	body: JSON.stringify(creds),
	// })
	// 	.then(
	// 		(response) => {
	// 			if (response.ok) {
	// 				return response;
	// 			} else {
	// 				var error = new Error(
	// 					"Error " + response.status + ": " + response.statusText
	// 				);
	// 				error.response = response;
	// 				throw error;
	// 			}
	// 		},
	// 		(error) => {
	// 			throw error;
	// 		}
	// 	)
	// 	.then((response) => response.json())
	// 	.then((response) => {
	// 		if (response.success) {
	// 			// If login was successful, set the token in local storage
	// 			localStorage.setItem("token", response.token);
	// 			localStorage.setItem("creds", JSON.stringify(creds));
	// 			// Dispatch the success action
	// 			// dispatch(fetchFavorites());
	// 			dispatch(receiveLogin(response));
	// 		} else {
	// 			var error = new Error("Error " + response.status);
	// 			error.response = response;
	// 			throw error;
	// 		}
	// 	})
	// 	.catch((error) => dispatch(loginError(error.message)));
};

// export const requestLogout = () => {
// 	return {
// 		type: apiCallBegan,
// 	};
// };

// export const receiveLogout = () => {
// 	return {
// 		type: apiCallSuccess,
// 	};
// };

// // Logs the user out
// export const logoutUser = () => (dispatch) => {
// 	dispatch(requestLogout());
// 	localStorage.removeItem("token");
// 	localStorage.removeItem("creds");
// 	// dispatch(favoritesFailed("Error 401: Unauthorized"));
// 	dispatch(receiveLogout());
// };

export default authSlice.reducer;