import React, { Component } from 'react';

class Dog extends Component {

    render(){
        return (
            <div>
                {this.props.breed}
            </div>
        );
    }

}

// const Dog = ({ message }) => (
//     <div>
//         <h3>message.dog</h3>
//     </div>
// );

export default Dog;