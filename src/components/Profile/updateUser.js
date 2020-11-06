import {
	Card,
	CardContent,
	Grid,
	Typography,
	TextField,
	CardMedia,
	Box,
	Button,
	Container,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { updateUser } from "../../store/features/user/updateUserSlice";
import Chip from "@material-ui/core/Chip";
import DoneIcon from "@material-ui/icons/Done";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		width: 200,
		height: 265,
		borderRadius: "2px",
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		height: 38,
		width: 38,
	},
}));
const Skills = (props) => {
	//chip add and remoce funtions
	const handleDelete = (skill) => {
		props.deleteSkill(skill);
	};

	return (
		<Box
			padding={2}
			style={{
				display: "flex",
				flexDirection: "row",
			}}
		>
			{props.skills.map((skill) => {
				return (
					<span>
						<li
							key={skill}
							style={{
								listStyleType: "none",
								margin: 2,
							}}
						>
							<Chip
								label={skill}
								clickable
								color="primary"
								onDelete={() => handleDelete(skill)}
							/>
						</li>
					</span>
				);
			})}
		</Box>
	);
};
const UpdateUser = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const user = useSelector((state) => state.user);
	const [firstName, setFirstName] = useState(user.user.firstname);
	const [lastName, setLastName] = useState(user.user.lastname);
	const [bio, setBio] = useState(user.user.bio);
	const [designation, setDesignation] = useState(user.user.designation);
	const [skills, setSkills] = useState(["helloi", "fdajshlf", "ioioadsf"]);
	const addSkill = (e) => {
		e.preventDefault();
		setSkills([...skills, newSkill]);
		console.log("add skill : " + newSkill);
		setNewSkill("");
	};

	const [newSkill, setNewSkill] = useState("");

	const handleSubmit = (e) => {
		const creds = {
			firstname: firstName,
			lastname: lastName,
			bio: bio,
			designation: designation,
			rating: 4,
			skills: [],
			skillDesc: "",
			experience: {},
			reviews: [],
		};
		console.log(creds);
		dispatch(updateUser(creds));
	};
	const deleteSkill = (x) => {
		console.log("delete Skill : " + x);
		// setSkills((state) => [...state, "test"]);
		setSkills(skills.filter((item) => item !== x));
	};

	return (
		<div>
			<Grid item>
				<Typography variant="h1" component="span">
					Edit Your Profile
				</Typography>
				<Button
					variant="contained"
					component="label"
					color="secondary"
					// paddingLeft={60}
					onClick={(e) => handleSubmit(e)}
				>
					Update Profile
				</Button>
			</Grid>
			<Grid direction="row" container spacing={2}>
				<Grid item xs={12} sm={6}>
					<Card>
						<CardContent>
							<Grid contianer direction="column" spacing={2}>
								<Grid item>
									<Typography variant="h3" component="h3">
										General
									</Typography>
								</Grid>
								<Grid item container spacing={2}>
									<Grid item>
										<TextField
											id="firtname"
											label="First Name"
											variant="outlined"
											margin="normal"
											fullWidth
											value={firstName}
											onChange={(e) =>
												setFirstName(e.target.value)
											}
										/>
									</Grid>
									<Grid item>
										<TextField
											id="lastname"
											label="Last Name"
											variant="outlined"
											margin="normal"
											fullWidth
											value={lastName}
											onChange={(e) =>
												setLastName(e.target.value)
											}
										/>
									</Grid>
								</Grid>
								<Grid item container spacing={2}>
									<Grid item>
										<TextField
											id="bio"
											label="Bio"
											variant="outlined"
											margin="normal"
											fullWidth
											value={bio}
											onChange={(e) =>
												setBio(e.target.value)
											}
										/>
									</Grid>
									<Grid item>
										<TextField
											id="designation"
											label="Designation"
											variant="outlined"
											margin="normal"
											fullWidth
											value={designation}
											onChange={(e) =>
												setDesignation(e.target.value)
											}
										/>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Card className={classes.root}>
						<div className={classes.details}>
							<CardContent className={classes.content}>
								<Typography component="h3" variant="h3">
									Profile Picture
								</Typography>
								<Typography
									variant="subtitle1"
									color="textSecondary"
								>
									<br />
									<br />
									<Button
										variant="contained"
										component="label"
									>
										Upload Image
										<input
											type="file"
											style={{ display: "none" }}
										/>
									</Button>
									<br />
									<br />
									<Button
										variant="contained"
										component="label"
										color="secondary"
									>
										Update Image
									</Button>
								</Typography>
							</CardContent>
						</div>
						<Box borderColor="grey.500" border={1}>
							{" "}
							<CardMedia
								className={classes.cover}
								image="/static/images/cards/live-from-space.jpg"
								title="Live from space album cover"
							/>
						</Box>
					</Card>
				</Grid>
				<br />
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Grid contianer direction="column" spacing={2}>
								<Grid item>
									<Typography variant="h3" component="h3">
										Skills
									</Typography>
								</Grid>
								<Grid item container spacing={2}>
									<Grid item xs={12} sm={4}>
										<TextField
											id="skillDesc"
											label="Skill description"
											variant="outlined"
											margin="normal"
											fullWidth
											multiline
											rows={4}
											value={firstName}
											onChange={(e) =>
												setFirstName(e.target.value)
											}
										/>
									</Grid>
									<Grid item xs={12} sm={2}>
										<TextField
											id="skillDesc"
											label="Skill"
											variant="outlined"
											margin="normal"
											fullWidth
											value={newSkill}
											onChange={(e) =>
												setNewSkill(e.target.value)
											}
										/>
										<Button
											variant="contained"
											component="label"
											color="secondary"
											onClick={addSkill}
										>
											Add Skill
										</Button>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Box
											borderColor="grey.400"
											border={1}
											height="100%"
										>
											<Skills
												skills={skills}
												deleteSkill={deleteSkill}
											/>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
				<br />
				<Grid item xs={12}>
					<Card>
						<CardContent>
							<Grid contianer direction="column" spacing={2}>
								<Grid item>
									<Typography variant="h3" component="h3">
										Experience
									</Typography>
								</Grid>
								<Grid item container spacing={2}>
									<Grid item xs={12} sm={4}>
										<TextField
											id="skillDesc"
											label="Skill description"
											variant="outlined"
											margin="normal"
											fullWidth
											multiline
											rows={4}
											value={firstName}
											onChange={(e) =>
												setFirstName(e.target.value)
											}
										/>
									</Grid>
									<Grid item xs={12} sm={2}>
										<TextField
											id="skillDesc"
											label="Skill"
											variant="outlined"
											margin="normal"
											fullWidth
											value={newSkill}
											onChange={(e) =>
												setNewSkill(e.target.value)
											}
										/>
										<Button
											variant="contained"
											component="label"
											color="secondary"
											onClick={addSkill}
										>
											Add Skill
										</Button>
									</Grid>
									<Grid item xs={12} sm={6}>
										<Box
											borderColor="grey.400"
											border={1}
											height="100%"
										>
											<Skills
												skills={skills}
												deleteSkill={deleteSkill}
											/>
										</Box>
									</Grid>
								</Grid>
							</Grid>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
};
export default UpdateUser;
