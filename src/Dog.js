import React, { Component } from 'react';
import axios from 'axios';

import DogList from './DogList'


class Dog extends Component {

    state = {
        dogs: [],
    }



    print_state(state_obj){
        console.log(state_obj)
    }

    componentDidMount(){

        axios.get('https://dog.ceo/api/breeds/list/all')
            .then(res =>{
                this.setState({
                dogs: res.data.message,
                })
            })
     
    }

    render(){

        // console.log(this.state.dogs)

        return (
            <div>
                <h1>
                    Hello, Friend
                </h1>
                {console.log(this.state.dogs)}
                {Object.keys(this.state.dogs).map((dog, index) => 
                <DogList key={index} breed={dog}/>)}
                {/* <img src={this.state.image_url} alt={this.props.breed}/> */}
            </div>
        );
    }

}


export default Dog;