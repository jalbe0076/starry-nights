describe('I should be able to save upcoming events delete them', () => {
  beforeEach(() => {
    const date = new Date()
    date.setDate(date.getDate() + 60)
    const futureDate = date.toLocaleDateString('en-CA');
 
    cy.intercept('GET', `https://ssd-api.jpl.nasa.gov/cad.api?dist-max=0.05&date-max=${futureDate}`, {
      statusCode: 200,
      fixture: 'upcoming-events.json'
    }).as('upcoming-events')

    cy.visit('http://localhost:3000/stargazing-events')
  });

  it('Should be able to click on an upcoming event and be directed to a page that shows more details. Should be able to click on a button to toggle more information.', () => {
    cy.wait('@upcoming-events').then(() => {
      cy.get('.upcoming-container-selectable').should('have.length', 7)
        .get('.upcoming-container-selectable').first().contains('p', '2023-Aug-0410:05')
        .get('.upcoming-container-selectable').first().contains('p', '620082').click()
        .url('http://localhost:3000/stargazing-events/2460160.919906296/620082')
        .get('.general-container').contains('h2', 'Remember, patience and curiosity are the key to experiencing the wonders of the cosmos. Happy stargazing!')
        .get('.info-container').should('be.hidden')
        .get('.display-info-btn').contains('UNDERSTAND THE DATA')
        .get('.display-info-btn > .icons').should('have.attr', 'src', '/images/chevron-expand.png').click()
        .get('.info-container').should('be.visible')
        .get('.display-info-btn > .icons').should('have.attr', 'src', '/images/chevron-expand-less.png')
        .get('.info-container').find('li').should('have.length', 9).first().contains(`Designation (des): This is the name or designation of the celestial object, often the asteroid's name. It's a unique identifier, helping you keep track of different objects.`)
        .get('li').last().contains(`Absolute Magnitude (h): The absolute magnitude of the object indicates its brightness. A lower value usually means a brighter object. Though it lacks a specific unit, it is measured on the absolute magnitude scale.`)
        .get('.display-info-btn').click()
        .get('.info-container').should('be.hidden')
        .get('.general-container').contains('h3', 'Designation: 620082')
        .get('.general-container').contains('button', 'SAVE EVENT')
        .get('.event-details').find('ul').should('have.length', 9)
        .get('.event-details').find('ul').first().contains(`Date of Event: 2023-Aug-04 10:05`)
        .get('.event-details > .info-list > :nth-child(3)').contains(`Distance from Earth: 0.035754256006358 AU`)
        .get('.event-details').find('ul').last().contains(`Absolute Magnitude: 19.87`)
    })
  });

  it('Should be able to click on a button to save and delete the event and be notified if there are no saved events', () => {
    cy.wait('@upcoming-events').then(() => {
      cy.get('[href="/saved-events"]').should('have.css', 'color', 'rgb(249, 249, 249)').click()
        .get('[href="/saved-events"]').should('have.css', 'color', 'rgb(229, 221, 173)')
        .get('.list-leader').contains('No saved celestial events')
        .get('[href="/stargazing-events"]').click()
        .get('.upcoming-container-selectable').first().click()
        .url('http://localhost:3000/stargazing-events/2460160.919906296/620082')
        


        // .get('.general-container').contains('h2', 'Remember, patience and curiosity are the key to experiencing the wonders of the cosmos. Happy stargazing!')
        // .get('.info-container').should('be.hidden')
        // .get('.display-info-btn').contains('UNDERSTAND THE DATA')
        // .get('.display-info-btn > .icons').should('have.attr', 'src', '/images/chevron-expand.png').click()
        // .get('.info-container').should('be.visible')
        // .get('.display-info-btn > .icons').should('have.attr', 'src', '/images/chevron-expand-less.png')
        // .get('.info-container').find('li').should('have.length', 9).first().contains(`Designation (des): This is the name or designation of the celestial object, often the asteroid's name. It's a unique identifier, helping you keep track of different objects.`)
        // .get('li').last().contains(`Absolute Magnitude (h): The absolute magnitude of the object indicates its brightness. A lower value usually means a brighter object. Though it lacks a specific unit, it is measured on the absolute magnitude scale.`)
        // .get('.display-info-btn').click()
        // .get('.info-container').should('be.hidden')
        // .get('.general-container').contains('h3', 'Designation: 620082')
        // .get('.general-container').contains('button', 'SAVE EVENT')
        // .get('.event-details').find('ul').should('have.length', 9)
        // .get('.event-details').find('ul').first().contains(`Date of Event: 2023-Aug-04 10:05`)
        // .get('.event-details > .info-list > :nth-child(3)').contains(`Distance from Earth: 0.035754256006358 AU`)
        // .get('.event-details').find('ul').last().contains(`Absolute Magnitude: 19.87`)
    })
  });
});