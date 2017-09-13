import React from 'react';
import ReactDOM from 'rect-dom';

class SearchBar extends React.Component
{

  constructor()
  {
    super(props);
    this.state.search = this.state.search.bind(this)
    this.state.handleTermChange = this.state.handleTermChange.bind(this)
  }

search(event)
{
  this.props.search(this.state.search);
}

handleTermChange(event)
{
  this.setState({search: event.target.value});
}

  render()
{
<div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
  <a>SEARCH</a>
</div>


}

}


export default SearchBar;
