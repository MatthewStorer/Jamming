import React from 'react';
import ReactDOM from 'react-dom';
import './PlayList.css';
import TrackList from '../TrackList/TrackList.js';

class PlayList extends React.Component
{

constructor(props)
{

  super(props);

  this.handleNameChange = this.handleNameChange.bind(this);
}

 handleNameChange(event)
 {
   this.onNameChange(event.target.value);
 }

  render()
  {
    return(
    <div className="PlayList">
              <input value="New PlayList" onChange={this.handleNameChange}/>
              <TrackList tracks={this.props.playListTracks} onRemove={this.props.onRemove}/>
              <a className="PlayList-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
    </div>
  )
  }
}


export default PlayList;
