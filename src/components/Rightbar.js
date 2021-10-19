import { Avatar, AvatarGroup, Container, Divider, ImageList, ImageListItem, Link, Typography } from '@mui/material';
import React from 'react';
import { useStyles } from './CustomCss'

const Rightbar = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container} style={{position:'sticky', top: 0}}>

            <Typography variant='h6'  className={classes.avatarTitle}>
                Online Friends
            </Typography>

            <AvatarGroup max={4} className={classes.avatarMargin} style={{ marginBottom: 20 }}>
                <Avatar alt="Remy Sharp" src="https://mui.com//static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="https://mui.com//static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="https://mui.com//static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="https://mui.com//static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/5.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/6.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/7.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/8.jpg" />
                <Avatar alt="Trevor Henderson" src="https://mui.com//static/images/avatar/9.jpg" />
            </AvatarGroup>

            <Typography variant='h6' gutterBottom className={classes.avatarTitle}>
                Gallery
            </Typography>
            <ImageList cols={2} rowHeight={100} style={{ marginBottom: 20 }}>

                <ImageListItem >
                    <img src='https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format' alt='' loading="lazy" />
                </ImageListItem>
                <ImageListItem >
                    <img src='https://images.unsplash.com/photo-1567306301408-9b74779a11af?w=164&h=164&fit=crop&auto=format' alt='' loading="lazy" />
                </ImageListItem>
                <ImageListItem >
                    <img src='https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format' alt='' loading="lazy" />
                </ImageListItem>
                <ImageListItem >
                    <img src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format' alt='' loading="lazy" />
                </ImageListItem>
                <ImageListItem >
                    <img src='https://images.unsplash.com/photo-1471357674240-e1a485acb3e1?w=164&h=164&fit=crop&auto=format' alt='' loading="lazy" />
                </ImageListItem>
                <ImageListItem >
                    <img src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format' alt='' loading="lazy" />
                </ImageListItem>
            </ImageList>

            <Typography variant='h6' gutterBottom className={classes.avatarTitle}>
                Categories
            </Typography>
            <Link href='#' className={classes.link} variant='body2'>
                Sport
            </Link>
            <Link href='#' className={classes.link} variant='body2'>
                Food
            </Link>
            <Link href='#' className={classes.link} variant='body2'>
                Entertainment
            </Link>
            <Divider orientation="vertical" flexItem />
            <Link href='#' className={classes.link} variant='body2'>
                Science
            </Link>
            <Link href='#' className={classes.link} variant='body2'>
                Life
            </Link>
            <Link href='#' className={classes.link} variant='body2'>
                News
            </Link>
        </Container>
    );
};

export default Rightbar;