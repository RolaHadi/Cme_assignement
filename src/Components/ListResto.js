  import React, { useEffect, useState } from 'react';
  import Resto from './Resto';
  import { loadResto } from '../Actions/action';
  import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
  import { ThemeProvider } from '@material-ui/styles';
  import { Box, Dialog } from "@material-ui/core";
  import { useDispatch, useSelector } from "react-redux";
  import { Link } from "react-router-dom";
  import RestoInfo from "./RestoInfo";
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
      const [displayInfo, setDisplayInfo] = useState(false)
      const dispatch = useDispatch();
      useEffect(() => {
          dispatch(loadResto());

      }, [])

      const [openInfo, setOpenInfo] = useState(false);

      const handleOpenInfo = o => {
          setOpenInfo(o)
      };

      const handleCloseInfo = () => {
          setOpenInfo(false);
      };




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
                  Link onClick = {
                      () => handleOpenInfo(resto.id) }
                  to = "" >
                  <
                  Resto key = { resto.id }
                  resto = { resto }
                  />  <
                  /Link> <
                  Dialog fullScreen open = { openInfo === resto.id }
                  onClose = { handleCloseInfo }
                  key = { resto.id } >
                  <
                  RestoInfo key = { resto.id }
                  name = { resto.name }
                  type = { resto.type }
                  avCost = { resto.avCost }
                  address = { resto.address }
                  phone = { resto.phone }
                  imageUrl = { resto.imageUrl }
                  close = { handleCloseInfo }
                  /> <
                  /Dialog> <
                  /Box >




              ))
          } <
          /Box> <
          /ThemeProvider >

      )

  }

  export default ListResto;