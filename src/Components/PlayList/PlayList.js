import React from 'react';
import ReactDOM from 'react-dom';
import './PlayList.css';
import TrackList from '../TrackList/TrackList';

class PlayList extends React.Component
{

  constructor(props)
  {

    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event)
  {
    this.onChange(event.target.value);
  }


  render()
{
  return (<div className="Playlist">
    <input value="New Playlist" onChange={this.handleNameChange} />
    <TrackList Tracks={this.props.playListTracks} onRemove={this.props.onRemove} />
    <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
  </div>


);}

}


export default PlayList;
