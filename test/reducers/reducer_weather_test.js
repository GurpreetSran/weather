/* global it, describe, beforeEach, expect */

import { expect } from '../test_helper';
import reducerWeather from '../../src/reducers/reducer_weather';
import { FETCH_WEATHER } from '../../src/actions';

describe('Weather reducer', () => {
  it('should handle unknown type action', () => {
    expect(reducerWeather()).to.eql([]);
  });

  it('should handle FETCH_WEATHER type', () => {
    const action = { type: FETCH_WEATHER, payload: { data: 'London' } };
    expect(reducerWeather([], action)[0]).to.equal('London');
  });
});
