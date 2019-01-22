import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dog from './Dog'


class App extends Component {

  state = {
    dogs: [],
  }

  async componentDidMount(){
    
    

    try{
      const res = await fetch('https://dog.ceo/api/breeds/list/all')
      const dogs = await res.json();
      
      
      this.setState({
        dogs: dogs,
      });

    }catch(e){
      console.log(e);
    }
  }

  

  render() {

    console.log(this.state.dogs);

    return (
      
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Dog breed={'Alemao'}/>

        {/* {this.state.dogs.map((dog, index) => <Dog  key={index} breed={message.dog}/>)} */}

      </div>

      

    );
  }
}

export default App;
