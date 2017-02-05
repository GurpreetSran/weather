/* global it, describe, beforeEach, expect */

import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('should have correct class', () => {
    expect(component).to.have.class('app');
  });
});
