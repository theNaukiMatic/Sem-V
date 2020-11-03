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
import SearchIcon from "@material-ui/icons/Search";
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
		// marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const SearchRight = () => {
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
		<Grid container direction="column" spacing={4}>
			<br />
			<br />
			<Grid item>
				<Card>
					<CardContent>
						<Grid container justify="center">
							<form
								className={classes.form}
								noValidate
								// onSubmit={handleSubmitCreate}
							>
								<Grid item>
									<Typography
										variant="h5"
										component="h5"
										align="center"
									>
										Search Group by ID
									</Typography>
								</Grid>
								<Grid item container spacing={2}>
									<Grid item xs={8}>
										<TextField
											id="groupId"
											label="Group Id"
											variant="outlined"
											margin="normal"
											required
											fullWidth
											// autoFocus
											value={groupId}
											onChange={(e) =>
												setGroupId(e.target.value)
											}
										/>
									</Grid>
									<Grid item xs={4}>
										<Box
											display="flex"
											flexDirection="column"
										>
											<Button
												className={classes.submit}
												variant="contained"
												justify="flex-end"
												inline
												// color="secondary"
											>
												<SearchIcon
													style={{ fontSize: 25 }}
												/>
												Search
											</Button>
										</Box>
									</Grid>
								</Grid>
							</form>
						</Grid>
						<Box
							component="flex"
							mb={3}
							borderColor="transparent"
						></Box>
					</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<Card>
					<CardContent>
						<Grid container justify="center">
							<form
								className={classes.form}
								noValidate
								// onSubmit={handleSubmitCreate}
							>
								<Grid item>
									<Typography
										variant="h5"
										component="h5"
										align="center"
									>
										Search Project by ID
									</Typography>
								</Grid>
								<Grid item container spacing={2}>
									<Grid item xs={8}>
										<TextField
											id="groupId"
											label="Project Id"
											variant="outlined"
											margin="normal"
											required
											fullWidth
											// autoFocus
											value={groupId}
											onChange={(e) =>
												setGroupId(e.target.value)
											}
										/>
									</Grid>
									<Grid item xs={4}>
										<Box
											display="flex"
											flexDirection="column"
										>
											<Button
												className={classes.submit}
												variant="contained"
												justify="flex-end"
												inline
												// color="secondary"
											>
												<SearchIcon
													style={{ fontSize: 25 }}
												/>
												Search
											</Button>
										</Box>
									</Grid>
								</Grid>
							</form>
						</Grid>
						<Box
							component="flex"
							mb={3}
							borderColor="transparent"
						></Box>
					</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<Card>
					<CardContent>
						<Grid container justify="center">
							<form
								className={classes.form}
								noValidate
								// onSubmit={handleSubmitCreate}
							>
								<Grid item>
									<Typography
										variant="h5"
										component="h5"
										align="center"
									>
										Search User by ID
									</Typography>
								</Grid>
								<Grid item container spacing={2}>
									<Grid item xs={8}>
										<TextField
											id="groupId"
											label="User Id"
											variant="outlined"
											margin="normal"
											required
											fullWidth
											// autoFocus
											value={groupId}
											onChange={(e) =>
												setGroupId(e.target.value)
											}
										/>
									</Grid>
									<Grid item xs={4}>
										<Box
											display="flex"
											flexDirection="column"
										>
											<Button
												className={classes.submit}
												variant="contained"
												justify="flex-end"
												inline
												// color="secondary"
											>
												<SearchIcon
													style={{ fontSize: 25 }}
												/>
												Search
											</Button>
										</Box>
									</Grid>
								</Grid>
							</form>
						</Grid>
						<Box
							component="flex"
							mb={3}
							borderColor="transparent"
						></Box>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
};
export default SearchRight;
