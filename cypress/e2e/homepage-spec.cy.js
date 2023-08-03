describe('As a user I should be presented with a picture of the day, it\s title and a description', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?api_key=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 200,
      fixture: 'picture-of-day.json'
    }).as('picture')
    console.log('testing this out', process.env.REACT_APP_API_KEY)
  });
  
  it('Should have a navigation bar and the picture details.', () => {
    cy.visit('http://localhost:3000/')
  });
});