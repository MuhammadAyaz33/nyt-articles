import React from 'react';
import Articles from './articles';

describe('<Articles />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Articles />);
  });
});
