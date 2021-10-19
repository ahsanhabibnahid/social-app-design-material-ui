import { 
    Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Typography 
} from '@mui/material';
import React from 'react';
import {useStyles} from './CustomCss'

const Post = () => {
    const classes = useStyles()
    return (
        <Card className={classes.postCard}>
            <CardActionArea>
                <CardMedia 
                    className={classes.media} 
                    image='https://image.freepik.com/free-vector/african-landscape-poster_1284-12828.jpg?1'
                    title='my post'
                
                />

                <CardContent>
                    <Typography gutterBottom variant='h5'>My First Post</Typography>
                    <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laboriosam porro numquam inventore non rerum debitis quo, officia molestias libero modi illum nisi at velit. Dolor impedit at incidunt vitae.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis laboriosam porro numquam inventore non rerum debitis quo, officia molestias libero modi illum nisi at velit. Dolor impedit at incidunt vitae.</Typography>
                </CardContent>


            </CardActionArea>

            <CardActions>
                <Button size='small' color='primary'>Share</Button>
                <Button size='small' color='primary'>Learn More</Button>
            </CardActions>
        </Card>
    );
};

export default Post;