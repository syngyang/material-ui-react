import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import { green, orange} from '@material-ui/core/colors';
// import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    // dark grey #333, lighter grey #999
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '15px 30px'
  }
})

const theme = createMuiTheme({
  // typography: {
  //   h2: {
  //     fontSize: '36px',
  //   }
  // }
  
  
  // palette: {
  //   primary: {
  //     main: green[400],
  //   },
  //   secondary: {
  //     main: orange[400],
  //   }
  // }
})

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}> Test Styled Button</Button>
}

function CheckboxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel 
      control = { 
        <Checkbox 
          checked= {checked}
          onChange= {(e)=> setChecked(e.target.checked)}
          // color='primary'  
          // disabled  
        />
      }
      label =  "Testing Checkbox"
    />
   )
}

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Container maxWidth= "sm">
        <div className="App">
          <header className="App-header">

            <AppBar color="secondary">
              <Toolbar>
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                  MUI Theming
                </Typography>
                <Button>
                  Login
                </Button>
              </Toolbar>

            </AppBar>
            <Typography variant= "h2" componant= "div">
              Welcome to typography
            </Typography>
            <Typography variant= "subtitle1">
              Welcome to typography
            </Typography>
            <Typography variant= "body1">
              Welcome to typography
            </Typography>
            <ButtonStyled />
            <TextField variant="outlined" 
                      color="secondary"
                      type= "email"
                      placeholder= "test@test.com"
                      //  type= "date"
                      //  type= "time"
                      //  label= "The time" 
                      />
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} sm={6}>
                <Paper style= {{height:75, width:'100%' }}/>
              </Grid>
              <Grid item>
                <Paper style= {{height:75, width:50 }}/>
              </Grid>
              <Grid item>
                <Paper style= {{height:75, width:50 }}/>
              </Grid>

            </Grid>

            <CheckboxExample />
            <ButtonGroup size="large" variant="contained">
                <Button 
                  startIcon={<DeleteIcon />}
                  color="primary">
                    Save
                </Button>
                <Button 
                  startIcon={<SaveIcon />}
                  // endIcon={<SaveIcon />}
                  // disabled
                  // style= {{ fontSize: 50  }}
                  href="#"
                  onClick={()=>alert('Hello!!')}
                  // size="large"
                  // variant="contained" 
                  color="secondary">
                    Discard
                </Button>

            </ButtonGroup>
            


            <img src={logo} className="App-logo" alt="logo" />
          
          
          </header>
        </div>
    </Container>
    </ThemeProvider>
  );
}

export default App;
