import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'


class DogList extends Component {

    state = {
        image_url: [],
    }



    fetch_imgs(breed_name){


        const SERVER_PATH = 'https://dog.ceo/api/breed/'
        const RANDOM_END = '/images/random/'
        const IMGS_NUMBER = '10'

        axios.get(`${SERVER_PATH}${breed_name}${RANDOM_END}${IMGS_NUMBER}`)
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
        
        this.fetch_imgs(this.props.match.params.name)
     
    }

    render(){

        return (
            <DogDetailGrid>
                {this.state.image_url.map(
                    (dog, index) => <img src={dog} key={index} alt={index}/>
                )}
                
            </DogDetailGrid>
        );
    }

}

export default DogList;

const DogDetailGrid = styled.div`

    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: 1 rem;
`