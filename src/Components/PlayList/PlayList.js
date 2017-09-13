import React from 'react';
import ReactDOM from 'rect-dom';

class PlayList extends React.Component
{

  constructor()
  {

    super(props);

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event)
  {
    value.onNanmeChange(event.target.value);
  }


  render()
{
  <div className="Playlist">
    <input value="New Playlist" onChange={this.handleNameChange} />
    <TrackList Tracks={this.props.PlayListTracks} onRemove={this.props.onRemove} />
    <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
  </div>


}

}


export default PlayList;
