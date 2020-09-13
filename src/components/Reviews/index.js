import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Avatar, Grid } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		// maxWidth: 345,
	},
	topPadding: {
		paddingTop: 5,
	},
});

const Review = (props) => {
	const classes = useStyles();
	const reviewAuthor = props.project.author;
	const reviewDesc = props.project.desc;
	const rating = props.project.rating;

	if (false) {
		return <h1>this is a Review</h1>;
	} else {
		return (
			<Card className={classes.root}>
				<CardContent>
					<CardActionArea>
						<Grid container>
							<Grid item xs={2} sm={1}>
								<Avatar
									alt={reviewAuthor}
									src="/static/images/avatar/1.jpg"
									className={classes.small}
								/>
							</Grid>

							<Grid item xs={9} sm={6}>
								<Typography
									variant="h5"
									className={classes.topPadding}>
									{reviewAuthor}
								</Typography>
							</Grid>
							<Grid item sm={2} xs={2}></Grid>
							<Grid
								item
								className={classes.topPadding}
								xs={9}
								sm={3}>
								<Box
									component="flex"
									// mb={3}
									borderColor="transparent">
									<Rating
										name="read-only"
										value={rating}
										readOnly
									/>
								</Box>
							</Grid>
						</Grid>
						<br />
					</CardActionArea>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p">
						{reviewDesc}
					</Typography>
				</CardContent>
			</Card>
		);
	}
};
export default Review;
