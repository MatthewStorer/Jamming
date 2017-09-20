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
    this.state = {searchResults: [{
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

  //this.searchResults = this.searchResults.bind(this)
  this.addTrack = this.addTrack.bind(this)
  this.removeTrack = this.removeTrack.bind(this)
  this.updatePlayList = this.updatePlayList.bind(this)
  this.savePlaList = this.savePlaList.bind(this)
  this.search = this.search.bind(this)

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
  this.state.playListName = 'New Playlist';
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
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
          <SearchResults searchResult={this.state.searchResult} onAdd={this.addTrack} onRemove={this.removeTrack}/>
          <PlayList playListName={this.state.playListName} playListTracks={this.state.PlayListTracks} onNameChange={this.updatePlayList} onSave={this.savePlaList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
