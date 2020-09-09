import React from 'react';
import { AppBar, Typography, Toolbar, Grid } from '@material-ui/core';
import ProfileLeft from './ProfileLeftComp';
import ProfileRight from './ProfileRightComp';

const Profile = () => {
    return (
        <Grid container direction="row" spacing = {2} alignItems="stretch">
            <Grid item xs={12} sm={4}>
                <br/>
                <ProfileLeft />
            </Grid>
            <Grid item xs={12} sm={8}>
            <br />
                <ProfileRight />
            </Grid>
        </Grid>
    );
};
export default Profile;