import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
import { fetchUser } from "../user/userSlice";

const updatePicSlice = createSlice({
	name: "updatePic",
	initialState: {
		isLoading: false,
		errMess: null,
	},
	reducers: {
		//signUp reducers

		updatePicRequest: (state, action) => ({
			...state,
			isLoading: true,
		}),
		updatePicSuccess: (state, action) => ({
			...state,
			isLoading: false,
			errMess: "",
			success: true,
		}),
		updatePicFailed: (state, action) => ({
			...state,
			isLoading: false,
			errMess: action.message,
		}),
	},
});

export const {
	updatePicFailed,
	updatePicRequest,
	updatePicSuccess,
} = updatePicSlice.actions;

//action Creators
export const requestUpdatePic = () => ({
	type: updatePicRequest.type,
});
export const receiveUpdatePic = () => ({
	type: updatePicSuccess.type,
});
export const updatePicError = (message) => ({
	type: updatePicFailed.type,
	message,
});

export const updatePic = (pic) => (dispatch) => {
	console.log("signUpuseriscalled");
	dispatch(requestUpdatePic());
	const bearer = "Bearer " + localStorage.getItem("token");
	return fetch(baseUrl + "imageUpload", {
		method: "Post",
		headers: {
			"Content-Type": "multipart/form-data",
			Authorization: bearer,
		},
		body: JSON.stringify(pic),
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
				dispatch(receiveUpdatePic());

				dispatch(fetchUser());
			} else {
				var error = new Error("Error " + response.status);
				error.response = response;
				console.log(error);
				alert(error.message);
				throw error;
			}
		})
		.catch((error) => dispatch(updatePicError(error.message)));
};
export default updatePicSlice.reducer;
