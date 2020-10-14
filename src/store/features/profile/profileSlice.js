import {createSlice} from "@reduxjs/toolkit";
import {baseUrl} from "../../../baseUrl"

const profileSlice = createSlice({
    name:"profile",
    initialState : {
        isLoading: false,
        errMess:null,
        success:null,
        userId:null,
        user:{
            id:null,
            firstName: null,
            lastName: null,
            email:null,
        }
    },
    reducers:{
        profileRequest:(state, action) => ({
            ...state,
            isLoading:true,
            userId: action.userId,
        }),
        profileSuccess: (state, action) => ({
            ...state,
            isLoading: false,
            user: action.user,
            errMess:"",
        }),
        profileFailed: (state, action) => ({
            ...state,
            isLoading:false,
            errMess: action.message
        })
    }
});
export const{
    profileFailed,
    profileRequest,
    profileSuccess,
} = profileSlice.actions;

//action creators

export const requestProfile = (userId) => ({
        type: profileRequest.type,
        userId
});
export const receiveProfile = (response) => ({
    type : profileSuccess.type,
    user: response
});
export const profileError = (message) => ({
    type: profileFailed.type,
    message,
});

export const getProfile = (userId) => (dispatch) => {
    dispatch(requestProfile(userId));
    const bearer = 'Bearer ' + localStorage.getItem('token');
    return fetch(baseUrl + `users/profile/{userId}`,{
        method: "Get",
        headers:{
            "Content-Type": "application/json",
            'Authorization': bearer,
        }
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
            dispatch(receiveProfile(response));
        } else {
            var error = new Error("Error " + response.status);
            error.response = response;
            alert(error.message);
            throw error;
        }
    })
    .catch((error) => dispatch(profileError(error.message)));
}

export default profileSlice.reducer;