import React, { useState } from 'react';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material';
import { Cancel, Mail, Search } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
// import { theme } from '../theme';
import { createTheme } from "@mui/material";

const theme = createTheme({})

const useStyles = makeStyles({
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    logoLg: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    },
    logoSm: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none'
        }
    },
    search: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        borderRadius: theme.shape.borderRadius,
        width: '50%',
        [theme.breakpoints.down('sm')] : {
            display: (props) => (props.open ? 'flex' : 'none'),
            width: '70%'
        }
    },
    input: {
        color: 'white',
        marginLeft: theme.spacing(1)
    },
    cancel:{
        [theme.breakpoints.up("sm")]:{
            display: 'none'
        }
    },
    searchButton : {
        marginRight:theme.spacing(2),
        [theme.breakpoints.up("sm")] : {
            display: 'none',
        }
    },
    icons : {
        display: (props) => (props.open ? 'none' : 'flex'),
        alignItems: 'center',
    },
    badge : {
        marginRight:theme.spacing(2)
    },
    
});

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const classes = useStyles({open});
    return (
        <div>
            <AppBar>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.logoLg}>
                        React Js
                    </Typography>
                    <Typography variant="h6" className={classes.logoSm}>
                        React
                    </Typography>
                    <div className={classes.search}>
                        <Search />
                        <InputBase placeholder='search...' className={classes.input} />
                        <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
                    </div>
                    <div className={classes.icons}>
                        <Search className={classes.searchButton} onClick={()=>setOpen(true)} />
                        <Badge badgeContent={4} color="secondary" className={classes.badge}>
                            <Mail />
                        </Badge>
                        <Badge badgeContent={2} color="secondary" className={classes.badge}>
                            <NotificationsIcon />
                        </Badge>
                        <Avatar alt="Remy Sharp" src="https://image.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg" />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;