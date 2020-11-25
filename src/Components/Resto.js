import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
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
        alignItems:"center",
      marginRight:"auto",
      marginLeft:"auto",
    },


    RestoContainer:{
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

const Resto = () => {
    const classes = useStyles();

    return ( 
        <ThemeProvider theme={theme}>
        <div className={classes.root}>
            <Container >
    <Card className={classes.RestoContainer} >

      <CardContent>
          <Image src="/photos/bebabel.jpg" />
          <div className={classes.AddResto}>
          <Button variant="contained" color="secondary">
          Bebabel
        </Button>
        <IconButton color="secondary" >
          <AddIcon />
        </IconButton>
        </div>
      </CardContent>
      <CardActions>
      </CardActions>
    </Card>
    </Container>
    </div>
    </ThemeProvider>
    );
}

export default Resto;