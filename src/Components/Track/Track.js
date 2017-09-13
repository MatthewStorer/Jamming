import React from 'react';
import ReactDOM from 'rect-dom';

class Track extends React.Component
{

  constructor()
  {
    super(props);

    this.state.addTrack = this.state.addTrack.bind(this);
    this.state.removeTrack = this.state.removeTrack.bind(this);
  }

  render()
{
  <div className="Track">
    <div className="Track-information">
      <h3>{this.props.track.name}</h3>
      <p>{this.props.track.artist} | {this.props.track.album}</p>
    </div>
    <a className="Track-action"><!-- + or - will go here --></a>
  </div>


}

addTrack(event) {
    this.props.onAdd(this.props.track);
  }

  onRemove(event) {
      this.props.onRemove(this.props.track);
    }

  rendorAction(isRemoval)
  {
    if(isRemoval)
    {
      return  <a className="Track-Action" onClick={this.removeTrack}>-</a>
    }
        else
    {
          return <a className="Track-Action"> onClick={this.addTrack}-</a>
    }
  }



}


export default Track;
