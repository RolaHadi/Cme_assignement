import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image';
import { lightBlue } from '@material-ui/core/colors';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#03a9f4',
            main: '#03a9f4',
            dark: '#03a9f4',
            contrastText: '#fafafa',
        },
        secondary: {
            light: '#ff7043',
            main: '#ff7043',
            dark: '#ff7043',
            contrastText: '#fafafa',
        },
    },
});
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },


    RestoContainer: {
        backgroundColor: '#bbdefb',
        display: 'block',
        width: '45vw',
        transitionDuration: '0.3s',
        height: '50vw'
    },

    bullet: {
        display: 'inline-Sblock',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    paper: {
        flex: 1,
        padding: '2px',
        backgroundColor: '#9e9e9e',
        display: 'block',
        transitionDuration: '0.3s',
        color: 'grey',

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const Resto = () => {
    const classes = useStyles();
    const iconBtnStyles = useSizedIconButtonStyles({ padding: 6 });

    return (

        <
        div >
        <
        Container >
        <
        Card className = { classes.RestoContainer } >

        <
        CardContent >
        <
        Image src = "/photos/images.jpg" / >
        <
        Paper className = { classes.paper } > xs = 6 < /Paper> < /
        CardContent >

        <
        CardActions >
        <
        /CardActions> < /
        Card > <
        /Container> < /
        div >
    );
}

export default Resto;