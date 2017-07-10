import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar';
import searchSpotify from './utils/searchSpotify';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'Search Song',
      song: '',

    };
  }

  fetchSongs = () => {
    searchSpotify(this.state.song)
      .then((tracks) => console.log('tracks ', tracks));
  }

  render() {
    const { initialMessage, song } = this.state;
    console.log('song: ', song);
    return (
      <div>
        <label>{initialMessage}</label>
        <SearchBar updateText={(song) => this.setState({ song })} fetchSongs={this.fetchSongs} />
      </div>
    );
  }
}
