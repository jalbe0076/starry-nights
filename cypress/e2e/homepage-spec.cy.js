describe('As a user I should be presented with a picture of the day, it\s title and a description, I should also be presented with messages on network or navigation issues', () => {
  beforeEach(() => {
    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?api_key=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 200,
      fixture: 'picture-of-day.json'
    }).as('picture')
    cy.visit('http://localhost:3000/starry-nights')
  });
  
  it('Should have a navigation bar and the picture details. Should be able to navigate to the homepage by clicking the title', () => {
    cy.wait('@picture').then(() => {
      cy.get('.banner-container').contains('h1', 'STARRY NIGHTS')
      .get('.banner-container').contains('a', 'STARGAZING EVENTS')
      .get('.banner-container').contains('a', 'SAVED EVENTS')
      .get('.banner-container').find('.icons').should('have.attr', 'src', '/images/user-icon.png')
      .get('.general-container').children().should('have.length', 3).first().contains('h2', 'M82: Galaxy with a Supergalactic Wind')
      .get('.image-of-day').should('have.attr', 'alt', 'M82: Galaxy with a Supergalactic Wind')
      .get('.image-of-day-description').contains('p', 'Why is the Cigar Galaxy billowing red smoke?')
      .get('h1').click()
      .url('http://localhost:3000/starry-nights')
    })
  });

  it('Should not display a picture if there is a 500 level network error', () => {
    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?api_key=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/starry-nights')
    .get('h2').contains('HTTP Error: 500 Internal Server Error')
  })

  it('Should not display a picture if there is a 504 level network error', () => {
    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?api_key=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 504
    })
    cy.visit('http://localhost:3000/starry-nights')
    .get('h2').contains('HTTP Error: 504 Gateway Timeout')
  })

  it('Should not display a picture if there is a 404 level network error', () => {
    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?api_key=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/starry-nights')
     .get('h2').contains('HTTP Error: 404 Not Found')
  })

  it('Should be presented with an image if the path does not exist', () => {
    cy.wait('@picture').then(() => {
    cy.visit('http://localhost:3000/random-fake-path')
     .get('h2').contains('LOST IN SPACE, GO BACK!')
     .get('.bad-image').should('have.attr', 'alt', '9 different galaxies visible before you')
    })
  })
});