import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Item, MyGrid } from './Dog';

class DogList extends Component {
  state = {
    imageUrl: [],
  }

  static propTypes ={

    // eslint-disable-next-line react/forbid-prop-types
    match: PropTypes.object,


  }

  static defaultProps ={
    match: {
      params: {
        name: 'notfound',
      },
    },

  }


  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.fetchImgs(this.props.match.params.name);
  }

  fetchImgs(breedName) {
    const SERVER_PATH = 'https://dog.ceo/api/breed/';
    const RANDOM_END = '/images/random/';
    const IMGS_NUMBER = '9';

    axios.get(`${SERVER_PATH}${breedName}${RANDOM_END}${IMGS_NUMBER}`)
      .then((res) => {
        this.setState({
          imageUrl: res.data.message,
        });
      });
  }


  render() {
    const { imageUrl } = this.state;

    return (
      <div className="App">
        <MyGrid grids={3}>
          {imageUrl.map(
            (dog, index) => (
              <Item
                src={dog}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                alt={index}
              />
            ),
          )}

        </MyGrid>
      </div>

    );
  }
}

export default DogList;
