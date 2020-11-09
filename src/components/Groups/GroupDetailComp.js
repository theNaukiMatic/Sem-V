import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { useParams } from "react-router-dom";
import {
	Grid,
	Avatar,
	Box,
	CardActionArea,
	CardMedia,
	TextField,
	IconButton,
	CardHeader,
	Link,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupPost } from "../../store/features/groups/groupPostsSlice";
import { addPost } from "../../store/features/groups/postSlice";
import Loading from "../LoadingComponent";
import { baseUrl } from "../../baseUrl";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
const useStyles2 = makeStyles((theme) => ({
	root: {
		// maxWidth: 345,
		marginBottom: 20,
	},
	media: {
		// height: 0,
		// paddingTop: "56.25%", // 16:9
	},

	avatar: {
		backgroundColor: red[500],
	},
}));

const useStyles = makeStyles((theme) => ({
	root: {
		height: 300,
	},
	media: {
		height: 140,
	},
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
const GroupDetailLeft = () => {
	const groupData = useSelector((state) => state.group.groupData);
	return (
		<Card>
			<CardMedia
				component="img"
				alt={groupData.name}
				height="300"
				image="/static/images/cards/contemplative-reptile.jpg"
				title="Contemplative Reptile"
			/>
			<CardContent>
				<Typography gutterBottom variant="h2" component="h2">
					{groupData.name}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{groupData.description}
				</Typography>
			</CardContent>
		</Card>
	);
};
const Post = ({ post }) => {
	const classes = useStyles2();
	const [upvoted, setupvoted] = useState(false);
	const UpVoteIcon = () => {
		if (upvoted) return <ThumbUpIcon />;
		else return <ThumbUpOutlinedIcon />;
	};
	return (
		<div>
			<Card className={classes.root}>
				<CardHeader
					avatar={
						<Link href={`/profile/${post.author._id}`}>
							<Avatar
								aria-label={post.author.firstname}
								className={classes.avatar}
								src={baseUrl + post.author.imgname}
							/>
						</Link>
					}
					action={
						<IconButton aria-label="settings">
							<UpVoteIcon />
						</IconButton>
					}
					title={post.author.firstname + " " + post.author.lastname}
					subheader={new Intl.DateTimeFormat("en-US", {
						year: "numeric",
						month: "short",
						day: "2-digit",
					}).format(new Date(Date.parse(post.createdAt)))}
				/>
				<CardMedia
					className={classes.media}
					image={baseUrl + post.file}
					title={post.title}
				/>
				<CardContent>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p"
					>
						{post.message}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};
const GroupDetailRight = () => {
	const posts = useSelector((state) => state.groupPost);
	if (posts.isLoading) {
		return <Loading />;
	} else if (posts.success) {
		return (
			<div>
				<AddPost />
				{posts.posts.post.map((post) => {
					return <Post post={post} />;
				})}{" "}
			</div>
		);
	} else {
		return <div></div>;
	}
};
const AddPost = () => {
	const groupData = useSelector((state) => state.group.groupData);
	const classes = useStyles();
	const dispatch = useDispatch();
	const [title, setTitle] = useState("");
	const [message, setMessage] = useState("");
	const submitPost = () => {
		const data = {
			title: title,
			message: message,
		};
		dispatch(addPost(data, groupData._id));
	};
	return (
		<div>
			<Card style={{ marginBottom: 20 }}>
				<CardContent>
					<Box component="flex" mb={3} borderColor="transparent">
						<form
							className={classes.form}
							noValidate
							// onSubmit={handleSubmitCreate}
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
										label="Title"
										autoFocus
										value={title}
										onChange={(e) =>
											setTitle(e.target.value)
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
										label="What do you want to say?"
										// autoFocus
										multiline
										rows={2}
										value={message}
										onChange={(e) =>
											setMessage(e.target.value)
										}
									/>
								</Grid>
							</Grid>
							<Box display="flex" flexDirection="column">
								<Button
									className={classes.submit}
									variant="contained"
									justify="flex-end"
									inline
									onClick={submitPost}
								>
									Post
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

const GroupDetail = () => {
	let { groupId } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchGroupPost(groupId));
	}, []);
	const classes = useStyles();
	const user = useSelector((state) => state.user);
	return (
		<div>
			<Grid container direction="row" spacing={2} alignItems="stretch">
				<Grid item xs={12} sm={4}>
					<br />
					<GroupDetailLeft />
				</Grid>
				<Grid item xs={12} sm={8}>
					<br />
					<GroupDetailRight />
				</Grid>
			</Grid>
		</div>
	);
};
export default GroupDetail;
