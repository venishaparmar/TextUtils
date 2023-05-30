import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { useState } from 'react';
import {
  //BrowserRouter : This component is used to create a browser-based router. 
  //It uses the HTML5 history API to keep the UI in sync with the URL.
  BrowserRouter as Router,
  //Routes: This component is used to define a set of routes. Each route is defined by a path and an element. 
  //The path is the URL that will match the route, and the element is the component that will be rendered when the route matches.
  Routes,
  //Route: This component is used to define a single route. It takes a path and an element as props.
  Route,
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState('light'); // whether the dark mode is enable or not 
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },1500);

  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been enabled", "success")
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }

  } 
  return (
  <>  
    <Router>
      <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/> 
      <Alert alert={alert}/>
        <Routes>
            <Route exact path='/' element={<div className="container my-1 "><TextForm showAlert={showAlert} heading="Enter the Text" mode={mode}/></div>}></Route>
            <Route exact path='about/*' element={<div className="container my-1 "><About/></div>}></Route>
        </Routes>
    </Router>
   
  </>
  );
}
export default App;
