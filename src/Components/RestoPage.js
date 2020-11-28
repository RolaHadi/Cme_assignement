import React from 'react';
import { Container } from '@material-ui/core';
import Nav from './Nav';
import SearchBar from './SearchBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Resto from './Resto';
import ListResto from './ListResto';

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

function RestoPage() {

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
        /Grid> < /
        Grid >

    );
}

export default RestoPage;