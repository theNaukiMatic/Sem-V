import React from 'react';
import { AppBar, Typography, Toolbar, Grid } from '@material-ui/core';
import ProfileLeft from './ProfileLeftComp';

const Profile = () => {
    return (
        <Grid container direction="row" justify="space-evenly" alignItems="stretch">
            <Grid item xs>
                <ProfileLeft />
            </Grid>
            <Grid item xs={12} sm={8}>
                this is profile right component
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
                lorem ipsum
            </Grid>
        </Grid>
    );
};
export default Profile;