import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dog from './Dog'

class App extends Component {

  state = {
    dogs: [],
    dogs_imgs: [],
  }

  async fetch_imgs(breed_name){

    const SERVER_PATH = 'https://dog.ceo/api/breed/'
    const RANDOM_END = '/images/random'

    try{
      const now_breed = await fetch(`${SERVER_PATH}${breed_name}${RANDOM_END}`);
      const now_breed_api = await now_breed.json();

      this.setState({
        dogs_imgs: now_breed_api,
      })
    }catch(e){
      console.log(e);
    }
  }


  async componentDidMount(){
    
    try{
      const res = await fetch('https://dog.ceo/api/breeds/list/all')
      const dogs_api = await res.json();    
      
      Object.keys(dogs_api.message).map(img => this.fetch_imgs(img))
            

      this.setState({
        dogs: dogs_api.message,
      });

    }catch(e){
      console.log(e);
    }
  }
  

  render() {

    // console.log(this.state.dogs);
    console.log(this.state.dogs_imgs)
    return (
      
      <div className="App">
        

        {Object.keys(this.state.dogs).map((dog, index) => <Dog key={index} breed={dog} />)}
        {/* {Object.keys(this.state.dogs_imgs).map((dogs_img, index) => <Dog key={index} breed={dogs_img} />)} */}


        {/* {this.state.dogs_imgs.map((dogs_img, index) => <Dog img={dogs_img} key={index} />} */}
       


      </div>

      

      

    );
  }
}

export default App;
