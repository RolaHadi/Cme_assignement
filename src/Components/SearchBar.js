import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { fade, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import { blue,orange} from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
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
        flexGrow: 1,
        
    },

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },

    headers:{
      display:"flex",
      justifyContent: "space-between",
      alignItems: "center",
      alignContent:"center",
      flexDirection:"row",
      flex:1,
    },

    search: {
        position: 'relative',
        borderBottom: '1px solid black',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputRoot: {
      color: 'inherit',
    },

    navStyle: { 
      position: "static",
  },

    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },


}));

const SearchBar = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [open, setOpen] = React.useState(false);
    

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    return ( 

      <div className = { classes.root } >
        <ThemeProvider theme={theme}>
        <AppBar position = "static"
        color = "primary" >
        <Toolbar >
        <Box className={classes.headers} >
        <Box p={1} m={0.1}>
        <div className = { classes.search } >
        <div className = { classes.searchIcon } >
        <SearchIcon />
        </div> <
        InputBase placeholder = "Search…"
        classes = {
            {
                root: classes.inputRoot,
                input: classes.inputInput,
            }
        }
        inputProps = {
            { 'aria-label': 'search' } }
        /> 
        </div> 
        </Box> 
        <Box p={1} m={0.1} >
        <FormControl className = { classes.formControl } >
        <InputLabel id = "select-label-type"   > Types </InputLabel>
         <Select labelId = "select-type"
        id = "open-select"
        open = { open }
        onClose = { handleClose }
        onOpen = { handleOpen }
        value = { age }
        onChange = { handleChange } >
        <MenuItem value = "" >
        <em > None </em>
        </MenuItem> 
        <MenuItem value = { "lebanese" } > Lebanese </MenuItem>
        <MenuItem value = { "italian" } > Italian </MenuItem> 
        <MenuItem value = { "chinese" } > Chinese </MenuItem> 
        </Select>
         </FormControl> 
        </Box> 
        <Box p={1} m={0.1} >
        <Button variant="contained" color="secondary" disableElevation>
  Search
</Button>
         </Box> 
         </Box>
  </Toolbar> 
  </AppBar>
  </ThemeProvider>
  </div>
  

    );
};


export default SearchBar;