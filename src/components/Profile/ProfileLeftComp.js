import React from "react";
import { baseUrl } from "../../baseUrl";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, Avatar, Box, Hidden, Link } from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles((theme) => ({
	pos: {
		marginBottom: 12,
	},
	large: {
		width: theme.spacing(25),
		height: theme.spacing(25),
	},
}));

const ProfileLeft = ({ user }) => {
	const classes = useStyles();
	let editable = "hidden";
	if (localStorage.getItem("userId") === user.user.userId) {
		editable = "visible";
	}
	const FirstName = user.user.firstname;
	const LastName = user.user.lastname;
	const Designation = user.user.designation;
	const profileImage = user.user.imgname;

	const [rating, setRating] = React.useState(3);

	return (
		<Card>
			<CardContent>
				<Grid container justify="center">
					<Grid item>
						<div align="center">
							<Avatar
								alt={FirstName}
								src={baseUrl + profileImage}
								className={classes.large}
							/>
						</div>
						<br />
						<Typography
							className={classes.pos}
							color="textSecondary"
							align="center"
						>
							@{user.user.username}
						</Typography>
						<Typography variant="h4" component="h2" align="center">
							{FirstName} {LastName}
						</Typography>
						<Typography
							className={classes.pos}
							color="textSecondary"
							align="center"
						>
							{Designation}
						</Typography>

						<br />

						<Typography variant="body2" component="p">
							{user.user.bio}
						</Typography>
					</Grid>
					<br />
				</Grid>
				<Box component="flex" mb={3} borderColor="transparent">
					<Typography component="legend">Rating</Typography>
					<Rating name="read-only" value={rating} readOnly />
				</Box>
			</CardContent>
			<CardActions>
				<Box visibility={editable}>
					<Link href="/editProfile">
						<Button size="small" color="secondary">
							Edit Profile
						</Button>
					</Link>
				</Box>
			</CardActions>
		</Card>
	);
};
export default ProfileLeft;
