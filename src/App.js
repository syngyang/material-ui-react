import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
