/* global it, describe, beforeEach, expect */

import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('shoud have an input', () => {
    expect(component.find('input')).to.exist;
  });

  it('shoud have a button', () => {
    expect(component.find('button')).to.exist;
  });
});
