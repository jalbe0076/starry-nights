describe('As a user I should be presented with a picture of the day, it\s title and a description', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?api_key=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 200,
      fixture: 'picture-of-day.json'
    }).as('picture')
    cy.visit('http://localhost:3000/')
  });
  
  it('Should have a navigation bar and the picture details.', () => {
    cy.wait('@picture').then(() => {
      cy.get('.banner-container').contains('h1', 'STARRY NIGHTS')
      .get('.banner-container').contains('a', 'STARGAZING EVENTS')
      .get('.banner-container').contains('a', 'SAVED EVENTS')
      .get('.banner-container').find('.icons').should('have.attr', 'src', '/images/user-icon.png')
      .get('.general-container').children().should('have.length', 3).first().contains('h2', 'M82: Galaxy with a Supergalactic Wind')
      .get('.image-of-day').should('have.attr', 'alt', 'M82: Galaxy with a Supergalactic Wind')
      .get('.image-of-day-description').contains('p', 'Why is the Cigar Galaxy billowing red smoke?')
    })
  });
});