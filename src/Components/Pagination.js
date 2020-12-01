import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { loadResto } from "../Actions/action"

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));



export default function BasicPagination() {
    const classes = useStyles();
    const dispatch = useDispatch()


    const handleChange = (e, value) => {
        const data = {
            page: value
        }
        console.log(value)
        dispatch(loadResto(data))
    }

    return ( <
        div className = { classes.root } >
        <
        Pagination count = { 10 }
        onChange = { handleChange }
        color = "primary" / >
        <
        /div>
    );
}