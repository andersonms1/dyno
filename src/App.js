import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import Dog from './Dog';
import DogDetail from './DogDetail';


const App = () => (
  <Router>
    <div className="App">
      <header>

        <div className="App-header">
          <Link to="/">
            <h1>
                Bem-vindo ao DYNO
            </h1>
          </Link>

          <p>
Aplicação desenvolvida para fins didáticos, e o objeto de estudo é o React.
            Os principais conceitos abordados:

          </p>

          <ul>
            <li>Components</li>
            <li>Props</li>
            <li>State</li>
            <li>Lifecycle Methods</li>
            <li>Requisições REST com axios</li>
            <li>Navegação com REACT-ROUTER-DOM</li>
          </ul>


        </div>
      </header>


      <Switch>

        <Route exact path="/" component={Dog} />
        <Route path="/:name" component={DogDetail} />

      </Switch>

    </div>

  </Router>

);


export default App;
