import React from 'react';
import './App.css';

import Dog from './Dog'
import DogDetail from './DogDetail'

import{
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
}from 'react-router-dom';


const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Dog}/>
        <Route path="/:name" componet={DogDetail}/>
      </Switch>      
    
    </div>
   
  </Router>

);


export default App;
