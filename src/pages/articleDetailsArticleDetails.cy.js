import React from 'react';
import ArticleDetails from './articleDetails';

describe('<ArticleDetails />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ArticleDetails />);
  });
});
