import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../Actions/action"
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fafafa',
            main: '#03a9f4',
            dark: '#03a9f4',
            contrastText: '#fafafa',
        },
        secondary: {
            light: '#ff5722',
            main: '#ff5722',
            dark: '#ff5722',
            contrastText: '#fafafa',
        },
    },
});

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function BasicPagination() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const nbpage = useSelector(state => state.Restaurants.nbPage);
    const page = useSelector(state => state.Restaurants.page)
    console.log("in pagination " + nbpage);

    const handleChange = (e, value) => {
        dispatch(setPage(value))
    };


    return ( <
        ThemeProvider theme = { theme } >
        <
        div className = { classes.root } >
        <
        Pagination count = { nbpage }
        page = { page }
        onChange = { handleChange }
        color = "primary" / >
        <
        /div> <
        /ThemeProvider>
    );
}