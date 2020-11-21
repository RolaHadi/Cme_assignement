import React from 'react';
import { Container } from '@material-ui/core';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';
import Grid from '@material-ui/core/Grid';
import RestoInfo from './Components/RestoInfo';
import { makeStyles } from '@material-ui/core/styles';
import Resto from './Components/Resto';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

    RestoContainer: {
        display: "flex",
        alignItems: "center",
        alignContent: "center",
        flex: 1,
    },
});

function App() {
    const classes = useStyles();
    console.log("hi")
    return ( <
        Grid container spacing = { 6 } >
        <
        Grid container item xs = { 12 } >
        <
        Nav / >
        <
        /Grid>   <
        Grid container item xs = { 12 } >
        <
        SearchBar / >
        <
        /Grid> <
        Container className = { classes.RestoContainer } >
        <
        Resto / >
        <
        /Container> <
        /Grid>
    );
}

export default App;