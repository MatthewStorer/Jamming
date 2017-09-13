import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
    for(let i = 0; i < playListTracks.length; i++)
    {
      if(playListTracks.name !== track)
      {
        playListTracks.push(track);
        this.setState({playListTracks: track});
      }
    }
  }


  removeTrack(track)
  {
    for(let i = 0; i < playListTracks.length; i++)
    {
      if(playListTracks.name === track)
      {
        playListTracks.splice(track);
        this.setState({playListTracks: track});
      }
    }
  }

updatePlayList(name)
{
  this.setState({playListTracks.name: name})
}

savePlaList(name)
{
  spotify.savePlayList();
  this.state.PlayListName = 'New Playlist';
  searchResults = [];

}

search(search)
{
  console.log(search)
}

  render() {
    return (
      <div>
        <h1>Ja<span class="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div class="App-playlist">
          <SearchResults SearchResult={this.state.searchResult} onAdd={this.addTrack} onRemove={this.removeTrack}/>
          <Playlist playListName={this.state.playListName} PlayListTracks={this.state.playListTracks} onNameChange={this.updatePlayList} onSave={this.savePlaList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
