import React from 'react';
import axios from 'axios';

import Search from './Search.jsx';
import ExactHomeList from './ExactHomeList.jsx';
import NearbyHomeList from './NearbyHomeList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exact: [],
      nearby: [],
      suggestions: []
    }
    this.getSuggestions = this.getSuggestions.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    const homes = JSON.parse(localStorage.getItem('homes'));
    if (homes) {
      this.setState({
        exact: homes.exact || [],
        nearby: homes.nearby || []
      })
    }
  }

  getSuggestions(data) {
    axios.get('/homes', {params: { address: data}})
    .then((res) => {
      const suggestions = [...res.data.exact, ...res.data.nearby].map((home) => home.address);
      this.setState({
        suggestions: suggestions
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  handleSearch(data) {
    axios.get('/homes', {params: { address: data}})
      .then((res) => {
        this.setState({
          exact: res.data.exact,
          nearby: res.data.nearby
        })
        localStorage.setItem('homes', JSON.stringify(this.state))
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1 className="title">Home Finder</h1>
          <Search
            suggestions={this.state.suggestions}
            handleSearch={this.handleSearch}
            getSuggestions={this.getSuggestions}/>
        </div>
        <div className="search-result">
            <ExactHomeList list={this.state.exact}/>
            {this.state.exact.length === 0 ?
                <NearbyHomeList list={this.state.nearby}/>
             :null}
          </div>
      </div>)
  }
};

export default App;