  import React, { useEffect, useState } from 'react';
  import Resto from './Resto';
  import { loadResto } from '../Actions/action';
  import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
  import { ThemeProvider } from '@material-ui/styles';
  import { Box } from "@material-ui/core";
  import { useDispatch, useSelector } from "react-redux";

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

  const useStyles = makeStyles({
      root: {
          minWidth: 275,
          alignItems: "center",
          marginRight: "auto",
          marginLeft: "auto",
      }


  });



  const ListResto = () => {
      const Restos = useSelector(state => state.Restaurants.Restos);
      const classes = useStyles();
      const dispatch = useDispatch();
      useEffect(() => {
          dispatch(loadResto());
      }, [])



      return (

          <
          ThemeProvider theme = { theme } >
          <
          Box className = { classes.root } > {
              Restos.map(resto => ( <
                  Box p = { 1 }
                  m = { 1 }
                  key = { resto.id } >
                  <
                  Resto key = { resto.id }
                  resto = { resto }
                  />  <
                  /Box >
              ))
          } <
          /Box> <
          /ThemeProvider >

      )

  }

  export default ListResto;