import React, { Component } from 'react';

const SERVER_PATH = 'https://dog.ceo/api/breed/'
const RANDOM_END = '/images/random'


const Dog = ({ dog }) => (
    <div>
        <img src={`${SERVER_PATH}${dog}${RANDOM_END}` />
    </div>

);


// class Dog extends Component {

//     render(){
//         return (
//             <div>
//                 {this.props.breed}
//             </div>
//         );
//     }

// }


export default Dog;