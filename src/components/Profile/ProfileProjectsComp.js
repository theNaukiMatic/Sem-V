import React from "react";
import ProjectCard from "../Project/ProjectCardComp";
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

const NoProjects = (props) => {
	const classes = useStyles();
	return (
		<Box>
			<Card className={classes.cardPadding}>
				<CardContent p={2}>
					<Typography variant="h4" align="center">
						<NightsStayIcon
							style={{
								fontSize: 100,
								color: "gray",
								textAlign: "center",
							}}
						/>
					</Typography>
					<Typography
						variant="h5"
						align="center"
						style={{ color: "gray", padding: "20" }}>
						{" "}
						{props.nickName} has not posted any projects yet!{" "}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

const ProfilePosts = () => {
	const nickName = "theNaukiMatic";
	const Projects = [
		// {
		// 	id: "259853",
		// 	rating: 3,
		// 	name: "Project 1",
		// 	desc:
		// 		"Conducting requirements gathering and validation as a part of collaboration for the high-profile external web app that helped to address important UI/UX parts of the system's user interface before the active phase of development.",
		// },
		// {
		// 	id: "485853",
		// 	rating: 4,
		// 	name: "Project 2",
		// 	desc:
		// 		"Conducting requirements gathering and validation as a part of collaboration for the high-profile external web app that helped to address important UI/UX parts of the system's user interface before the active phase of development.",
		// },
	];
	console.log(Projects.length);
	if (Projects.length === 0) {
		return <NoProjects nickName={nickName} />;
	} else {
		return (
			<div>
				<Card>
					<CardContent>
						<Typography variant="h4">
							{nickName}'s Projects
						</Typography>
					</CardContent>
				</Card>
				<br />
				<div>
					{Projects.map((data) => {
						return (
							<span>
								<li
									key={data.id}
									style={{ listStyleType: "none" }}>
									<ProjectCard project={data} />
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
export default ProfilePosts;
