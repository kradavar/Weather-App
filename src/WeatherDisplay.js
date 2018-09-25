import React, { Component } from 'react';

class WeatherDisplay extends Component {
  constructor() {
    super();
    this.state = {
      weatherData: null
    };
  }

  componentDidMount() {
    const zip = this.props.zip;
    const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
      zip +
      "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial";
    fetch(URL).then(res => res.json()).then(json => {
      this.setState({
        weatherData: json
      });
    });
  }

  render() {
    if (!this.state.weatherData) {
      return (
        <div>Loading</div>
      );
    } else {
      const weather = this.state.weatherData.weather[0];
      const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
      return (
        <div>
          <h1>
            {weather.main} in {this.state.weatherData.name}
            <img src={iconUrl} alt={this.state.weatherData.description} />
          </h1>
          <p>Current: {this.state.weatherData.main.temp}°</p>
          <p>High: {this.state.weatherData.main.temp_max}°</p>
          <p>Low: {this.state.weatherData.main.temp_min}°</p>
          <p>Wind Speed: {this.state.weatherData.wind.speed} mi/hr</p>
        </div>
      );
    }
  };
}

export default WeatherDisplay;