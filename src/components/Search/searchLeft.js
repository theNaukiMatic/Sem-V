import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import {
	Grid,
	Avatar,
	Box,
	CardActionArea,
	CardMedia,
	TextField,
	Container,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
	root: {
		height: 300,
		// padding: 3,
	},
	media: {
		height: 140,
	},
});

const SearchLeft = () => {
	const classes = useStyles();
	const user = useSelector((state) => state.user);
	return (
		<div>
			<br />
			<br />
			<br />
			<br />
			<Card className={classes.root}>
				<CardContent>
					<Typography variant="h2" component="h1">
						<SearchIcon
							style={{ fontSize: 50 }}
							color="secondary"
						/>
						{"   "}
						Search
					</Typography>
					<Container>
						<form
							className={classes.form}
							noValidate
							// onSubmit={handleSubmitCreate}
						>
							<Grid container direction="column" spacing={4}>
								<Grid item>
									{" "}
									<TextField
										id="searchTerm"
										label="Search Term"
										variant="outlined"
										margin="normal"
										required
										fullWidth
										autoFocus
										// value={groupId}
										// onChange={(e) => setGroupId(e.target.value)}
									/>
								</Grid>
								<Grid
									item
									container
									spacing={4}
									alignItems="center"
									justify="center"
								>
									<Grid item>
										<Button
											className={classes.submit}
											variant="contained"
											justify="flex-end"
											inline
											color="secondary"
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<SearchIcon
													style={{ fontSize: 25 }}
												/>
												Search Users
											</div>
										</Button>
									</Grid>
									<Grid item>
										<Button
											className={classes.submit}
											variant="contained"
											justify="flex-end"
											inline
											color="secondary"
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<SearchIcon
													style={{ fontSize: 25 }}
												/>
												Search Projects
											</div>
										</Button>
									</Grid>
									<Grid item>
										<Button
											className={classes.submit}
											variant="contained"
											justify="flex-end"
											inline
											color="secondary"
										>
											<div
												style={{
													display: "flex",
													alignItems: "center",
												}}
											>
												<SearchIcon
													style={{ fontSize: 25 }}
												/>
												Search Groups
											</div>
										</Button>
									</Grid>
								</Grid>
							</Grid>
						</form>
					</Container>
				</CardContent>
			</Card>
		</div>
	);
};
export default SearchLeft;
