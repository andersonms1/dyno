import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Item } from './Dog';

class DogList extends Component {
    state = {
      image: {
        name: '',
        url: '',
      },
    }


    fetch_imgs(breed_name) {
      const SERVER_PATH = 'https://dog.ceo/api/breed/';
      const RANDOM_END = '/images/random';

      axios.get(`${SERVER_PATH}${breed_name}${RANDOM_END}`)
        .then((res) => {
          this.setState({
            image: {
              name: breed_name,
              url: res.data.message,
            },
          });
        });
    }


    print_state(state_obj) {
      console.log(state_obj);
    }

    componentDidMount() {
      this.fetch_imgs(this.props.breed);
    }

    render() {
      return (
          <div>
              <h1>
                  <Link to ={`/${this.state.image.name}`}>
                      <Item
                          src={this.state.image.url}
                          alt={this.props.breed}
                        />
                    </Link>
                </h1>

            </div>
      );
    }
}


export default DogList;
