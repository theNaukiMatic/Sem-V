import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
import { fetchGroupPost } from "./groupPostsSlice";
const postSlice = createSlice({
	name: "post",
	initialState: {
		isLoading: false,
		post: {
			title: null,
			message: null,
		},
		errMess: null,
	},
	reducers: {
		postRequest: (state, action) => ({
			...state,
			isLoading: true,
		}),
		postSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: "",
			groupData: action.groupData,
		}),
		postFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});
export const { postFailed, postRequest, postSuccess } = postSlice.actions;

//action creators

export const requestPost = () => ({
	type: postRequest.type,
});
export const recievePost = (response) => ({
	type: postSuccess.type,
	groupData: response.group,
});
export const postError = (message) => ({
	type: postFailed.type,
	message,
});
export const addPost = (post, groupId) => (dispatch) => {
	dispatch(requestPost());
	const bearer = "Bearer " + localStorage.getItem("token");
	return fetch(baseUrl + `posts/${groupId}`, {
		method: "Post",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
		body: JSON.stringify(post),
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
				dispatch(recievePost(response));
				dispatch(fetchGroupPost(groupId));
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				console.log(error);
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => dispatch(postError(error.message)));
};

export default postSlice.reducer;
