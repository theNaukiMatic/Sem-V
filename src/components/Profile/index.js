import React from 'react';
import { AppBar, Typography, Toolbar, Grid } from '@material-ui/core';
import ProfileLeft from './ProfileLeftComp';
import ProfileRight from './ProfileRightComp';

const Profile = () => {
    return (
        <Grid container direction="row" justify="space-evenly" alignItems="stretch" spacing = {2}>
            <Grid item xs>
                <ProfileLeft />
            </Grid>
            <Grid item xs={12} sm={8}>
                <ProfileRight />
            </Grid>
        </Grid>
    );
};
export default Profile;