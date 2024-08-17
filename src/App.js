import './App.css';
import About from './componants/About';
import Navbar from './componants/Navbar';
import TextForm from './componants/TextForm';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App(){
  return (
<>
<Navbar title="Textutils" about="About" contact="Contact"/>
  <Router>
<div className="container">
<Routes>
  <Route exact path='/' Component={TextForm}>
{/* <TextForm title="Enter Text To Analyze." /> */}
  </Route>
  <Route exact path='/about' Component={About}>
{/* <About/> */}
  </Route>
</Routes>
</div>
  </Router>
</>
  );
}
export default App;