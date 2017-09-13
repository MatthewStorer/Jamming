import React from 'react';
import ReactDOM from 'react-dom';

class SearchResults extends React.Component
{
  render()
{
  return (<div className="SearchResults">
    <h2>Results</h2>
    <trackList tracks={this.props.searchResults} key={this.track.id}/>
  </div>


);}

}


export default SearchResults;
