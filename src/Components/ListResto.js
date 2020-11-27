  import React, { useEffect, useState } from 'react';
  import Resto from './Resto';
  import { makeStyles } from "@material-ui/core/styles";
  import { Link } from "react-router-dom";
  import { loadResto } from '../Actions/action';
  import { Container } from '@material-ui/core';


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
      },


      RestoContainer: {
          backgroundColor: '#bbdefb',
          display: 'block',
          width: '45vh',
          transitionDuration: '0.3s',
          height: '53vh'
      },

      AddResto: {
          justifyContent: "space-between",
          transform: 'scale(0.8)',
          padding: theme.spacing(0, 2),
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
      },


  });



  const ListResto = () => {
      const Restos = useSelector(state => state.Restaurants.Restos);
      const classes = useStyles();
      const dispatch = useDispatch();
      useEffect(() => {
          getRestos();
      }, [])

      const getRestos = () => {
          dispatch(loadResto())
      }

      return ( <
          ThemeProvider theme = { theme } >
          <
          div className = { classes.root } > {
              Restos.map(resto => ( <
                  Container className = { classes.RestoContainer }
                  key = { resto.id } >
                  <
                  Resto key = { resto.id }
                  id = { resto.id }
                  name = { resto.name }
                  imageUrl = { resto.imageUrl }
                  />  <
                  /Container>
              ))
          }


          <
          /div> <
          /ThemeProvider>





      )


  }