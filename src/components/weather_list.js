import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Chart from './chart';
import GoogleMap from './google_map';

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const { id, name } = cityData.city;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

      return (
        <tr key={id}>
          <td>
            {name}
            <GoogleMap lon={lon} lat={lat} />
          </td>
          <td><Chart data={temps} color="blue" units="c" /></td>
          <td><Chart data={pressure} color="orange" units="hPa" /></td>
          <td><Chart data={humidity} color="red" units="%" /></td>
        </tr>
      );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (c)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
