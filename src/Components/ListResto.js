  import React, { useEffect, useState } from 'react';
  import Resto from './Resto';
  import { loadResto } from '../Actions/action';
  import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
  import { ThemeProvider } from '@material-ui/styles';
  import { Box, Dialog } from "@material-ui/core";
  import { useDispatch, useSelector } from "react-redux";
  import { Link } from "react-router-dom";
  import RestoInfo from "./RestoInfo";


//   component that dispatch the restos
  
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
      RestoContainer:{
        paddingTop:"20px",
        paddingLeft:"100px",
        paddingRight:"100px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexFlow:"row wrap"    
      },


  });


  const ListResto = () => {
      const restos = useSelector(state => state.Restaurants.restos);
      const page = useSelector(state => state.Restaurants.page);
      console.log(restos)
      const classes = useStyles();
      const dispatch = useDispatch();
      useEffect(() => {
          dispatch(loadResto(page));

      }, [page])

      const [openInfo, setOpenInfo] = useState(false);

      const handleOpenInfo = o => {
          setOpenInfo(o)
      };

      const handleCloseInfo = () => {
          setOpenInfo(false);
      };


      return (

          <ThemeProvider theme = { theme } >
          < Box className = { classes.RestoContainer } > 
          {restos.map(resto => (
               <Box p = { 1 }
                  m = { 1 }
                  key = { resto.id } >
                  <Link onClick = {
                      () => handleOpenInfo(resto.id)
                  }
                  to = "" >
                  <
                  Resto key = { resto.id }
                  resto = { resto }/> 
                   </Link >
                   <Dialog fullScreen open = { openInfo === resto.id }
                  className = { classes }
                  onClose = { handleCloseInfo }
                  key = { resto.id } >
                  <RestoInfo key = { resto.id }
                  name = { resto.name }
                  type = { resto.type }
                  avCost = { resto.avCost }
                  address = { resto.address }
                  phone = { resto.phone }
                  imageUrl = { resto.imageUrl }
                  close = { handleCloseInfo }/> 
                   </Dialog >
                  </Box>
              ))
          } 
          </Box>
           </ThemeProvider >

      )
  }

  export default ListResto;