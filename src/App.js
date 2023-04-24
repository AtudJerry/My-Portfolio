
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Home from './Components/Home';
import Contact from "./Components/Contact"
import About from './Components/About';
import Resume from './Components/Resume';
import Skills from './Components/Skills';
import Body from './body/Body';
import Sidebar from './Sidebar';
import Topbar from './topbar/Topbar';

import { Palette } from '@mui/material';
import { useState } from 'react';
import useTheme from '@mui/material';
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";


function App() {

  const [mode,setMode] = useState('true')
  const theme = createTheme({
    Palette : {
      mode : mode? 'dark' : 'light'
    }
  })
  
  return(
    <div>
    <ThemeProvider theme = {theme}>
    
  
    
    <div className="app">
    <Router>
      <Sidebar/>

      
  
      
    
    
     
    <main className="content">
    
   
   <Topbar/>
      <Body change = {() => setMode(!mode)}/>
      

     
              <index/>
      <Switch>
      
      
      <Route path ="/Components/Home"> <Home/> </Route>
      <Route path= "/Components/Contact"> <Contact/></Route>
      <Route path= "/Components/About"> <About/></Route>
      <Route path= "/Components/Resume"> <Resume/></Route>
      <Route path= "/Components/Skills"> <Skills/></Route>
      
      </Switch>
    
    </main>
    </Router>
  
 
  </div>
 
  </ThemeProvider>
  </div> 
  
  )
}

export default App;



