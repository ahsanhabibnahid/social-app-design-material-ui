import React, { useState } from 'react';
import { AppBar, Avatar, Badge, InputBase, Toolbar, Typography } from '@mui/material';
import { Cancel, Mail, Search } from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {useStyles} from './CustomCss'


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