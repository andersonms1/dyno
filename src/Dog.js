import React, { Component } from 'react';
import axios from 'axios';

import styled from 'styled-components';
import DogList from './DogList';


class Dog extends Component {
    state = {
      dogs: [],
    }


    componentDidMount() {
      axios.get('https://dog.ceo/api/breeds/list/all')
        .then((res) => {
          this.setState({
            dogs: res.data.message,
          });
        });
    }


    render() {
      return (


        <MyGrid grids={3}>
          {Object.keys(this.state.dogs).map((dog, index) => <DogList key={index} breed={dog} />)}
        </MyGrid>


      );
    }
}

export default Dog;

export const MyGrid = styled.div`
    display: grid;
    padding: 1rem;
    grid-template-columns: repeat(${props => props.grids}, 1fr);
    grid-row-gap: 1 rem;
    

`;
export const Item = styled.img`
    box-shadow: 0 0 35px black;
    width: 220px;
    height: auto;
    background: white;
    

`;
