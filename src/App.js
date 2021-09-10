import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router, Link, Route, Switch
  
} from "react-router-dom";
import Home from './components/home';
import Servicios from './components/servicios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';




const App = () =>{
return(
  
    <Router>
      <div>
    <div className="separador"> 
      <nav className="navbar  bg-dark">
        <input type="checkbox" id="check"/>
        <label for="check" className="fabars"><FontAwesomeIcon icon={faBars} /></label>
        
       

    <ul className="nav-menu">
      <li className="nav-item ">
        <Link to ="/" className="nav-link " >Inicio</Link>
      </li>
      <li className="nav-item">
        <Link to ="/servicios" className="nav-link ">Servicios</Link>
      </li>
      <li className="nav-item">
        <Link to =""className="nav-link ">Productos</Link>
      </li>
      <li className="nav-item">
        <Link to =""className="nav-link ">Sobre Nosotros</Link>
      </li>
      <li className="nav-item">
        <Link to =""className="nav-link ">Contactos</Link>
      </li>
    </ul> 
        </nav>

<Switch>
          
          <Route path="/servicios" exact>
            <Servicios />
          </Route>
       <Route path="/" exact>
            <Home />
          </Route>
        </Switch>





    </div>
    </div>
    </Router>
)

}

export default App;