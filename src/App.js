import React from 'react';
import './App.css';


import Dog from './Dog'
import Test from './Test'
import DogDetail from './DogDetail'
import logo from './header.jpg'

import{
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
}from 'react-router-dom';


const App = () => (
  <Router>
    <div className="App">
      <header >
        <Link to="/">
          <img src={logo} alt={""}/>
        </Link>
      </header>
      <Switch>
        
        <Route path="/aaa" component={Test}/>
        <Route exact path="/" component={Dog}/>
        <Route path="/:name" component={DogDetail}/>
        
      </Switch>      
    
    </div>
   
  </Router>

);


// const Test = () => (
//   <div>
//     {console.log("Anderson")}
//     <h1> Ola sou um teste </h1>
//   </div>
  
// )

export default App;
