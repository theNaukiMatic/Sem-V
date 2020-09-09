import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typoGraphyStyles:{
        alignItems : 'center'
    }
}));
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className = {classes.typoGraphyStyles}>
            <Toolbar >
                <Typography  >
                    This is a place holder for the Header Component
                </Typography>
            </Toolbar>
        </AppBar>
    );
};
export default Header;