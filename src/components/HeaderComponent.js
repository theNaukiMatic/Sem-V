import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import { logoutUser } from "../store/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Link, Menu, MenuItem } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}));
const Navbar = () => {
	const auth = useSelector((state) => state.auth);
	const user = useSelector((state) => state.user);
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	const logout = () => {
		dispatch(logoutUser());
	};
	const classes = useStyles();
	const dispatch = useDispatch();
	if (!auth.isAuthenticated) {
		return null;
	}

	return (
		<AppBar position="static">
			<Toolbar>
				<GitHubIcon className={classes.menuButton} />
				<Typography variant="h6" className={classes.title}>
					<Link href="/home" color="inherit" variant="inherit">
						AppName
					</Link>
				</Typography>
				<Button color="inherit" variant="inherit">
					<Link color="inherit" variant="inherit" href="/search">
						Search
					</Link>
				</Button>
				<Button color="inherit" variant="inherit">
					<Link color="inherit" variant="inherit" href="/groups">
						Groups
					</Link>
				</Button>
				<Button
					aria-controls="simple-menu"
					aria-haspopup="true"
					color="inherit"
					onClick={handleClick}
				>
					<AccountCircleIcon />
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					{/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
					<Link href={`/profile/${localStorage.getItem("userId")}`}>
						<MenuItem onClick={handleClose}>Your Profile</MenuItem>
					</Link>
					<MenuItem
						onClick={() => {
							handleClose();
							logout();
						}}
					>
						Logout
					</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	);
};
export default Navbar;
