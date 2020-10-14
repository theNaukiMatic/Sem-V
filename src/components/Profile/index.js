import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProfileLeft from "./ProfileLeftComp";
import ProfileRight from "./ProfileRightComp";
import { getProfile } from "../../store/features/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = ({ match }) => {
	const [userId, setUserId] = useState(match.params.userId);

	const userProfile = useSelector((state) => state.profile);
	const auth = useSelector((state) => state.auth);
	// const userId = match.params.userId;
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	// document.title = `You clicked ${count} times`;
	// 	dispatch(getProfile(userId));
	//   },[]);
	//   dispatch(getProfile(userId));
	return (
		<Grid container direction="row" spacing={2} alignItems="stretch">
			<Grid item xs={12} sm={4}>
				<br />
				<ProfileLeft userProfile={userProfile} auth={auth} />
			</Grid>
			<Grid item xs={12} sm={8}>
				<br />
				<ProfileRight />
			</Grid>
		</Grid>
	);
};
export default Profile;
