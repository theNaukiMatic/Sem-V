import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
import fetchUser from "../user/userSlice";

const joinGroupSlice = createSlice({
	name: "joinGroup",
	initialState: {
		isLoading: false,
		groupData: {
			id: null,
			name: null,
			desc: null,
		},
		errMess: null,
	},
	reducers: {
		//create Group reducers
		createGroupRequest: (state, action) => ({
			...state,
			isLoading: true,
			groupData: action.groupData,
		}),
		createGroupSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: "",
			groupData: action.groupData,
		}),
		createGroupFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),

		//join Group reducers

		joinGroupRequest: (state, action) => ({
			...state,
			isLoading: true,
			groupId: action.groupId,
		}),
		joinGroupSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: "",
			success: true,
		}),
		joinGroupFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});
export const {
	createGroupFailed,
	createGroupRequest,
	createGroupSuccess,
	joinGroupFailed,
	joinGroupRequest,
	joinGroupSuccess,
} = joinGroupSlice.actions;

//action creators

//create group action creators
export const requestCreateGroup = (groupData) => ({
	type: createGroupRequest.type,
	groupData,
});
export const recieveCreateGroup = (response) => ({
	type: createGroupSuccess.type,
	groupData: response,
});
export const createGroupError = (message) => ({
	type: createGroupFailed.type,
	message,
});
export const createGroup = (groupData) => (dispatch) => {
	dispatch(requestCreateGroup(groupData));
	const bearer = "Bearer " + localStorage.getItem("token");
	return fetch(baseUrl + "groups/", {
		method: "Post",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
		body: JSON.stringify(groupData),
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
				dispatch(recieveCreateGroup(response));
				dispatch(fetchUser());
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				console.log(error);
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => dispatch(createGroupError(error.message)));
};
//join group action creators
export const requestJoinGroup = (groupId) => ({
	type: createGroupRequest.type,
	groupId,
});
export const recieveJoinGroup = (response) => ({
	type: createGroupSuccess.type,
	groupData: response,
});
export const joinGroupError = (message) => ({
	type: createGroupFailed.type,
	message,
});

export const joinGroup = (groupId) => (dispatch) => {
	dispatch(requestJoinGroup(groupId));
	const bearer = "Bearer " + localStorage.getItem("token");
	return fetch(baseUrl + `joinGroup/${groupId}`, {
		method: "Post",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
		body: JSON.stringify(groupId),
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
				dispatch(recieveJoinGroup(response));
				dispatch(fetchUser());
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				console.log(error);
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => dispatch(joinGroupError(error.message)));
};
export default joinGroupSlice.reducer;
