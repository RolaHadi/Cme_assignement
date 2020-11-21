import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fafafa',
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

const useStyles = makeStyles((theme) => ({

    navStyle: {
        position: "static"
    }
}));

const Nav = () => {
    const classes = useStyles();
    return ( <
        div >
        <
        ThemeProvider theme = { theme } >
        <
        AppBar className = "classes.navStyle"
        color = "white" >
        <
        Toolbar variant = "dense" > < /Toolbar>  <
        /AppBar>  <
        / ThemeProvider> <
        /div>
    );
}

export default Nav;