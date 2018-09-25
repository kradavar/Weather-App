import React, { Component } from 'react';
import './App.css';
import WeatherDisplay from './WeatherDisplay';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [
        { name: "Palo Alto", zip: "94303" },
        { name: "San Jose", zip: "94088" },
        { name: "Santa Cruz", zip: "95062" },
        { name: "Honolulu", zip: "96803" }],
      activePlace: 0
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(index) {
    console.log("Clicked index " + index);
    this.setState({ activePlace: index });
  }
  render() {
    return (
      <div className="App">
        {this.state.places.map((city, index) => (
          <button key={index} onClick={this.handleOnClick.bind(null, index)} >
            {city.name}
          </button>
        ))}
        <WeatherDisplay zip={"96803"} />
      </div>
    );
  }
}

export default App;
