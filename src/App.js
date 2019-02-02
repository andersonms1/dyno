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
      const dogs_api = await res.json();  
      
      this.setState({
        dogs: dogs_api.message,
      });

    }catch(e){
      console.log(e);
    }
  }

  

  render() {

    console.log(this.state.dogs);

    return (
      
      <div className="App">
       

        {Object.keys(this.state.dogs).map((dog, index) => <Dog  key={index} breed={dog}/>)}

       


      </div>

      

      

    );
  }
}

export default App;
