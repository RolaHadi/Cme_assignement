import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { ThemeProvider } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

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

    details: {
      display: 'flex',
      flexDirection: 'column',
    },

    cover: {
      width: '50vh',
      height:'70vh',

    },

    RestoContainer:{
      paddingTop:"20px",
      paddingLeft:"100px",
      paddingRight:"100px",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexFlow:"row wrap"    
    },
    
  }));
  
  const RestoInfo =({ name, type, avCost, address, phone, imageUrl, close})=> {
    const classes = useStyles();
  
    return (
        <ThemeProvider theme={theme}>
      <Card className={classes.RestoContainer} onClick={close}>
        <CardMedia
          className={classes.cover}
          image={imageUrl}
          title={name}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name:{name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell> Type:{type}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Cost for two : {avCost}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Address: {address}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone: {phone}</TableCell>
            </TableRow>
          </TableHead>
        </Table>
          </CardContent>
        </div>
      </Card>
      </ThemeProvider>
    );
  }

export default RestoInfo;