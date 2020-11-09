import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
import { fetchGroup } from "./groupSlice";
const groupPostSlice = createSlice({
	name: "groupPost",
	initialState: {
		isLoading: false,
		posts: [],
		errMess: null,
	},
	reducers: {
		//create Group reducers
		groupPostRequest: (state, action) => ({
			...state,
			isLoading: true,
		}),
		groupPostSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: "",
			posts: action.post,
		}),
		groupPostFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});
export const {
	groupPostFailed,
	groupPostRequest,
	groupPostSuccess,
} = groupPostSlice.actions;

//action creators

//create group action creators
export const requestGroupPost = () => ({
	type: groupPostRequest.type,
});
export const recieveGroupPost = (response) => ({
	type: groupPostSuccess.type,
	post: response,
});
export const groupPostError = (message) => ({
	type: groupPostFailed.type,
	message,
});
export const fetchGroupPost = (groupId) => (dispatch) => {
	console.log("fetchGroupPost called for groupId : " + groupId);
	dispatch(requestGroupPost());
	const bearer = "Bearer " + localStorage.getItem("token");
	return fetch(baseUrl + `posts/${groupId}`, {
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
						"Error" + response.status + ": " + response.statusText
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
		.then((response) => response.json())
		.then((response) => {
			if (response.success) {
				dispatch(recieveGroupPost(response));
				dispatch(fetchGroup(groupId));
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				console.log(error);
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => dispatch(groupPostError(error.message)));
};

export default groupPostSlice.reducer;
