import { createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../../baseUrl";
import { fetchUser } from "../user/userSlice";
const axios = require("axios");

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
export const updatePicError = () => ({
	type: updatePicFailed.type,
	// message,
});

export const updatePic = (pic) => (dispatch) => {
	// console.log("signUpuseriscalled");
	const bearer = "Bearer " + localStorage.getItem("token");
	requestUpdatePic();
	const formData = new FormData();
	formData.append("imageFile", pic);
	const config = {
		headers: {
			"content-type": "multipart/form-data",
			Authorization: bearer,
		},
	};
	axios
		.post(baseUrl + "imageUpload", formData, config)
		.then((response) => {
			receiveUpdatePic();
		})
		.catch((error) => {
			updatePicFailed();
		});
};
export default updatePicSlice.reducer;
