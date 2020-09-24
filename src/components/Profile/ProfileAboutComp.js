import React from "react";
import {
	Grid,
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		justifyContent: "left",
		flexWrap: "wrap",
		listStyle: "none",
		padding: theme.spacing(0.5),
		margin: 0,
		background: "paper",
	},
	chip: {
		margin: theme.spacing(0.5),
		background: "#EDF2F4",
		color: "#2B2D42",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		//   margin: -5
	},
	large: {
		width: theme.spacing(25),
		height: theme.spacing(25),
	},
	makeCenter: {
		// display :'flex',
		// flexDirection:"col",
		justifyContent: "center",
		margin: "auto",
		alignItems: "center",
	},
	cardBackround: {
		background: "white",
	},
	cardContent: {
		background: "#EDF2F4",
	},
}));

const Skills = () => {
	const classes = useStyles();

	const [chipData, setChipData] = React.useState([
		{ key: 0, label: "Angular" },
		{ key: 1, label: "jQuery" },
		{ key: 2, label: "Polymer" },
		{ key: 3, label: "React" },
		{ key: 4, label: "Vue.js" },
	]);
	const skillDes =
		"Conducting requirements gathering and validation as a part of collaboration for the high-profile external web app that helped to address important UI/UX parts of the system's user interface before the active phase of development.";

	const handleDelete = (chipToDelete) => () => {
		setChipData((chips) =>
			chips.filter((chip) => chip.key !== chipToDelete.key)
		);
	};
	return (
		<Card>
			<CardContent>
				<Grid container>
					<Grid item>
						<Typography variant="h4" component="h2" align="left">
							Skills
						</Typography>

						{/* chips code start here */}
						<div component="ul" className={classes.root}>
							{chipData.map((data) => {
								let icon;

								if (data.label === "React") {
									icon = <TagFacesIcon />;
								}

								return (
									<li key={data.key}>
										<Chip
											// icon={icon}
											label={data.label}
											// onDelete={handleDelete(data)}
											className={classes.chip}
											variant="default"
											color="primary"
										/>
									</li>
								);
							})}
						</div>
						{/* //chips code ends here */}
						<br />
						<Typography
							className={classes.pos}
							color="textSecondary"
							align="justify">
							{skillDes}
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Button size="small" color="secondary">
					Edit
				</Button>
			</CardActions>
		</Card>
	);
};
const Experiences = () => {
	const classes = useStyles();
	const [experienceData, setExperienceData] = React.useState([
		{
			key: 0,
			label:
				"Assessing project requirements using Agile & Scrum principles related to the high-volume online service that helped prioritize developing activities and reduce ad hoc work requests by 35%",
		},
		{
			key: 1,
			label:
				"Conducting requirements gathering and validation as a part of collaboration for the high-profile external web app that helped to address important UI/UX parts of the systems user interface before the active phase of development",
		},
		{
			key: 2,
			label:
				"Documenting solution architecture for the high-profile progressive web application standardizing the way of development amongst different projects and mitigating code duplicity",
		},
		{
			key: 3,
			label:
				"Maintaining newly developed and legacy systems high-profile progressive web application utilizing ORD and ASP.NET ",
		},
		{
			key: 4,
			label:
				"Performance tunning of the legacy data storages and search queries of the critical progressive web applicationusing DAX and ORD resulting in response time decrease by 79%.js",
		},
	]);
	return (
		<Card className={classes.cardBackround}>
			<CardContent>
				<Grid container>
					<Grid item>
						<Typography variant="h4" component="h2" align="left">
							Experience
						</Typography>

						<br />

						<div>
							{experienceData.map((data) => {
								return (
									<li>
										<Card variant="outlined">
											<CardContent
												className={classes.cardContent}>
												<Typography
													className={classes.pos}
													color="textSecondary"
													align="justify">
													{" "}
													{data.label}
												</Typography>
											</CardContent>
										</Card>
										<br />
									</li>
								);
							})}
						</div>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions>
				<Button size="small" color="secondary">
					Edit
				</Button>
			</CardActions>
		</Card>
	);
};

const ProfileAbout = () => {
	return (
		<div>
			<div>
				<Skills />
			</div>
			<br />
			<div>
				<Experiences />
			</div>
		</div>
	);
};
export default ProfileAbout;
