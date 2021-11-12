
import './App.css';
import CountryContainer from "./Components/CountryContainer";
import {BrowserRouter, Switch,Route,Link} from "react-router-dom";
import About from './Components/About';

function App() {
  return (
    <BrowserRouter>
        <h1 id="tituloPrincipal">Informacion basica mundial</h1>
        <button id="btn"><Link to="/acerca" id="btn">Perritos</Link></button>
        <button id="btn"><Link to="/" id="btn">Pagina principal</Link></button> 
        <button id="btn"><Link to="/paises" id="btn">Paises</Link></button> 
        <hr/>
      <Switch>
        <Route path="/paises" component={CountryContainer}/>
        <Route path="/acerca" component={About}/>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
