describe('I should be able to navigate to a page containing upcoming events', () => {
  beforeEach(() => {
    const date = new Date()
    date.setDate(date.getDate() + 60)
    const futureDate = date.toLocaleDateString('en-CA');
    
    cy.intercept('GET', `https://api.nasa.gov/planetary/apod?api_key=${Cypress.env('REACT_APP_API_KEY')}`, {
      statusCode: 200,
      fixture: 'picture-of-day.json'
    })
    
    cy.intercept('GET', `https://ssd-api.jpl.nasa.gov/cad.api?dist-max=0.05&date-max=${futureDate}`, {
      statusCode: 200,
      fixture: 'upcoming-events.json'
    }).as('upcoming-events')

    cy.visit('http://localhost:3000/')
  });

  it('Should see a list of upcoming events', () => {
    cy.get('.nav-links').first().should('have.css', 'color', 'rgb(229, 221, 173)').click()
      cy.wait('@upcoming-events').then(() => {
        cy.get('.nav-links').first().should('have.css', 'color', 'rgb(236, 218, 119)')
          .get('.general-container').should('be.visible').contains('h2', 'Upcoming Celestial Events')
          .next().contains('p', 'Mark your cosmic calendar!')
          .next().contains('p', 'Get ready for upcoming celestial')
          .get('.upcoming-container-selectable').should('have.length', 7)
          .get('.upcoming-container-selectable').first().contains('p', '2023-Aug-0410:05')
          .get('.upcoming-container-selectable').first().contains('p', '620082')
          .get('.upcoming-container-selectable').next().contains('p', '2023-Aug-0421:43')
          .get('.upcoming-container-selectable').next().contains('p', '2023 OR5')
          .get('.upcoming-container-selectable').last().contains('p', '2023-Aug-1909:40')
          .get('.upcoming-container-selectable').last().contains('p', '2011 QJ21')
      })
  });
});