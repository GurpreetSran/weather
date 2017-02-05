/* global it, describe, beforeEach, expect */

import { renderComponent, expect } from '../test_helper';
import WeatherList from '../../src/components/weather_list';
import data from '../listData.json';

describe('Weather List', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(WeatherList, null, data);
  });

  it('should add tr for each row', () => {
    const len = data.weather.length + 1;  // + Header
    expect(component.find('tr').length).to.equal(len);
  });

  it('should display correct city name', () => {
    const text1 = component.find('.map-caption:first').text();
    const text2 = component.find('.map-caption:last').text();

    expect(text1).to.equal('London');
    expect(text2).to.equal('Leicester');
  });
});
