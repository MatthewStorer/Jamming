import React from 'react';
import ReactDOM from 'react-dom';

class TrackList extends React.Component
{
  render()
{
  return (<div className="TrackList">
  <track key={this.track.id} track={this.track} onAdd={this.props.onAdd} onRemove={this.props.onRemove} />
  this.props.tracks.map();
  </div>

);}

}


export default TrackList;
