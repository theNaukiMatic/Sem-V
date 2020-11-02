import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Avatar, Box, TextField } from "@material-ui/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGroup } from "../../store/features/groups/joinGroupSlice";
const useStyles = makeStyles((theme) => ({
	pos: {
		marginBottom: 12,
	},
	large: {
		width: theme.spacing(25),
		height: theme.spacing(25),
	},
	form: {
		width: "100%", // Fix IE 11 issue.
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const GroupRight = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [groupId, setGroupId] = useState("");
	const [groupName, setGroupName] = useState("");
	const [groupDesc, setGroupDesc] = useState("");

	const handleSubmitCreate = (e) => {
		e.preventDefault();
		const groupData = {
			name: groupName,
			description: groupDesc,
		};
		dispatch(createGroup(groupData));
	};

	return (
		<div>
			<br />
			<br />
			<Card>
				<CardContent>
					<Grid container justify="center">
						<Grid item>
							<Typography
								variant="h5"
								component="h2"
								align="center"
							>
								Join a new Group
							</Typography>
						</Grid>
						<br />
					</Grid>
					<Box component="flex" mb={3} borderColor="transparent">
						<form
							className={classes.form}
							noValidate
							// onSubmit={handleSubmitCreate}
						>
							<Typography>
								{" "}
								<TextField
									id="groupId"
									label="Group Id"
									variant="outlined"
									margin="normal"
									required
									fullWidth
									autoFocus
									value={groupId}
									onChange={(e) => setGroupId(e.target.value)}
								/>
								<Box display="flex" flexDirection="column">
									<Button
										className={classes.submit}
										variant="contained"
										justify="flex-end"
										inline
									>
										Join
									</Button>
								</Box>
							</Typography>
						</form>
					</Box>
				</CardContent>
			</Card>

			<br />
			<br />

			<Card>
				<CardContent>
					<Grid container justify="center">
						<Grid item>
							<Typography
								variant="h5"
								component="h2"
								align="center"
							>
								Make a new Group
							</Typography>
						</Grid>
						<br />
					</Grid>
					<Box component="flex" mb={3} borderColor="transparent">
						<form
							className={classes.form}
							noValidate
							onSubmit={handleSubmitCreate}
						>
							{/* <Typography> */}{" "}
							<Grid container spacing={2}>
								<Grid item xs={12} sm={12}>
									<TextField
										name="groupName"
										variant="outlined"
										required
										fullWidth
										id="groupName"
										label="Group Name"
										autoFocus
										value={groupName}
										onChange={(e) =>
											setGroupName(e.target.value)
										}
									/>
								</Grid>
								<Grid item xs={12} sm={12}>
									<TextField
										name="groupDesc"
										variant="outlined"
										required
										fullWidth
										id="groupDesc"
										label="Description"
										// autoFocus
										multiline
										rows={2}
										value={groupDesc}
										onChange={(e) =>
											setGroupDesc(e.target.value)
										}
									/>
								</Grid>
							</Grid>
							<Box display="flex" flexDirection="column">
								<Button
									type="submit"
									className={classes.submit}
									variant="contained"
									justify="flex-end"
									inline
								>
									Create Group
								</Button>
							</Box>
							{/* </Typography> */}
						</form>
					</Box>
				</CardContent>
			</Card>
		</div>
	);
};
export default GroupRight;
