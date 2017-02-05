/* global it, describe, beforeEach, expect */

import { expect } from '../test_helper';
import { FETCH_WEATHER, fetchWeather } from '../../src/actions';

describe('actions', () => {
  it('should have correct type', () => {
      const action = fetchWeather();
      expect(action.type).to.equal(FETCH_WEATHER);
  });
});
