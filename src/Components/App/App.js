import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PlayList from '../PlayList/PlayList';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Track from '../Track/Track';
import TrackList from '../TrackList/TrackList';
import Spotify from '../../Util/Spotify';


class App extends Component {


  constructor(props)
  {
    super(props);
    this.state.searchResults = {SearchResults: [{
      name: 'name',
      artist: 'artist',
      album: 'album'

  }],
    playListName: 'My Playlist 1',
    PlayListTracks: [{
    name: 'name',
    artist: 'artist',
    album: 'album'
  }]
}

  this.state.searchResults = this.state.searchResults.bind(this)
  this.state.addTrack = this.state.addTrack.bind(this)
  this.state.removeTrack = this.state.removeTrack.bind(this)
  this.state.updatePlayList = this.state.updatePlayList.bind(this)
  this.state.savePlaList = this.state.savePlaList.bind(this)
  this.state.search = this.state.search.bind(this)

  }

  addTrack(track)
  {
    for(let i = 0; i < this.playListTracks.length; i++)
    {
      if(this.playListTracks.name !== track)
      {
        this.playListTracks.push(track);
        this.setState({playListTracks: track});
      }
    }
  }


  removeTrack(track)
  {
    for(let i = 0; i < this.playListTracks.length; i++)
    {
      if(this.playListTracks.name === track)
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

savePlaList(name)
{
  Spotify.savePlayList();
  this.state.PlayListName = 'New Playlist';
  this.searchResults = [];

}

search(search)
{
  Spotify.search(search).then(track => {
    this.setState({track: track});
  })
}

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
          <SearchResults SearchResult={this.state.searchResult} onAdd={this.addTrack} onRemove={this.removeTrack}/>
          <PlayList playListName={this.state.playListName} PlayListTracks={this.state.playListTracks} onNameChange={this.updatePlayList} onSave={this.savePlaList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
