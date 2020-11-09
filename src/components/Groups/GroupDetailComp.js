import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useParams } from "react-router-dom";
import {
	Grid,
	Avatar,
	Box,
	CardActionArea,
	CardMedia,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroupPost } from "../../store/features/groups/groupPostsSlice";
const useStyles = makeStyles({
	root: {
		height: 300,
	},
	media: {
		height: 140,
	},
});

const GroupDetail = () => {
	let { groupId } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchGroupPost(groupId));
	}, []);
	const classes = useStyles();
	const user = useSelector((state) => state.user);
	return <div>Group Page + {groupId}</div>;
};
export default GroupDetail;
