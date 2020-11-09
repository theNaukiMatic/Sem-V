import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
const groupSlice = createSlice({
	name: "group",
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
		groupRequest: (state, action) => ({
			...state,
			isLoading: true,
		}),
		groupSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: "",
			groupData: action.groupData,
		}),
		groupFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});
export const { groupFailed, groupRequest, groupSuccess } = groupSlice.actions;

//action creators

//create group action creators
export const requestGroup = () => ({
	type: groupRequest.type,
});
export const recieveGroup = (response) => ({
	type: groupSuccess.type,
	groupData: response,
});
export const groupError = (message) => ({
	type: groupFailed.type,
	message,
});
export const fetchGroup = (groupId) => (dispatch) => {
	console.log("fetchGroup called for groupId : " + groupId);
	dispatch(requestGroup());
	const bearer = "Bearer " + localStorage.getItem("token");
	return fetch(baseUrl + `groups/${groupId}`, {
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
				dispatch(recieveGroup(response));
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				console.log(error);
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => dispatch(groupError(error.message)));
};

export default groupSlice.reducer;
