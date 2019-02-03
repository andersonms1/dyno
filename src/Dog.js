import React, { Component } from 'react';



// const Dog = ({ dog }) => (
//     <div>
//         <img src={`${SERVER_PATH}${dog}${RANDOM_END}` />
//     </div>

// );



const Dog = (props) =>(
    <div>
        {props.breed}
        {/* <img src={`${props.img}`} alt={props.img}/> */}
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