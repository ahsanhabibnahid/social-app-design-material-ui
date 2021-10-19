import { Container } from '@mui/material';
import React from 'react';
import {useStyles} from './CustomCss'
import Post from './Post';

const Feed = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>
        </Container>
    );
};

export default Feed;