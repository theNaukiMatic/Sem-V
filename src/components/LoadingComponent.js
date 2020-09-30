import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: theme.spacing(4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: theme.spacing(8),
	},
}));

export default function Loading() {
	const classes = useStyles();

	return (
		<div>
			<Box display="flex">
				<Box flexGrow={1}>
					<Box className={classes.root}>
						<CircularProgress size={100} />
					</Box>
				</Box>
			</Box>
		</div>
	);
}
