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
    const description = cityData.list[0].weather[0].description;

      return (
        <tr key={id}>
          <td>
            <GoogleMap lon={lon} lat={lat} />
            <span className="map-caption">{name}</span>
          </td>
          <td>
              {description}
          </td>
          <td colSpan="2">
              <Chart data={temps} color="blue" units="c" />
              <Chart data={pressure} color="orange" units="hPa" />
              <Chart data={humidity} color="red" units="%" />
          </td>
        </tr>
      );
  }

  render() {
    return (
      <table className="table table-hover weather_list">
        <thead>
          <tr>
            <th>City</th>
            <th>Current Condition</th>
            <th>Next five days temperature, pressure and humidity</th>
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
