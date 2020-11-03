import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import SearchLeft from "./searchLeft";
import SearchRight from "./searchRight";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
	return (
		<Grid container direction="row" spacing={2} alignItems="stretch">
			<Grid item xs={12} sm={8}>
				<br />
				<SearchLeft />
			</Grid>
			<Grid item xs={12} sm={4}>
				<br />
				<SearchRight />
			</Grid>
		</Grid>
	);
};
export default Search;
