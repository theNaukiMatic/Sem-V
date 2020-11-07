import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingComponent";

const useStyles = makeStyles({
	root: {
		height: 300,
	},
	media: {
		height: 140,
	},
});

const SearchUserRes = () => {
	const classes = useStyles();
	const [showLoading, setShowLoading] = useState(false);
	const userData = useSelector((state) => state.search.searchUser);
	useEffect(() => {
		if (userData.isLoading === true) {
			setShowLoading(true);
		} else {
			setShowLoading(false);
		}
	}, [userData]);
	if (showLoading) {
		return <Loading />;
	} else {
		return (
			<Box>
				<br />
				<br />
				<Typography variant="h3" component="h1">
					Search Results
				</Typography>
				<br />
				<Grid
					container
					direction="row"
					spacing={2}
					alignItems="stretch"
				>
					{userData.userData.map((user) => {
						return (
							<Grid item xs={12} sm={4} key={user._id}>
								<Card className={classes.root}>
									<CardActionArea
										href={`/profile/${user._id}`}
									>
										<CardMedia
											className={classes.media}
											image="/static/images/cards/contemplative-reptile.jpg"
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography
												className={classes.pos}
												color="textSecondary"
												align="center"
											>
												@{user.username}
											</Typography>
											<Typography
												variant="h5"
												component="h5"
												align="center"
											>
												{user.firstname} {user.lastname}
											</Typography>
											<Typography
												className={classes.pos}
												color="textSecondary"
												align="center"
											>
												{user.designation}
											</Typography>

											<br />

											<Typography
												variant="body2"
												component="p"
											>
												{user.bio}
											</Typography>
										</CardContent>
									</CardActionArea>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		);
	}
};
export default SearchUserRes;
