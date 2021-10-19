import { createTheme } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles';
import { height } from "@mui/system";

const theme = createTheme({})

export const useStyles = makeStyles({
    avatarMargin: {
        [theme.breakpoints.down('md')] :{
            marginLeft: '20px !important'
        }
    },
    link:{
        marginRight:'10px !important',
        fontSize: '16px !important',
        color: '#555555 !important',
        textDecoration: 'none !important'
    },
    avatarTitle : {
        fontSize: '16px !important',
        fontWeight: "500 !important",
        color: '#555555 !important'
    },
    form : {
        padding: theme.spacing(2)
    },
    item : {
        marginBottom: theme.spacing(2)
    },
    modalContainer:{
        width: '500px !important',
        height: "550px !important",
        backgroundColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        margin: 'auto',
        [theme.breakpoints.down('sm')]:{
            height: '100% !important',
            width: '100% !important',
        }
    },
    fab : {
        position: 'fixed !important',
        bottom: '15px !important',
        right: '20px !important'
    },

    postCard: {
        marginBottom: theme.spacing(5)
    },
    media: {
        height: 250,
        [theme.breakpoints.down('sm')] : {
            height:150
        }
    },

    leftIcon : {
        marginRight:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            fontSize: '18px !important'
        }
    },
    
    right: {
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    container : {
        paddingTop: theme.spacing(11)
    },
    containerLeft : {
        backgroundColor: theme.palette.primary.dark,
        height: '100vh',
        color: 'white',
        position: 'sticky',
        top : 0,
        [theme.breakpoints.up('sm')]:{
            backgroundColor: 'white',
            color: '#555555',
            border: '1px solid #ece'
        }
    },
    text : {
        fontWeight: '500 !important',
        [theme.breakpoints.down('sm')]:{
            display: 'none'
        }
    },
    item : {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")] : {
            marginBottom: theme.spacing(3),
            cursor: 'pointer'
        }
    },
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
        [theme.breakpoints.up('sm')] : {
            display: 'none !important'
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
})