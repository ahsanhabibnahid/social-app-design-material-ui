import { Home } from '@mui/icons-material';
import PersonIcon from '@mui/icons-material/Person';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import { Container, Typography } from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import React from 'react';
import {useStyles} from './CustomCss'


const Leftbar = () => {
    const classes = useStyles()
    return (
        <Container className={`${classes.container} ${classes.containerLeft}`}>
            <div className={classes.item}>
                <Home  className={classes.leftIcon}/>
                <Typography className={classes.text}>Home</Typography>
            </div>
            <div className={classes.item}>
                <PersonIcon  className={classes.leftIcon}/>
                <Typography className={classes.text}>Friends</Typography>
            </div>
            <div className={classes.item}>
                <FormatListBulletedIcon  className={classes.leftIcon}/>
                <Typography className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <PhotoCameraIcon  className={classes.leftIcon}/>
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <PhoneIphoneIcon  className={classes.leftIcon}/>
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <VideoLibraryIcon  className={classes.leftIcon}/>
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <CollectionsBookmarkIcon  className={classes.leftIcon}/>
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <StorefrontIcon  className={classes.leftIcon}/>
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <SettingsIcon  className={classes.leftIcon}/>
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <LogoutIcon  className={classes.leftIcon}/>
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    );
};

export default Leftbar;