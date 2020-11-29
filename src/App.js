import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RestoPage from './Components/RestoPage';
import VisitPage from './Components/VisitsPage';
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
        Switch >
        <
        Route path = "/"
        exact component = { RestoPage }
        /> <
        Route path = "/visits"
        exact component = { VisitPage }
        /> <
        /Switch>  <
        /div>  <
        /Router>
    );
}

export default App;