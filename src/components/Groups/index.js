import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import GroupLeft from "./GroupLeftComp";
import GroupRight from "./GroupRightComp";

import { useDispatch, useSelector } from "react-redux";

const Group = () => {
	return (
		<Grid container direction="row" spacing={2} alignItems="stretch">
			<Grid item xs={12} sm={8}>
				<br />
				<GroupLeft />
			</Grid>
			<Grid item xs={12} sm={4}>
				<br />
				<GroupRight />
			</Grid>
		</Grid>
	);
};
export default Group;
