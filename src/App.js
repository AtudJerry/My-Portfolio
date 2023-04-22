
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
import { Box } from '@mui/material';


function App() {
  return( <div>
    
  
    
    <div className="app">
      <Sidebar/>

      
  
      
    
    
     
    <main className="content">
    <Router>
   
   <Topbar/>
      <Body/>
      

     
              <index/>
      <Switch>
      <Route exact path ="/Components/Home"> <Home/> </Route>
      <Route path= "/Components/Contact"> <Contact/></Route>
      <Route path= "/Components/About"> <About/></Route>
      <Route path= "/Components/Resume"> <Resume/></Route>
      <Route path= "/Components/Skills"> <Skills/></Route>
      
      </Switch>
      </Router>
    </main>
  
 
  </div>
  </div>
  
  )
}

export default App;



