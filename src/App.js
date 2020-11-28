import React from 'react';
import { Container } from '@material-ui/core';
import Nav from './Components/Nav';
import SearchBar from './Components/SearchBar';
import Grid from '@material-ui/core/Grid';
import RestoInfo from './Components/RestoInfo';
import { makeStyles } from '@material-ui/core/styles';
import Resto from './Components/Resto';
import { loadResto } from './Actions/action'
import RestoPage from './Components/RestoPage';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
        Router >
        <
        div className = "App" >
        <
        Nav / >
        <
        Switch >
        <
        Route path = "/"
        exact component = { RestoPage }
        /> <
        /Switch>  <
        /div>  <
        /Router>
    );
}

export default App;