import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image';
import { lightBlue } from '@material-ui/core/colors';
import { useSizedIconButtonStyles } from '@mui-treasury/styles/iconButton/sized';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';

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
      alignItems:"center",
      marginRight:"auto",
      marginLeft:"auto",
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
      height:'70vh',

    },
    
  }));
  
  const RestoInfo =()=> {
    const classes = useStyles();
  
    return (
        <ThemeProvider theme={theme}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="/photos/images.jpg"
          title="Bebabel"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
          <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Type</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Average Cost for two</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>B11 Center, Block B, 
                  Minet El Hosn, Beirut District</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Phone</TableCell>
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