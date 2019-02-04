import React, { Component } from 'react';
import axios from 'axios';

class DogList extends Component {

    state = {
        image_url: "",
    }



    fetch_imgs(breed_name){
        const SERVER_PATH = 'https://dog.ceo/api/breed/'
        const RANDOM_END = '/images/random'

        axios.get(`${SERVER_PATH}${breed_name}${RANDOM_END}`)
            .then(res =>{
    
                this.setState({
                    image_url: res.data.message
                })
            })
        
    }


    print_state(state_obj){
        console.log(state_obj)
    }

    componentDidMount(){

        this.fetch_imgs(this.props.breed)
     
    }

    render(){

        return (
            <div>
                <h1>
                    <img src={this.state.image_url} alt={this.props.breed}/>
                </h1>
                
            </div>
        );
    }

}


export default DogList;