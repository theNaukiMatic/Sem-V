import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";

const searchUserSlice = createSlice({
	name: "searchUser",
	initialState: {
		isLoading: false,
		user: null,
		errMess: null,
	},
	reducers: {
		//search user reducers
		searchUserRequest: (state, action) => ({
			...state,
			isLoading: true,
		}),
		searchUserSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: "",
			userData: action,
		}),
		searchUserFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});
export const {
	searchUserFailed,
	searchUserRequest,
	searchUserSuccess,
} = searchUserSlice.actions;

//action creators

//create group action creators
export const requestSearchUser = (groupData) => ({
	type: searchUserRequest.type,
	groupData,
});
export const recieveSearchUser = (response) => ({
	type: searchUserSuccess.type,
	userData: response.userData,
});
export const searchUserError = (message) => ({
	type: searchUserFailed.type,
	message,
});
export const searchUser = (searchTerm) => (dispatch) => {
	dispatch(requestSearchUser());
	const bearer = "Bearer " + localStorage.getItem("token");
	return (
		fetch(baseUrl + "users/search", {
			method: "Post",
			headers: {
				"Content-Type": "application/json",
				Authorization: bearer,
			},
			body: JSON.stringify(searchTerm),
		})
			.then(
				(response) => {
					if (response.ok) {
						return response;
					} else {
						var error = new Error(
							"Error" +
								response.status +
								": " +
								response.statusText
						);
						alert(error);
						error.response = response;
						throw error;
					}
				},
				(error) => {
					throw error;
				}
			)
			// .then((response) => response.slice(0, -2))
			.then((response) => response.json())
			.then((response) => {
				if (response.success) {
					console.log(response);
					// response.userdata.slice(0, -2);
					// response.json();
					console.log(response.userdata);
					dispatch(recieveSearchUser(response));
				} else {
					var error = new Error("Error " + response.status);
					error.response = response;
					console.log(error);
					alert(error.message);
					throw error;
				}
			})
			.catch((error) => dispatch(searchUserError(error.message)))
	);
};
export default searchUserSlice.reducer;
