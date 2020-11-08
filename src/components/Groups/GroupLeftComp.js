import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
	Grid,
	Avatar,
	Box,
	CardActionArea,
	CardMedia,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles({
	root: {
		height: 300,
	},
	media: {
		height: 140,
	},
});

const GroupLeft = () => {
	const classes = useStyles();
	const user = useSelector((state) => state.user);
	return (
		<div>
			<br />
			<br />
			<Typography variant="h2" component="h1">
				Your Groups
			</Typography>
			<Grid container direction="row" spacing={2} alignItems="stretch">
				{user.user.groups.map((group) => {
					return (
						<Grid item xs={12} sm={4} key={group._id}>
							<Card className={classes.root}>
								<CardActionArea>
									<CardMedia
										className={classes.media}
										image="/static/images/cards/contemplative-reptile.jpg"
										title={group.name}
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
										>
											{group.name}
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											{group.description}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
};
export default GroupLeft;
