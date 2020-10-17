import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProfileLeft from "./ProfileLeftComp";
import ProfileRight from "./ProfileRightComp";
import { getProfile } from "../../store/features/profile/profileSlice";
import { useDispatch, useSelector } from "react-redux";

const Profile = ({ match }) => {
	const [userId, setUserId] = useState(match.params.userId);

	const userProfile = useSelector((state) => state.profile);
	const user = useSelector((state) => state.user);
	// const userId = match.params.userId;
	const dispatch = useDispatch();
	return (
		<Grid container direction="row" spacing={2} alignItems="stretch">
			<Grid item xs={12} sm={4}>
				<br />
				<ProfileLeft userProfile={userProfile} user={user} />
			</Grid>
			<Grid item xs={12} sm={8}>
				<br />
				<ProfileRight />
			</Grid>
		</Grid>
	);
};
export default Profile;
