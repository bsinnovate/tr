
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
  // Link
} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Admin from './components/Admin';
import Instructor from './components/Instructor';
import Student from './components/Student';





function App() {
  return (
    <>
    <Navbar></Navbar>
    
    <Footer></Footer>
    <Router>
  
    <Routes>
          <Route exact path="/admin">
            <Admin/>
          </Route>
          <Route exact path="/student">
            <Student />
          </Route>
          <Route exact path="/instructor">
            <Instructor />
          </Route>
       
        
        </Routes>
        </Router>
    


  

    </>
  );
}

export default App;
