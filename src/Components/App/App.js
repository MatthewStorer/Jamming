import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import PlayList from '../PlayList/PlayList.js';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Track from '../Track/Track.js';
import TrackList from '../TrackList/TrackList.js';
import Spotify from '../../Util/Spotify.js';


class App extends Component {


  constructor(props)
  {
    super(props);


    this.state = {

      searchResults: [
        { name: 'name',
          artist: 'artist',
          album: 'album'
        }],

    playlistName: "My PlayList 1",
    playlistTracks:  [
      {
      name: 'name',
      artist: 'artist',
      album: 'album'
      }
  ]


};

//this.searchResults = this.searchResults.bind(this);
this.addTrack = this.addTrack.bind(this);
this.removeTrack = this.removeTrack.bind(this);
this.updatePlayList = this.updatePlayList.bind(this);
this.savePlayList = this.savePlayList.bind(this);
this.search = this.search.bind(this);
}

  addTrack(track)
  {
    //let track =
    for(let i = 0; i < this.playListTracks.length; i++)
    {
      if(this.playListTracks.name !== track.name)
      {
        this.playListTracks.push(track);
        this.setState({playListTracks: track});
      }

    }


  }

  removeTrack(track)
  {
    for(let i = 0; i< this.playListTracks.length; i++)
    {
    if(this.playListTracks.name === track.name)
    {
      this.playListTracks.splice(track);
      this.setState({playListTracks: track});
    }
    }
  }

  updatePlayList(name)
  {
    this.setState(prevState => {
      const playListTracks = prevState.playListTracks;
      playListTracks.name = name

      return {playListTracks}

    })

  }

  savePlayList(name)
  {
    Spotify.savePlaylist();
    this.state.playListName = 'New PlayList';
    this.searchResults = [];



  }

  search(term)
  {
    Spotify.search(term).then(track => {
      this.setState({track: track});

  })

  }

render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search} />
          <div className="App-playList">
        <SearchResults searchResult={this.state.searchResults} onAdd={this.addTrack} onRemove={this.removeTrack} />
      <PlayList playListName={this.state.playListName} playListTracks={this.state.playListTracks} onNameChange={this.updatePlayList} onSave={this.savePlayList} />
    </div>
  </div>
</div>
    );
  }

}

export default App;
