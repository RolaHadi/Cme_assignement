import React from 'react';
import {Container} from '@material-ui/core';
import Nav from './Nav';
import SearchBar from './SearchBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Visits from './Visits';

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

function VisitPage() {

    const classes = useStyles();
    return ( 
              
        <Grid container spacing = { 6 }>
        <Grid container item xs = { 12 }>
            <Nav/>
        </Grid>  
        <Grid container item xs = { 12 }>
            <SearchBar />
        </Grid>  
        <Grid container item xs = { 12 }
                className = {classes.RestoContainer } >
            <Visits />
        </Grid> 
        </Grid >

    );
}

export default VisitPage;