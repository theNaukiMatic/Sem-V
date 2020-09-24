import React from "react";
import Review from "../Reviews";
import { Card, CardContent, Typography, Box } from "@material-ui/core";
import NightsStayIcon from "@material-ui/icons/NightsStay";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	cardPadding: {
		padding: "100px",
		[theme.breakpoints.down("sm")]: {
			padding: "0",
		},
	},
}));

const NoReviews = (props) => {
	const classes = useStyles();
	return (
		<Box>
			<Card className={classes.cardPadding}>
				<CardContent p={2}>
					<Typography variant="h4" align="center">
						{" "}
						<NightsStayIcon
							style={{
								fontSize: 100,
								color: "gray",
								textAlign: "center",
							}}
						/>{" "}
					</Typography>
					<Typography
						variant="h5"
						align="center"
						style={{ color: "gray", padding: "20" }}>
						{" "}
						{props.nickName} do not have any reviews yet!{" "}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};
const ProfileReviews = () => {
	const nickName = "theNaukiMatic";
	const Reviews = [
		{
			id: "259853",
			rating: 3,
			author: "Himanshu Gautam",
			desc:
				"Conducting requirements gathering and validation as a part of collaboration for the high-profile external web app that helped to address important UI/UX parts of the system's user interface before the active phase of development.",
		},
		{
			id: "485853",
			rating: 4,
			author: "Vishal Muwal",
			desc:
				"Conducting requirements gathering and validation as a part of collaboration for the high-profile external web app that helped to address important UI/UX parts of the system's user interface before the active phase of development.",
		},
	];
	if (Reviews.length === 0) {
		return <NoReviews nickName={nickName} />;
	} else {
		return (
			<div>
				<Card>
					<CardContent>
						<Typography variant="h4">
							{nickName}'s Reviews
						</Typography>
					</CardContent>
				</Card>
				<br />
				<div>
					{Reviews.map((data) => {
						return (
							<span>
								<li
									key={data.id}
									style={{ listStyleType: "none" }}>
									<Review project={data} />
								</li>
								<br />
							</span>
						);
					})}
				</div>
				{/* <ProjectCard /> */}
			</div>
		);
	}
};
export default ProfileReviews;
