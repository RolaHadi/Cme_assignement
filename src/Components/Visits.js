import React, { useEffect, useState } from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { loadVisits } from '../Actions/action';
import { useDispatch, useSelector } from "react-redux";
import combineReducer from '../Reducers/combineReducer';
import { DataGrid } from '@material-ui/data-grid';
import { ThemeProvider } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#03a9f4',
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
        display: 'flex',
        alignItems: "center",
        marginRight: "auto",
        marginLeft: "auto",
    },

    details: {
        display: 'flex',
        flexDirection: 'column',
    },

    content: {
        flex: '1 0 auto',
    },

    cover: {
        width: '50vh',
        height: '70vh',
    },

}));

const columns = [
    { field: 'restaurant', headerName: 'Restaurant', width: 130 }, { field: 'visitDate', headerName:"Date of Visit", type: 'date',width: 300  }
];

const Visits = () => {
    const classes = useStyles();
    const VisitsData = useSelector(state => state.Visits.Visits);
    const dispatch = useDispatch();

    useEffect(() => {
        getVisits();
    }, [])

    const getVisits=() => {
        dispatch(loadVisits());
    }

    console.log(VisitsData);

    let visitslist = [];
    visitslist = VisitsData.map(visit => ({
        id:visit.id,
        restaurant: visit.restaurant.name,
        visitDate: visit.date
    }))

    return (
        <ThemeProvider theme = { theme } >
  <div style={{ height: 600, width: '100%' }}>
        <DataGrid rows = { visitslist }
        columns = { columns }/> 
        </div>
        </ThemeProvider >
    );

}

export default Visits;