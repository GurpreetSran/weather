/* global it, describe, beforeEach, expect */

import { renderComponent, expect } from '../test_helper';
import SearchBar from '../../src/components/search_bar';

describe('Search Bar', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(SearchBar);
  });

  it('should have correct class', () => {
    expect(component).to.have.class('search_bar');
  });

  it('shoud have an input', () => {
    expect(component.find('input')).to.exist;
  });

  it('shoud have a button', () => {
    expect(component.find('button')).to.exist;
  });

  describe('text input', () => {
    beforeEach(() => {
      component.find('input').simulate('change', 'London');
    });

    it('should display text in input', () => {
      expect(component.find('input')).to.have.value('London');
    });

    it('should clear when submitted', () => {
      component.simulate('submit');
      expect(component.find('input')).to.have.value('');
    });
  });
});
