import React from 'react';
import { Container } from '@material-ui/core';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';
import Grid from '@material-ui/core/Grid';
import RestoInfo from './Components/RestoInfo';
import { makeStyles } from '@material-ui/core/styles';
import Resto from './Components/Resto';
import { loadResto } from './Actions/action'
import ListResto from './Components/ListResto';

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
    return ( <
        Grid container spacing = { 6 } >
        <
        Grid container item xs = { 12 } >
        <
        Nav / >
        <
        /Grid>    <
        Grid container item xs = { 12 } >
        <
        SearchBar / >
        <
        /Grid>  <
        Grid container item xs = { 12 }
        className = { classes.RestoContainer } >
        <
        ListResto / >
        <
        /Grid> <
        /Grid >
    );
}

export default App;