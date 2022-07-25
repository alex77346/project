import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
      searchString: ''
  }

  render() {



    let countries = this.props.items;
    const searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0){
      countries = countries.filter((country) =>
        country.name.toLowerCase().match( searchString )
      )}


    return (
      <div>
        <input value={this.state.search} onChange={this.handleChange} placeholder="Search!"/>
        <ul>
          { countries.map((country, i)=> <li key={i}>{country.name}</li>)}
        </ul>
      </div>
    );
  }

  handleChange = (event) =>{
    this.setState({
      searchString: event.target.value
    })
  }

}


export default App;
